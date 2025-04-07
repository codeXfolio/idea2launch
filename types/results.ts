// Define types for all the result data
export interface UseCaseSuggestion {
  text: string
}

export interface TokenDistribution {
  label: string
  percentage: number
  color: string
}

export interface TokenUtility {
  text: string
}

export interface VestingSchedule {
  text: string
}

export interface Tokenomics {
  totalSupply: string
  distribution: TokenDistribution[]
  utility: TokenUtility[]
  vesting: VestingSchedule[]
}

export interface RoadmapItem {
  quarter: string
  title: string
  color: string
  milestones: string[]
}

export interface ToolCategory {
  name: string
  tools: string[]
}

export interface ProposalStep {
  title: string
  description: string
}

export interface Launchpad {
  name: string
  applyUrl: string
}

export interface TipCategory {
  title: string
  description: string
}

export interface PitchDeckExample {
  title: string
  url: string
}

export interface LaunchpadGuide {
  proposalSteps: ProposalStep[]
  launchpads: Launchpad[]
  tips: TipCategory[]
  pitchDecks: PitchDeckExample[]
}

export interface ProjectResults {
  useCases: UseCaseSuggestion[]
  tokenomics: Tokenomics
  roadmap: RoadmapItem[]
  tools: ToolCategory[]
  launchpadGuide: LaunchpadGuide
}

