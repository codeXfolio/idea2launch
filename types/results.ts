// Define types based on the APIResponse interface

export interface UseCase {
   title: string;
   description: string;
}

export interface TokenDistribution {
   channel: string;
   percentage: string;
   vestingSchedule: string;
}

export interface Tokenomics {
   totalSupply: string;
   distribution: TokenDistribution[];
   utility: string[];
   recommendations: string;
}

export interface RoadmapItem {
   quarter: string;
   phase: string;
   milestones: { description: string }[]; // derived from milestones: { description: string }[]
}

export interface Tool {
   name: string;
   description: string;
}

export interface ToolCategory {
   name: string;
   tools: Tool[];
}

export interface ProjectResults {
   useCases: UseCase[];
   tokenomics: Tokenomics;
   roadmaps: RoadmapItem[];
   tools: {
      categories: ToolCategory[];
   };
   proTip: string;
   launchpadGuide: {
      proposalSteps: { title: string; description: string }[];
      launchpads: { name: string; applyUrl: string }[];
      tips: { title: string; description: string }[];
      pitchDecks: { title: string; url: string }[];
   };
   audiences: string[];
   projectName: string;
}
