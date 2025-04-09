import { PrismaClient } from "@prisma/client";
import { NextApiRequest } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
   const resId = request.nextUrl.searchParams.get("id");

   if (!resId) {
      return NextResponse.json({ error: "Missing resId" }, { status: 400 });
   }

   const prisma = new PrismaClient();
   const result = await prisma.result.findFirst({
      where: {
         id: resId,
      },
   });

   if (!result) {
      return NextResponse.json({ error: "Result not found" }, { status: 404 });
   }

   return NextResponse.json(JSON.parse(result.json));
}
