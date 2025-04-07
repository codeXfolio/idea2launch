"use client";

import { Button } from "@/components/ui/button";
import { FileDown, FileText } from "lucide-react";

export default function ExportSection() {
   const handleExportMarkdown = () => {
      // In a real implementation, this would generate and download a markdown file
      console.log("Exporting as Markdown");
   };

   const handleDownloadPDF = () => {
      // In a real implementation, this would generate and download a PDF
      console.log("Downloading PDF");
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
                  onClick={handleExportMarkdown}
                  className="flex-1 border-cyberteal-primary/30 bg-cyberteal-surface text-cyberteal-text hover:border-cyberteal-primary hover:bg-cyberteal-surface/80 sm:flex-initial hover:text-white"
               >
                  <FileText className="mr-2 h-4 w-4" />
                  Export as Markdown
               </Button>
               <Button
                  onClick={handleDownloadPDF}
                  className="cyber-button flex-1 rounded-md shadow-cyber hover:shadow-cyber-hover sm:flex-initial"
               >
                  <span className="cyber-button-content flex items-center text-black">
                     <FileDown className="mr-2 h-4 w-4" />
                     Download Pitch Deck (PDF)
                  </span>
               </Button>
            </div>
         </div>
      </div>
   );
}
