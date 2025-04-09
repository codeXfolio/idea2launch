import { Button } from "@/components/ui/button";
import { FileDown, School } from "lucide-react";

export default function CtaSection() {
   return (
      <section className="mx-4 md:mx-auto max-w-4xl py-16 text-center pb-40 md:pb-20">
         <div className="rounded-xl bg-gradient-to-r from-cyberteal-primary/10 to-cyberteal-secondary/10 p-8">
            <h2 className="mb-4 text-3xl font-bold text-cyberteal-text">
               Ready to Build Your Project?
            </h2>
            <p className="mb-6 text-lg text-cyberteal-muted">
               Build on Soneium for low fees, high throughput, and seamless
               Ethereum integration.
            </p>
            <Button
               size="lg"
               onClick={() =>
                  window.open("https://docs.soneium.org/", "_blank")
               }
               className="cyber-button rounded-md shadow-cyber hover:shadow-cyber-hover"
            >
               <span className="cyber-button-content flex items-center text-black">
                  <School className="mr-2 h-5 w-5" />
                  Learn More
               </span>
            </Button>
         </div>
      </section>
   );
}
