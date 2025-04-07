"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { Textarea } from "./ui/textarea";

export default function HeroSection() {
   const [projectIdea, setProjectIdea] = useState("");

   const handleGenerateRoadmap = () => {
      // This would trigger the AI generation in a real implementation
      console.log("Generating roadmap for:", projectIdea);
   };

   return (
      <section className="mx-auto max-w-4xl py-16 text-center">
         <h1 className="mb-4 bg-gradient-to-r from-cyberteal-primary to-cyberteal-secondary bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-5xl md:text-6xl">
            Build Your Crypto Project with AI in 5 Minutes
         </h1>
         <p className="mb-8 text-xl text-cyberteal-muted">
            Describe your Web3 idea and let AI turn it into a roadmap,
            tokenomics, and a pitch deck.
         </p>

         <div className="mx-auto mb-8 max-w-2xl rounded-xl bg-cyberteal-surface p-6 shadow-cyber">
            <div className="mb-4">
               <Textarea
                  placeholder="Describe your project idea…"
                  className="h-16 border-cyberteal-primary/30 bg-cyberteal-background text-lg text-cyberteal-text placeholder:text-cyberteal-muted/70 focus:border-cyberteal-primary focus:ring-cyberteal-primary"
                  value={projectIdea}
                  onChange={(e) => setProjectIdea(e.target.value)}
               />
            </div>
            <Button
               onClick={handleGenerateRoadmap}
               className="cyber-button h-12 w-full rounded-md text-lg shadow-cyber hover:shadow-cyber-hover text-black"
            >
               <span className="cyber-button-content flex items-center justify-center">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Generate Roadmap
               </span>
            </Button>
         </div>
      </section>
   );
}
