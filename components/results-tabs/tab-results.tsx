"use client";

import { useState } from "react";
import type { ProjectResults } from "@/types/results";
import { Lightbulb, Coins, MapIcon, Wrench, FileText } from "lucide-react";
import UseCaseTab from "./use-case-tab";
import TokenomicsTab from "./tokenomics-tab";
import RoadmapTab from "./roadmap-tab";
import ToolsTab from "./tools-tab";
import LaunchpadTab from "./launchpad-tab";
import { mockResults } from "@/data/mock-results";

interface TabResultsProps {
   results: ProjectResults;
}

export default function TabResults({ results }: TabResultsProps) {
   const [activeTab, setActiveTab] = useState("use-cases");

   const tabs = [
      {
         id: "use-cases",
         label: "Use Case Suggestions",
         icon: <Lightbulb className="h-5 w-5" />,
      },
      {
         id: "tokenomics",
         label: "Tokenomics",
         icon: <Coins className="h-5 w-5" />,
      },
      {
         id: "roadmap",
         label: "Roadmap",
         icon: <MapIcon className="h-5 w-5" />,
      },
      {
         id: "tools",
         label: "Recommended Tools",
         icon: <Wrench className="h-5 w-5" />,
      },
      {
         id: "launchpad",
         label: "Submit to Launchpad",
         icon: <FileText className="h-5 w-5" />,
      },
   ];

   return (
      <div className="rounded-xl bg-cyberteal-surface shadow-cyber">
         {/* Tab Navigation */}
         <div className="scrollbar-hide flex overflow-x-auto border-b border-cyberteal-primary/20 px-2">
            {tabs.map((tab) => (
               <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center whitespace-nowrap px-4 py-3 text-sm font-medium transition-all duration-200 sm:text-base ${
                     activeTab === tab.id
                        ? "border-b-2 border-cyberteal-primary text-cyberteal-primary"
                        : "text-cyberteal-muted hover:text-cyberteal-text"
                  }`}
               >
                  <span
                     className={`mr-2 transition-all duration-200 ${
                        activeTab === tab.id
                           ? "text-cyberteal-primary"
                           : "text-cyberteal-muted"
                     }`}
                  >
                     {tab.icon}
                  </span>
                  {tab.label}
               </button>
            ))}
         </div>

         {/* Tab Content */}
         <div className="p-6">
            {activeTab === "use-cases" && (
               <UseCaseTab
                  useCases={results.useCases}
                  protip={results.proTip}
               />
            )}
            {activeTab === "tokenomics" && (
               <TokenomicsTab tokenomics={results.tokenomics} />
            )}
            {activeTab === "roadmap" && <RoadmapTab data={results.roadmaps} />}
            {activeTab === "tools" && (
               <ToolsTab tools={results.tools.categories} />
            )}
            {activeTab === "launchpad" && (
               <LaunchpadTab guide={mockResults.launchpadGuide} />
            )}
         </div>
      </div>
   );
}
