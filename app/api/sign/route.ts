import { NextResponse } from "next/server";
import { ethers } from "ethers";
import { PrismaClient } from "@prisma/client";

export async function POST(request: Request) {
   try {
      const { signature } = await request.json();

      if (!signature) {
         return NextResponse.json(
            { error: "Missing signature" },
            { status: 400 }
         );
      }

      const address = ethers.verifyMessage("Sign to I2L", signature);

      const prisma = new PrismaClient();
      const user = await prisma.user.findFirst({
         where: {
            address: address,
         },
      });

      if (!user) {
         await prisma.user.create({
            data: {
               address: address,
            },
         });
      }

      return NextResponse.json({ address: address });
   } catch (error: any) {
      // Log the error for debugging
      console.error("Error sending request:", error);

      if (error instanceof SyntaxError) {
         return NextResponse.json({
            error: "Invalid JSON format",
         });
      }

      return NextResponse.json(
         { error: error.shortMessage || error.message },
         { status: 500 }
      );
   }
}
