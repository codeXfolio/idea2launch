import type { ProjectResults } from "@/types/results";

// Mock data that would come from an API in a real application
export const mockResults: ProjectResults = {
   useCases: [
      { text: "Decentralized identity verification for DeFi applications" },
      { text: "Cross-chain asset transfer with minimal gas fees" },
      { text: "DAO governance voting with quadratic weighting" },
      { text: "NFT-gated community access with tiered privileges" },
      { text: "Decentralized content monetization for creators" },
   ],

   tokenomics: {
      totalSupply: "100,000,000 tokens",
      distribution: [
         { label: "Team", percentage: 20, color: "bg-purple-500" },
         { label: "Investors", percentage: 15, color: "bg-purple-400" },
         { label: "Community", percentage: 20, color: "bg-teal-500" },
         { label: "Liquidity", percentage: 25, color: "bg-teal-400" },
         { label: "Marketing", percentage: 10, color: "bg-gray-400" },
      ],
      utility: [
         { text: "Governance voting rights" },
         { text: "Platform fee discounts" },
         { text: "Staking rewards" },
         { text: "Access to premium features" },
      ],
      vesting: [
         { text: "Team: 2-year vesting with 6-month cliff" },
         { text: "Investors: 18-month vesting with 3-month cliff" },
         { text: "Community: 30% at TGE, 70% over 12 months" },
      ],
   },

   roadmap: [
      {
         quarter: "Q1 2024",
         title: "Foundation",
         color: "purple",
         milestones: [
            "Team formation and initial funding",
            "Whitepaper and technical documentation",
            "Community building and social media presence",
            "Smart contract development and security audit",
         ],
      },
      {
         quarter: "Q2 2024",
         title: "Development",
         color: "teal",
         milestones: [
            "MVP launch on testnet",
            "Private beta testing with early adopters",
            "Strategic partnerships announcement",
            "Token generation event preparation",
         ],
      },
      {
         quarter: "Q3 2024",
         title: "Launch",
         color: "purple",
         milestones: [
            "Token generation event",
            "Mainnet launch",
            "DEX listing and liquidity provision",
            "Marketing campaign and user acquisition",
         ],
      },
      {
         quarter: "Q4 2024",
         title: "Expansion",
         color: "teal",
         milestones: [
            "Cross-chain integration",
            "Advanced feature rollout",
            "CEX listing",
            "Ecosystem grants program",
         ],
      },
   ],

   tools: [
      {
         name: "Development",
         tools: [
            "Hardhat - Smart contract development",
            "OpenZeppelin - Contract libraries",
            "Thirdweb - Web3 SDK",
            "Remix - Smart contract IDE",
            "Ethers.js - Blockchain interaction",
         ],
      },
      {
         name: "Infrastructure",
         tools: [
            "Infura/Alchemy - RPC providers",
            "IPFS/Arweave - Decentralized storage",
            "The Graph - Indexing protocol",
            "Chainlink - Oracle services",
         ],
      },
      {
         name: "Governance & Community",
         tools: [
            "Snapshot - Off-chain voting",
            "Tally - On-chain governance",
            "Discord - Community management",
            "Guild.xyz - Token-gated access",
         ],
      },
      {
         name: "Analytics & Monitoring",
         tools: [
            "Dune Analytics - Data visualization",
            "Tenderly - Smart contract monitoring",
            "DefiLlama - TVL tracking",
            "Nansen - On-chain analytics",
         ],
      },
   ],

   launchpadGuide: {
      proposalSteps: [
         {
            title: "Clear Problem Statement",
            description:
               "Articulate the specific problem your project solves and why it matters in the Web3 ecosystem.",
         },
         {
            title: "Unique Value Proposition",
            description:
               "Explain what makes your solution different from existing alternatives.",
         },
         {
            title: "Team Credentials",
            description:
               "Highlight relevant experience, technical expertise, and past achievements.",
         },
         {
            title: "Market Analysis",
            description:
               "Demonstrate understanding of your target market, competition, and growth potential.",
         },
         {
            title: "Tokenomics Rationale",
            description:
               "Explain the economic model and how it creates sustainable value.",
         },
      ],

      launchpads: [
         { name: "DAO Maker", applyUrl: "https://app.daomaker.com/apply" },
         { name: "Polkastarter", applyUrl: "https://polkastarter.com/launch" },
         { name: "Seedify", applyUrl: "https://form.typeform.com/to/AcLYz4Wa" },
         { name: "a16z Crypto", applyUrl: "https://a16zcrypto.com/" },
         { name: "YZI Labs", applyUrl: "https://www.yzilabs.com/" },
         {
            name: "Coinbase Ventures",
            applyUrl: "https://www.coinbase.com/ventures",
         },
         {
            name: "Pantera Capital",
            applyUrl: "https://panteracapital.com/funds/",
         },
         {
            name: "Kucoin Ventures",
            applyUrl: "https://www.kucoin.com/kucoin-ventures",
         },
      ],

      tips: [
         {
            title: "Community Building",
            description:
               "Demonstrate organic community growth and engagement metrics.",
         },
         {
            title: "Pitch Clarity",
            description:
               "Keep your pitch concise, jargon-free, and focused on solving real problems.",
         },
         {
            title: "Technical Validation",
            description:
               "Have a working prototype or MVP that investors can test.",
         },
         {
            title: "Network Connections",
            description:
               "Secure warm introductions from mutual connections whenever possible.",
         },
      ],

      pitchDecks: [
         {
            title: "DeFi Pitch Deck Example",
            url: "https://www.behance.net/gallery/216735123/Pitch-Deck-Design-DeFi-Presentation-for-ChainTools",
         },
         {
            title: "NFT Marketplace Pitch Example",
            url: "https://orda.mn/ORDA_NFT-Fund_Deck_EN.pdf",
         },
         {
            title: "Web3 Gaming Pitch Example",
            url: "https://www.flat6labs.com/wp-content/uploads/2024/02/GamerG-Pitch-Deck-_-C5.pdf",
         },
      ],
   },
};
