"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useAppKitAccount } from "@reown/appkit/react";
import GenerateForm from "@/app/generate-form";

export default function HeroSection() {
   return (
      <section className="mx-auto max-w-4xl py-16 text-center">
         <h1 className="mb-6 bg-gradient-to-r from-cyberteal-primary to-cyberteal-secondary bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-4xl md:text-5xl">
            Transform Your Web3 Vision into Reality with AI-Optimized Strategies
         </h1>
         <p className="mb-8 text-xl text-cyberteal-muted">
            Share your innovative Web3 concept and let AI generate a
            comprehensive strategy, from roadmap and tokenomics to a compelling
            pitch deck.
         </p>

         <GenerateForm />
      </section>
   );
}
