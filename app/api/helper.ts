import OpenAI from "openai";
import { getUserMessage, SYSTEM_MESSAGE } from "./prompt";

export interface AIResponse {
   tools: {
      categories: {
         name: string;
         tools: {
            name: string;
            description: string;
         }[];
      }[];
   };
   roadmaps: {
      quarter: string;
      phase: string;
      milestones: {
         description: string;
      }[];
   }[];
   tokenomics: {
      totalSupply: string;
      distribution: {
         channel: string;
         percentage: string;
         vestingSchedule: string;
      }[];
      utility: string[];
      recommendations: string;
   };
   useCases: {
      title: string;
      description: string;
   }[];
   proTip: string;
   summary: string;
}

export async function generateResult(inputUser: string) {
   const openai = new OpenAI({
      baseURL: "https://openrouter.ai/api/v1",
      apiKey: process.env.NEXT_PUBLIC_SK_OPENROUTER,
   });
   const completion = await openai.chat.completions.create({
      model: "meta-llama/llama-4-maverick:free",
      messages: [
         {
            role: "system",
            content: SYSTEM_MESSAGE,
         },
         { role: "user", content: getUserMessage(inputUser) },
      ],
   });
   const result = completion.choices[0].message.content;

   if (!result) {
      throw new Error("No result from AI");
   }

   const cleaned = result
      .replace(/(\r\n|\n|\r)/gm, "")
      .replace("```json", "")
      .replace("```", "");
   //    const json: AIResponse = JSON.parse(cleaned);

   return cleaned;
}
