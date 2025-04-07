"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

export default function ConnectWalletButton() {
   const [isConnected, setIsConnected] = useState(false);

   const handleConnect = () => {
      // In a real implementation, this would connect to a Web3 wallet
      setIsConnected(true);
   };

   return (
      <Button
         onClick={handleConnect}
         className="cyber-button rounded-md shadow-cyber hover:shadow-cyber-hover"
      >
         <span className="cyber-button-content flex items-center text-black">
            <Wallet className="mr-2 h-4 w-4" />
            {isConnected ? "Wallet Connected" : "Connect Wallet"}
         </span>
      </Button>
   );
}
