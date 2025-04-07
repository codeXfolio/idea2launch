"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Lightbulb, Coins, MapIcon, Wrench, FileText } from "lucide-react"

export default function ResultsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      <AccordionItem value="use-cases" className="border-none">
        <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center">
              <Lightbulb className="mr-3 h-5 w-5 text-purple-500" />
              <span className="text-lg font-medium">Use Case Suggestions</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-0">
            <ul className="ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300">
              <li>Decentralized identity verification for DeFi applications</li>
              <li>Cross-chain asset transfer with minimal gas fees</li>
              <li>DAO governance voting with quadratic weighting</li>
              <li>NFT-gated community access with tiered privileges</li>
              <li>Decentralized content monetization for creators</li>
            </ul>
          </AccordionContent>
        </Card>
      </AccordionItem>

      <AccordionItem value="tokenomics" className="border-none">
        <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center">
              <Coins className="mr-3 h-5 w-5 text-teal-500" />
              <span className="text-lg font-medium">Tokenomics</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-0">
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="mb-2 font-medium">Total Supply: 100,000,000 tokens</h4>
                <div className="mb-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="flex h-4 rounded-full">
                    <div className="w-[20%] rounded-l-full bg-purple-500 text-xs text-white text-center">20%</div>
                    <div className="w-[15%] bg-purple-400 text-xs text-white text-center">15%</div>
                    <div className="w-[30%] bg-teal-500 text-xs text-white text-center">30%</div>
                    <div className="w-[25%] bg-teal-400 text-xs text-white text-center">25%</div>
                    <div className="w-[10%] rounded-r-full bg-gray-400 text-xs text-white text-center">10%</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-5">
                  <div>
                    <div className="h-3 w-3 rounded-full bg-purple-500 inline-block mr-1"></div>
                    Team (20%)
                  </div>
                  <div>
                    <div className="h-3 w-3 rounded-full bg-purple-400 inline-block mr-1"></div>
                    Investors (15%)
                  </div>
                  <div>
                    <div className="h-3 w-3 rounded-full bg-teal-500 inline-block mr-1"></div>
                    Community (30%)
                  </div>
                  <div>
                    <div className="h-3 w-3 rounded-full bg-teal-400 inline-block mr-1"></div>
                    Liquidity (25%)
                  </div>
                  <div>
                    <div className="h-3 w-3 rounded-full bg-gray-400 inline-block mr-1"></div>
                    Reserve (10%)
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Token Utility</h4>
                <ul className="ml-6 list-disc space-y-1">
                  <li>Governance voting rights</li>
                  <li>Platform fee discounts</li>
                  <li>Staking rewards</li>
                  <li>Access to premium features</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Vesting Schedule</h4>
                <p>Team: 2-year vesting with 6-month cliff</p>
                <p>Investors: 18-month vesting with 3-month cliff</p>
                <p>Community: 30% at TGE, 70% over 12 months</p>
              </div>
            </div>
          </AccordionContent>
        </Card>
      </AccordionItem>

      <AccordionItem value="roadmap" className="border-none">
        <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center">
              <MapIcon className="mr-3 h-5 w-5 text-purple-500" />
              <span className="text-lg font-medium">Roadmap</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-0">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div className="relative border-l-2 border-purple-200 pl-6 dark:border-purple-900">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500"></div>
                <h4 className="font-medium text-purple-600 dark:text-purple-400">Q1 2024: Foundation</h4>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Team formation and initial funding</li>
                  <li>Whitepaper and technical documentation</li>
                  <li>Community building and social media presence</li>
                  <li>Smart contract development and security audit</li>
                </ul>
              </div>

              <div className="relative border-l-2 border-purple-200 pl-6 dark:border-purple-900">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal-500"></div>
                <h4 className="font-medium text-teal-600 dark:text-teal-400">Q2 2024: Development</h4>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>MVP launch on testnet</li>
                  <li>Private beta testing with early adopters</li>
                  <li>Strategic partnerships announcement</li>
                  <li>Token generation event preparation</li>
                </ul>
              </div>

              <div className="relative border-l-2 border-purple-200 pl-6 dark:border-purple-900">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-purple-500"></div>
                <h4 className="font-medium text-purple-600 dark:text-purple-400">Q3 2024: Launch</h4>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Token generation event</li>
                  <li>Mainnet launch</li>
                  <li>DEX listing and liquidity provision</li>
                  <li>Marketing campaign and user acquisition</li>
                </ul>
              </div>

              <div className="relative border-l-2 border-purple-200 pl-6 dark:border-purple-900">
                <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-teal-500"></div>
                <h4 className="font-medium text-teal-600 dark:text-teal-400">Q4 2024: Expansion</h4>
                <ul className="ml-4 list-disc space-y-1 text-sm">
                  <li>Cross-chain integration</li>
                  <li>Advanced feature rollout</li>
                  <li>CEX listing</li>
                  <li>Ecosystem grants program</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </Card>
      </AccordionItem>

      <AccordionItem value="tools" className="border-none">
        <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center">
              <Wrench className="mr-3 h-5 w-5 text-teal-500" />
              <span className="text-lg font-medium">Recommended Tools</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-0">
            <div className="grid gap-4 sm:grid-cols-2 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="mb-2 font-medium">Development</h4>
                <ul className="ml-6 list-disc space-y-1 text-sm">
                  <li>Hardhat - Smart contract development</li>
                  <li>OpenZeppelin - Contract libraries</li>
                  <li>Thirdweb - Web3 SDK</li>
                  <li>Remix - Smart contract IDE</li>
                  <li>Ethers.js - Blockchain interaction</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Infrastructure</h4>
                <ul className="ml-6 list-disc space-y-1 text-sm">
                  <li>Infura/Alchemy - RPC providers</li>
                  <li>IPFS/Arweave - Decentralized storage</li>
                  <li>The Graph - Indexing protocol</li>
                  <li>Chainlink - Oracle services</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Governance & Community</h4>
                <ul className="ml-6 list-disc space-y-1 text-sm">
                  <li>Snapshot - Off-chain voting</li>
                  <li>Tally - On-chain governance</li>
                  <li>Discord - Community management</li>
                  <li>Guild.xyz - Token-gated access</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Analytics & Monitoring</h4>
                <ul className="ml-6 list-disc space-y-1 text-sm">
                  <li>Dune Analytics - Data visualization</li>
                  <li>Tenderly - Smart contract monitoring</li>
                  <li>DefiLlama - TVL tracking</li>
                  <li>Nansen - On-chain analytics</li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </Card>
      </AccordionItem>

      <AccordionItem value="launchpad" className="border-none">
        <Card className="overflow-hidden transition-all duration-200 hover:shadow-md">
          <AccordionTrigger className="px-6 py-4 hover:no-underline">
            <div className="flex items-center">
              <FileText className="mr-3 h-5 w-5 text-purple-500" />
              <span className="text-lg font-medium">Submit to Launchpad / VC Guide</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-4 pt-0">
            <div className="space-y-6 text-gray-700 dark:text-gray-300">
              <div>
                <h4 className="mb-2 font-medium">How to Write a Good Proposal</h4>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>
                    <strong>Clear Problem Statement</strong>
                    <p className="text-sm">
                      Articulate the specific problem your project solves and why it matters in the Web3 ecosystem.
                    </p>
                  </li>
                  <li>
                    <strong>Unique Value Proposition</strong>
                    <p className="text-sm">Explain what makes your solution different from existing alternatives.</p>
                  </li>
                  <li>
                    <strong>Team Credentials</strong>
                    <p className="text-sm">
                      Highlight relevant experience, technical expertise, and past achievements.
                    </p>
                  </li>
                  <li>
                    <strong>Market Analysis</strong>
                    <p className="text-sm">
                      Demonstrate understanding of your target market, competition, and growth potential.
                    </p>
                  </li>
                  <li>
                    <strong>Tokenomics Rationale</strong>
                    <p className="text-sm">Explain the economic model and how it creates sustainable value.</p>
                  </li>
                </ol>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Top Web3 Launchpads & VC Submission Forms</h4>
                <ul className="ml-6 list-disc space-y-1">
                  <li>
                    DAO Maker - <span className="text-purple-500">Apply Here</span>
                  </li>
                  <li>
                    Polkastarter - <span className="text-purple-500">Apply Here</span>
                  </li>
                  <li>
                    Seedify - <span className="text-purple-500">Apply Here</span>
                  </li>
                  <li>
                    a16z Crypto - <span className="text-purple-500">Apply Here</span>
                  </li>
                  <li>
                    Binance Labs - <span className="text-purple-500">Apply Here</span>
                  </li>
                  <li>
                    Coinbase Ventures - <span className="text-purple-500">Apply Here</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Tips for Getting Noticed</h4>
                <ul className="ml-6 list-disc space-y-2">
                  <li>
                    <strong>Community Building</strong>
                    <p className="text-sm">Demonstrate organic community growth and engagement metrics.</p>
                  </li>
                  <li>
                    <strong>Pitch Clarity</strong>
                    <p className="text-sm">
                      Keep your pitch concise, jargon-free, and focused on solving real problems.
                    </p>
                  </li>
                  <li>
                    <strong>Technical Validation</strong>
                    <p className="text-sm">Have a working prototype or MVP that investors can test.</p>
                  </li>
                  <li>
                    <strong>Network Connections</strong>
                    <p className="text-sm">Secure warm introductions from mutual connections whenever possible.</p>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-medium">Example Pitch Decks</h4>
                <ul className="ml-6 list-disc space-y-1">
                  <li>
                    <span className="text-purple-500">DeFi Protocol Pitch Deck Template</span>
                  </li>
                  <li>
                    <span className="text-purple-500">NFT Marketplace Pitch Example</span>
                  </li>
                  <li>
                    <span className="text-purple-500">DAO Infrastructure Pitch Case Study</span>
                  </li>
                  <li>
                    <span className="text-purple-500">Web3 Gaming Successful Pitch</span>
                  </li>
                </ul>
              </div>
            </div>
          </AccordionContent>
        </Card>
      </AccordionItem>
    </Accordion>
  )
}

