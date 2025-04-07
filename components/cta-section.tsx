import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export default function CtaSection() {
   return (
      <section className="mx-auto max-w-4xl py-16 text-center">
         <div className="rounded-xl bg-gradient-to-r from-cyberteal-primary/10 to-cyberteal-secondary/10 p-8">
            <h2 className="mb-4 text-3xl font-bold text-cyberteal-text">
               Ready to Present Your Idea?
            </h2>
            <p className="mb-6 text-lg text-cyberteal-muted">
               Export your AI-generated project plan as a professional pitch
               deck to share with potential investors and team members.
            </p>
            <Button
               size="lg"
               className="cyber-button rounded-md shadow-cyber hover:shadow-cyber-hover"
            >
               <span className="cyber-button-content flex items-center text-black">
                  <FileDown className="mr-2 h-5 w-5" />
                  Export as Pitch Deck (PDF)
               </span>
            </Button>
         </div>
      </section>
   );
}
