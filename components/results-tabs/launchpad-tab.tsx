import type { LaunchpadGuide } from "@/types/results";
import {
   FileText,
   FileCheck,
   ExternalLink,
   Lightbulb,
   BookOpen,
} from "lucide-react";
import Link from "next/link";

interface LaunchpadTabProps {
   guide: LaunchpadGuide;
}

export default function LaunchpadTab({ guide }: LaunchpadTabProps) {
   return (
      <div className="space-y-6 text-cyberteal-text">
         <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyberteal-primary/10">
               <FileText className="h-5 w-5 text-cyberteal-primary" />
            </div>
            <h2 className="text-xl font-semibold text-cyberteal-text">
               Submit to Launchpad / VC Guide
            </h2>
         </div>

         <p className="text-cyberteal-muted">
            Follow this guide to maximize your chances of securing funding and
            support for your Web3 project:
         </p>

         <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-5">
               <div className="flex items-center space-x-2">
                  <FileCheck className="h-5 w-5 text-cyberteal-primary" />
                  <h3 className="font-medium text-cyberteal-primary">
                     How to Write a Good Proposal
                  </h3>
               </div>

               <div className="space-y-4">
                  {guide.proposalSteps.map((step, index) => (
                     <div
                        key={index}
                        className="rounded-md bg-cyberteal-surface/50 p-3"
                     >
                        <div className="flex items-center space-x-2">
                           <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyberteal-primary/20 text-xs font-medium text-cyberteal-primary">
                              {index + 1}
                           </div>
                           <h4 className="font-medium text-cyberteal-text">
                              {step.title}
                           </h4>
                        </div>
                        <p className="mt-1 text-sm text-cyberteal-muted">
                           {step.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>

            <div className="space-y-6">
               <div className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-5">
                  <div className="mb-3 flex items-center space-x-2">
                     <ExternalLink className="h-5 w-5 text-cyberteal-secondary" />
                     <h3 className="font-medium text-cyberteal-secondary">
                        Top Web3 Launchpads & VCs
                     </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                     {guide.launchpads.map((launchpad, index) => (
                        <Link
                           key={index}
                           href={launchpad.applyUrl}
                           className="rounded-md bg-cyberteal-surface/50 p-2 text-center text-sm transition-all duration-200 hover:bg-cyberteal-secondary/10 hover:text-cyberteal-secondary"
                        >
                           {launchpad.name}
                        </Link>
                     ))}
                  </div>
               </div>

               <div className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-5">
                  <div className="mb-3 flex items-center space-x-2">
                     <Lightbulb className="h-5 w-5 text-cyberteal-primary" />
                     <h3 className="font-medium text-cyberteal-primary">
                        Tips for Getting Noticed
                     </h3>
                  </div>

                  <div className="space-y-2">
                     {guide.tips.map((tip, index) => (
                        <div
                           key={index}
                           className="rounded-md bg-cyberteal-surface/50 p-2"
                        >
                           <div className="font-medium text-cyberteal-text">
                              {tip.title}
                           </div>
                           <div className="text-xs text-cyberteal-muted">
                              {tip.description}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <div className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-5">
            <div className="mb-3 flex items-center space-x-2">
               <BookOpen className="h-5 w-5 text-cyberteal-secondary" />
               <h3 className="font-medium text-cyberteal-secondary">
                  Example Pitch Decks
               </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
               {guide.pitchDecks.map((deck, index) => (
                  <Link
                     key={index}
                     target="_blank"
                     href={deck.url}
                     className="flex flex-col items-center rounded-md bg-cyberteal-surface/50 p-4 text-center transition-all duration-200 hover:bg-cyberteal-secondary/10 hover:text-cyberteal-secondary"
                  >
                     <FileText className="mb-2 h-8 w-8 text-cyberteal-muted" />
                     <span className="text-sm">{deck.title}</span>
                  </Link>
               ))}
            </div>
         </div>

         <div className="rounded-lg border border-cyberteal-secondary/20 bg-cyberteal-secondary/5 p-4">
            <h3 className="mb-2 font-medium text-cyberteal-secondary">
               Funding Strategy
            </h3>
            <p className="text-sm text-cyberteal-muted">
               Consider applying to multiple launchpads and VCs simultaneously,
               but tailor each application to the specific investor's focus
               areas and requirements. Track your applications and follow up
               professionally after 2-3 weeks.
            </p>
         </div>
      </div>
   );
}
