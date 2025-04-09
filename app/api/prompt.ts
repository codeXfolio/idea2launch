export const SYSTEM_MESSAGE = `
You are an AI assistant designed to help users create a comprehensive launch blueprint for their blockchain or web3 projects. Your task is to generate detailed and structured outputs based on the user's input. Ensure that your responses are professional, actionable, and formatted in JSON. Each response must strictly follow JSON syntax rules, including proper use of keys, values, arrays, and objects. Avoid using markdown or plain text formatting.
`;

export function getUserMessage(idea: string) {
   const message = `Generate a comprehensive JSON object that includes recommendations and strategic planning for my blockchain/web3 project. The output should include tools, a strategic roadmap, a tokenomics framework, and potential use cases based on the following inputs:

1. Project Idea: ${idea}
2. Start Date: ${new Date().toISOString()}

The output should infer the project type (e.g., DeFi, NFT, DAO), target audience, development focus, and other relevant details based on the project idea.

Output Structure:

The final output should be a single JSON object with the following structure:

{
  "projectName": "Recommended name for the project",
  "tools": {
    "categories": [
      {
        "name": "Category Name",
        "tools": [
          {
            "name": "Tool Name",
            "description": "Tool Description"
          }
        ]
      }
    ]
  },
  "roadmaps": [
    {
      "quarter": "Q1 2024",
      "phase": "Foundation",
      "milestones": [
        {
          "description": "Milestone Description"
        }
      ]
    }
  ],
  "tokenomics": {
    "totalSupply": "Total Supply",
    "distribution": [
      {
        "channel": "Channel Name",
        "percentage": "Percentage Allocation",
        "vestingSchedule": "Vesting Details"
      }
    ],
    "utility": [
      "Utility 1",
      "Utility 2"
    ],
    "recommendations": "Recommendation Text"
  },
  "useCases": [
    {
      "title": "Use Case Title",
      "description": "Use Case Description"
    }
  ],
  "audiences": [
    "Target audience 1",
    "Target audience 2"
  ],
  "proTip": "Pro Tip Text",
  "summary": "Summary Text in one paragraph including all the above"
}

How It Works:

1. Tools Recommendations:  
   - Infer the project type (e.g., DeFi, NFT, DAO) and development focus (e.g., smart contracts, decentralized applications) from the project idea.  
   - Recommend tools under the following categories:  
     - Development  
     - Infrastructure  
     - Governance & Community  
     - Analytics & Monitoring  

2. Strategic Roadmap:  
   - Generate a roadmap starting from the provided start date, broken down into quarters.  
   - Include key milestones and phases such as:  
     - Foundation Phase: Team formation, funding, documentation, community building.  
     - Development Phase: MVP release, testing, partnerships, token generation event preparation.  
     - Launch Phase: Token generation event.  

3. Tokenomics Framework:  
   - Infer the total token supply, distribution channels, token utility, and vesting schedule based on the project idea.  
   - Provide recommendations for improving the tokenomics design.
   - The percentage total supply should add up to 100%.  

4. Use Cases:  
   - Generate 5 potential use cases for the project based on the inferred project type, target market, and key features.  
   - Include a "Pro Tip" section advising on focusing on primary use cases before expanding to secondary ones.  `;

   return message;
}
