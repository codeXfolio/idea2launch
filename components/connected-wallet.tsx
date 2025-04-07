"use client";

import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export default function ConnectedWallet() {
   // In a real app, this would come from a wallet connection state
   const walletAddress = "0x123...abcd";

   return (
      <Button
         variant="outline"
         size="sm"
         className="h-9 border-cyberteal-primary/30 bg-cyberteal-surface/50 text-cyberteal-text hover:border-cyberteal-primary hover:bg-cyberteal-surface hover:text-white"
      >
         <Wallet className="mr-2 h-4 w-4 text-cyberteal-primary" />
         <span className="text-sm">{walletAddress}</span>
      </Button>
   );
}
