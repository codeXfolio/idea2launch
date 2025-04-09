"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import {
   useAppKit,
   useAppKitAccount,
   useAppKitProvider,
} from "@reown/appkit/react";
import { BrowserProvider, Eip1193Provider } from "ethers";

export default function ConnectWalletButton() {
   const { isConnected, address } = useAppKitAccount();
   const { open } = useAppKit();
   const { walletProvider } = useAppKitProvider("eip155");

   useEffect(() => {
      async function sign() {
         if (localStorage.getItem("signature")) return;

         if (isConnected) {
            const provider = new BrowserProvider(
               walletProvider as Eip1193Provider
            );
            const signer = await provider.getSigner();

            const signature = await signer.signMessage("Sign to I2L");

            fetch("/api/sign", {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ signature }),
            })
               .then((response) => response.json())
               .then((data) => {
                  if (data.error) {
                     console.error("Error:", data.error);
                  } else {
                     localStorage.setItem("signature", signature);
                  }
               })
               .catch((error) => {
                  console.error("Error:", error);
               });
         }
      }

      sign();
   }, [isConnected]);

   return (
      <Button
         onClick={() => {
            if (!isConnected) {
               open({ view: "Connect" });
            } else {
               open({ view: "Account" });
            }
         }}
         className="cyber-button rounded-md shadow-cyber hover:shadow-cyber-hover"
      >
         <span className="cyber-button-content flex items-center text-black">
            <Wallet className="mr-2 h-4 w-4" />
            {isConnected
               ? `${address?.slice(0, 4)}...${address?.slice(
                    38,
                    address.length
                 )}`
               : "Connect Wallet"}
         </span>
      </Button>
   );
}
