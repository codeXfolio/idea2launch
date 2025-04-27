"use client";

import { createAppKit } from "@reown/appkit/react";
import { EthersAdapter } from "@reown/appkit-adapter-ethers";
import {
   sepolia,
   bsc,
   bscTestnet,
   soneiumMinato,
   soneium,
} from "@reown/appkit/networks";

// 1. Get projectId at https://cloud.reown.com
const projectId = "601fd8de9a09208794d27e386024bfd4";

// 2. Create a metadata object
const metadata = {
   name: "I2L",
   description: "An AI-Powered Mentorship Platform for Web3 Founders",
   url: "https://i2l.pro", // origin must match your domain & subdomain
   icons: ["https://i2l.pro/favicon.ico"],
};

// 3. Create the AppKit instance
export const modalWc = createAppKit({
   adapters: [new EthersAdapter()],
   metadata,
   networks: [sepolia, soneiumMinato, soneium],
   projectId,
   defaultAccountTypes: {
      eip155: "eoa",
   },
   features: {
      analytics: false,
      // email: false,
      // emailShowWallets: false,
      socials: [],
   },
});

export function AppKit({ children }: { children: React.ReactNode }) {
   return <>{children}</>;
}
