import { NextResponse } from "next/server";
import { AIResponse, generateResult } from "../helper";
import { PrismaClient } from "@prisma/client";
import { ethers } from "ethers";
import crypto from "crypto";

export async function POST(request: Request) {
   try {
      const json: { inputUser: string; signature: string } =
         await request.json();

      if (!json.inputUser || !json.signature) {
         return NextResponse.json(
            {
               error: "Missing inputUser or signature",
            },
            { status: 400 }
         );
      }

      const prisma = new PrismaClient();

      // Verify the signature
      const { signature } = json;
      const address = ethers.verifyMessage("Sign to I2L", signature);
      const user = await prisma.user.findFirst({
         where: {
            address: address,
         },
      });
      if (!user) {
         return NextResponse.json(
            {
               error: "User not found",
            },
            { status: 404 }
         );
      }

      if (user.limit <= 0) {
         return NextResponse.json(
            {
               error: "User limit exceede, please try again tomorrow",
            },
            { status: 403 }
         );
      }
      // Decrease the user's limit
      await prisma.user.update({
         where: {
            address: address,
         },
         data: {
            limit: user.limit - 1,
         },
      });

      // Check if the user has already generated a result
      const promptHash = crypto
         .createHash("md5")
         .update(json.inputUser.toLowerCase())
         .digest("hex");
      const existingResult = await prisma.result.findFirst({
         where: {
            promptHash: promptHash,
         },
         select: {
            id: true,
         },
      });

      if (existingResult) {
         return NextResponse.json({
            id: existingResult.id,
         });
      }

      const generated = await generateResult(json.inputUser);
      const parsed: AIResponse = JSON.parse(generated);

      const result = await prisma.result.create({
         data: {
            json: generated,
            summary: parsed.summary,
            promptHash,
            userId: user.id,
         },
         select: {
            id: true,
         },
      });

      return NextResponse.json({ id: result.id });
   } catch (error: any) {
      // Log the error for debugging
      console.error("Error sending request:", error);

      if (error instanceof SyntaxError) {
         return NextResponse.json({
            error: "Invalid JSON format",
         });
      }

      return NextResponse.json({ error: error.message }, { status: 500 });
   }
}
