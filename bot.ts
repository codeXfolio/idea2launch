import { Telegraf } from "telegraf";
import OpenAI from "openai";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN || "");

const openai = new OpenAI({
   baseURL: "https://openrouter.ai/api/v1",
   apiKey: process.env.NEXT_PUBLIC_SK_OPENROUTER || "",
});

bot.start(async (ctx) => {
   const resultId = ctx.message.text.split(" ")[1]; // Extract result ID from the start command
   if (!resultId) {
      return ctx.reply(
         "Please provide a valid result ID. Example: /start <resultId>"
      );
   }

   // Fetch the result summary from the database
   const result = await prisma.result.findFirst({
      where: { id: resultId },
   });

   // Save the user's Telegram ID and result ID to the database
   const assist = await prisma.assistBot.create({
      data: {
         telegramId: ctx.from.id.toString(),
         resultId,
         userId: result?.userId,
      },
   });

   await prisma.chat.create({
      data: {
         message: `
Act as an expert Web3/blockchain mentor with strong technical and business experience. Your role is to analyze new project ideas and give clear, actionable feedback.

Focus on:
- Technical feasibility (smart contracts, tokenomics, dApps, etc.)
- Business strategy (market fit, monetization, growth)
- Risks, weaknesses, and areas to improve
- Sharp, professional advice with real-world insight

Here's the project description:
${result?.summary}
`,
         role: "system",
         assistBotId: assist.id,
      },
   });

   if (!result) {
      return ctx.reply("Result not found. Please provide a valid result ID.");
   }

   ctx.reply(`Welcome! You can now chat with the assistant.`);
});

bot.on("text", async (ctx) => {
   const telegramId = ctx.from.id.toString();

   // Fetch the AssistBot entry for the user
   const assistBot = await prisma.assistBot.findFirst({
      where: { telegramId },
      include: { chats: { orderBy: { id: "asc" }, take: 8 }, result: true }, // Fetch the last 5 chat messages
   });

   if (!assistBot) {
      return ctx.reply(
         "You need to start the bot with a valid result ID first."
      );
   }

   const chatHistory = assistBot.chats
      .reverse() // Reverse to maintain chronological order
      .map((chat) => ({
         role: chat.role as "user" | "assistant" | "system",
         content: chat.message,
      }));

   // Add the current user message to the chat history
   chatHistory.push({ role: "user", content: ctx.message.text } as const);

   try {
      // Send the chat history to OpenAI
      const completion = await openai.chat.completions.create({
         model: "meta-llama/llama-4-maverick:free",
         messages: [
            { role: "system", content: assistBot.result.summary }, // Use the result summary as the system message
            ...chatHistory,
         ],
      });

      const aiResponse = completion.choices[0].message.content;

      if (!aiResponse) {
         throw new Error("No response from AI");
      }

      // Save the user message and AI response to the database
      await prisma.chat.create({
         data: {
            message: ctx.message.text,
            assistBotId: assistBot.id,
         },
      });

      await prisma.chat.create({
         data: {
            message: aiResponse,
            role: "system",
            assistBotId: assistBot.id,
         },
      });

      function markdownToHTML(markdown: string): string {
         // Convert headings
         markdown = markdown
            .replace(/^###### (.*$)/gim, "<h6>$1</h6>")
            .replace(/^##### (.*$)/gim, "<h5>$1</h5>")
            .replace(/^#### (.*$)/gim, "<h4>$1</h4>")
            .replace(/^### (.*$)/gim, "<h3>$1</h3>")
            .replace(/^## (.*$)/gim, "<h2>$1</h2>")
            .replace(/^# (.*$)/gim, "<h1>$1</h1>")
            // Bold and italic
            .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
            .replace(/\*(.*?)\*/gim, "<em>$1</em>")
            // Inline code and block code
            .replace(/```([\s\S]*?)```/gim, "<pre><code>$1</code></pre>")
            .replace(/`(.*?)`/gim, "<code>$1</code>")
            // Links
            .replace(/\[([^\]]+)]\(([^)]+)\)/gim, '<a href="$2">$1</a>');
         return markdown.trim();
      }

      const htmlResponse = markdownToHTML(aiResponse);

      // Reply to the user with the AI's response
      ctx.reply(htmlResponse, { parse_mode: "HTML" });
   } catch (error) {
      console.error("Error communicating with AI:", error);
      ctx.reply(
         "An error occurred while processing your request. Please try again later."
      );
   }
});

console.log("Telegram bot is running...");
bot.launch();

// Graceful shutdown
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
