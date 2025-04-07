import type { Tokenomics } from "@/types/results";
import { Coins, PieChart, Clock, Zap } from "lucide-react";

interface TokenomicsTabProps {
   tokenomics: Tokenomics;
}

export default function TokenomicsTab({ tokenomics }: TokenomicsTabProps) {
   return (
      <div className="space-y-6 text-cyberteal-text">
         <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyberteal-secondary/10">
               <Coins className="h-5 w-5 text-cyberteal-secondary" />
            </div>
            <h2 className="text-xl font-semibold text-cyberteal-text">
               Tokenomics
            </h2>
         </div>

         <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4 rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-5">
               <div className="flex items-center space-x-2">
                  <PieChart className="h-5 w-5 text-cyberteal-primary" />
                  <h3 className="font-medium text-cyberteal-primary">
                     Token Distribution
                  </h3>
               </div>

               <p className="text-sm text-cyberteal-muted">
                  Total Supply: {tokenomics.totalSupply}
               </p>

               <div className="h-48 w-full">
                  <div className="relative h-full w-full rounded-full">
                     {/* Simplified pie chart visualization */}
                     <div className="absolute inset-0 rounded-full border-8 border-cyberteal-primary/80"></div>
                     <div
                        className="absolute inset-0 rounded-full border-t-8 border-l-8 border-cyberteal-secondary/80"
                        style={{
                           clipPath: "polygon(0 0, 50% 0, 50% 50%, 0 50%)",
                        }}
                     ></div>
                     <div
                        className="absolute inset-0 rounded-full border-r-8 border-t-8 border-cyberteal-primary/40"
                        style={{
                           clipPath:
                              "polygon(50% 0, 100% 0, 100% 50%, 50% 50%)",
                        }}
                     ></div>
                     <div
                        className="absolute inset-0 rounded-full border-r-8 border-b-8 border-cyberteal-secondary/40"
                        style={{
                           clipPath:
                              "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)",
                        }}
                     ></div>
                     <div
                        className="absolute inset-0 rounded-full border-l-8 border-b-8 border-cyberteal-primary/20"
                        style={{
                           clipPath:
                              "polygon(0 50%, 50% 50%, 50% 100%, 0 100%)",
                        }}
                     ></div>

                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-24 w-24 rounded-full bg-cyberteal-surface flex items-center justify-center">
                           <Coins className="h-8 w-8 text-cyberteal-primary" />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-2 text-sm">
                  {tokenomics.distribution.map((item, index) => (
                     <div key={index} className="flex items-center space-x-2">
                        <div
                           className={`h-3 w-3 rounded-full ${item.color}`}
                        ></div>
                        <span className="text-cyberteal-muted">
                           {item.label} ({item.percentage}%)
                        </span>
                     </div>
                  ))}
               </div>
            </div>

            <div className="space-y-6">
               <div className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-5">
                  <div className="mb-3 flex items-center space-x-2">
                     <Zap className="h-5 w-5 text-cyberteal-secondary" />
                     <h3 className="font-medium text-cyberteal-secondary">
                        Token Utility
                     </h3>
                  </div>

                  <ul className="space-y-2">
                     {tokenomics.utility.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                           <div className="mt-1 h-1.5 w-1.5 rounded-full bg-cyberteal-secondary"></div>
                           <span className="text-cyberteal-muted">
                              {item.text}
                           </span>
                        </li>
                     ))}
                  </ul>
               </div>

               <div className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-5">
                  <div className="mb-3 flex items-center space-x-2">
                     <Clock className="h-5 w-5 text-cyberteal-primary" />
                     <h3 className="font-medium text-cyberteal-primary">
                        Vesting Schedule
                     </h3>
                  </div>

                  <div className="space-y-2">
                     {tokenomics.vesting.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2">
                           <div className="mt-1 h-1.5 w-1.5 rounded-full bg-cyberteal-primary"></div>
                           <span className="text-cyberteal-muted">
                              {item.text}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <div className="rounded-lg border border-cyberteal-secondary/20 bg-cyberteal-secondary/5 p-4">
            <h3 className="mb-2 font-medium text-cyberteal-secondary">
               Tokenomics Recommendation
            </h3>
            <p className="text-sm text-cyberteal-muted">
               Your token distribution balances team incentives with community
               ownership. Consider implementing a token burn mechanism to create
               deflationary pressure and increase scarcity over time.
            </p>
         </div>
      </div>
   );
}
