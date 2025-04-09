"use client";

import { Button } from "@/components/ui/button";
import { BotIcon, FileDown, FileText } from "lucide-react";
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import { saveAs } from "file-saver";
import { AIResponse } from "@/app/api/helper";
import { ProjectResults } from "@/types/results";

export default function ExportSection({ data }: { data: ProjectResults }) {
   const handleDownloadPDF = async () => {
      try {
         const margin = 50;
         const pdfDoc = await PDFDocument.create();
         const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

         let page = pdfDoc.addPage();
         let { width, height } = page.getSize();
         let y = height - margin;
         const fontSize = 12;
         const titleFontSize = 18;
         const lineHeight = 18;

         // Helper to add a new page when there’s not enough room.
         const addPage = () => {
            page = pdfDoc.addPage();
            const size = page.getSize();
            height = size.height;
            width = size.width;
            y = height - margin;
         };

         // Check if there is enough space to write the given number of lines.
         const ensureSpace = (lines = 1) => {
            if (y - lineHeight * lines < margin) {
               addPage();
            }
         };

         // Helper to split a long word into parts if it exceeds the maxWidth.
         const splitLongWord = (
            word: string,
            font: any,
            fontSize: number,
            maxWidth: number
         ) => {
            const characters = word.split("");
            let chunk = "";
            const parts: string[] = [];
            for (const char of characters) {
               if (
                  font.widthOfTextAtSize(chunk + char, fontSize) > maxWidth &&
                  chunk
               ) {
                  parts.push(chunk);
                  chunk = char;
               } else {
                  chunk += char;
               }
            }
            if (chunk) parts.push(chunk);
            return parts;
         };

         // Wrap text into multiple lines if its width is over maxWidth.
         const wrapText = (
            text: string,
            font: any,
            fontSize: number,
            maxWidth: number
         ) => {
            const words = text.split(" ");
            const lines: string[] = [];
            let line = "";
            for (const word of words) {
               // If a single word is too long, split it into smaller parts.
               if (font.widthOfTextAtSize(word, fontSize) > maxWidth) {
                  if (line) {
                     lines.push(line);
                     line = "";
                  }
                  const parts = splitLongWord(word, font, fontSize, maxWidth);
                  parts.forEach((part) => {
                     lines.push(part);
                  });
                  continue;
               }
               const testLine = line ? `${line} ${word}` : word;
               const testWidth = font.widthOfTextAtSize(testLine, fontSize);
               if (testWidth > maxWidth && line) {
                  lines.push(line);
                  line = word;
               } else {
                  line = testLine;
               }
            }
            if (line) lines.push(line);
            return lines;
         };

         // Draw wrapped text starting at a specific x and y.
         const drawWrappedText = (
            text: string,
            x: number,
            currentY: number,
            fontSize: number,
            font: any,
            color?: any
         ) => {
            const maxWidth = width - margin * 2;
            // If text length exceeds 96 characters, split by fixed chunk.
            let lines: string[] = [];
            if (text.length > 96) {
               // Split text into chunks of at most 96 characters.
               lines = text.match(/.{1,96}/g) || [];
            } else {
               lines = wrapText(text, font, fontSize, maxWidth);
            }
            for (const line of lines) {
               ensureSpace();
               page.drawText(line, {
                  x,
                  y: currentY,
                  size: fontSize,
                  font,
                  color,
               });
               currentY -= lineHeight;
            }
            return currentY;
         };

         // Title
         ensureSpace(2);
         page.drawText(data.projectName + " Blueprint", {
            x: margin,
            y,
            size: titleFontSize,
            font,
            color: rgb(0, 0, 0),
         });
         y -= titleFontSize + 12;

         // Tools Section
         ensureSpace(2);
         page.drawText("Tools:", { x: margin, y, size: fontSize, font });
         y -= lineHeight;
         data.tools.categories.forEach((category) => {
            ensureSpace(2);
            page.drawText(`Category: ${category.name}`, {
               x: margin + 10,
               y,
               size: fontSize,
               font,
            });
            y -= lineHeight;
            category.tools.forEach((tool) => {
               ensureSpace();
               y = drawWrappedText(
                  `- ${tool.name}: ${tool.description}`,
                  margin + 20,
                  y,
                  fontSize,
                  font
               );
            });
            y -= lineHeight * 0.5;
         });

         // Roadmaps Section
         ensureSpace(2);
         page.drawText("Roadmaps:", { x: margin, y, size: fontSize, font });
         y -= lineHeight;
         data.roadmaps.forEach((roadmap) => {
            ensureSpace(2);
            page.drawText(
               `Quarter: ${roadmap.quarter}, Phase: ${roadmap.phase}`,
               {
                  x: margin + 10,
                  y,
                  size: fontSize,
                  font,
               }
            );
            y -= lineHeight;
            roadmap.milestones.forEach((milestone) => {
               ensureSpace();
               y = drawWrappedText(
                  `- ${milestone.description}`,
                  margin + 20,
                  y,
                  fontSize,
                  font
               );
            });
            y -= lineHeight * 0.5;
         });

         // Tokenomics Section
         ensureSpace(2);
         page.drawText("Tokenomics:", { x: margin, y, size: fontSize, font });
         y -= lineHeight;
         ensureSpace();
         page.drawText(`Total Supply: ${data.tokenomics.totalSupply}`, {
            x: margin + 10,
            y,
            size: fontSize,
            font,
         });
         y -= lineHeight;
         data.tokenomics.distribution.forEach((dist) => {
            ensureSpace();
            page.drawText(
               `- ${dist.channel}: ${dist.percentage}% (Vesting: ${dist.vestingSchedule})`,
               {
                  x: margin + 20,
                  y,
                  size: fontSize,
                  font,
               }
            );
            y -= lineHeight;
         });
         ensureSpace();
         y = drawWrappedText(
            `Utility: ${data.tokenomics.utility.join(", ")}`,
            margin + 10,
            y,
            fontSize,
            font
         );
         ensureSpace();
         y = drawWrappedText(
            `Recommendations: ${data.tokenomics.recommendations}`,
            margin + 10,
            y,
            fontSize,
            font
         );

         // Use Cases Section
         ensureSpace(2);
         page.drawText("Use Cases:", { x: margin, y, size: fontSize, font });
         y -= lineHeight;
         data.useCases.forEach((useCase) => {
            ensureSpace(2);
            page.drawText(`Title: ${useCase.title}`, {
               x: margin + 10,
               y,
               size: fontSize,
               font,
            });
            y -= lineHeight;
            ensureSpace(2);
            y = drawWrappedText(
               `Description: ${useCase.description}`,
               margin + 20,
               y,
               fontSize,
               font
            );
            y -= lineHeight * 0.5;
         });

         // Pro Tip Section
         ensureSpace(2);
         page.drawText("Pro Tip:", { x: margin, y, size: fontSize, font });
         y -= lineHeight;
         ensureSpace();
         y = drawWrappedText(data.proTip, margin + 10, y, fontSize, font);

         const pdfBytes = await pdfDoc.save();

         // Trigger download using file-saver
         const blob = new Blob([pdfBytes], { type: "application/pdf" });
         saveAs(
            blob,
            data.projectName.toLowerCase().split(" ").join("-") +
               "-blueprint.pdf"
         );
      } catch (error) {
         alert("An error occurred while generating the PDF. Please try again.");
         console.error("Error generating PDF:", error);
      }
   };

   return (
      <div className="fixed bottom-0 left-0 z-10 w-full border-t border-cyberteal-primary/20 bg-cyberteal-background/90 py-4 backdrop-blur-md">
         <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 sm:flex-row">
            <p className="text-sm text-cyberteal-muted">
               Ready to share your project with the world?
            </p>
            <div className="flex flex-col md:flex-row w-full gap-3 sm:w-auto">
               <Button
                  variant="outline"
                  className="flex-1 border-cyberteal-primary/30 bg-cyberteal-surface text-cyberteal-text hover:border-cyberteal-primary hover:bg-cyberteal-surface/80 sm:flex-initial hover:text-white"
               >
                  <BotIcon className="mr-2 h-4 w-4" />
                  Chat to AI
               </Button>
               <Button
                  onClick={handleDownloadPDF}
                  className="cyber-button flex-1 rounded-md shadow-cyber hover:shadow-cyber-hover sm:flex-initial"
               >
                  <span className="cyber-button-content flex items-center text-black">
                     <FileDown className="mr-2 h-4 w-4" />
                     Download Blueprint (PDF)
                  </span>
               </Button>
            </div>
         </div>
      </div>
   );
}
