"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ConnectWalletButton from "./connect-wallet-button";

export default function ResultsNavbar() {
   return (
      <nav className="sticky top-0 z-50 w-full border-b border-cyberteal-primary/20 bg-cyberteal-background/80 backdrop-blur-md">
         <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center space-x-4">
               <Link href="/" className="flex items-center space-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyberteal-primary to-cyberteal-secondary">
                     <span className="text-lg font-bold text-cyberteal-background">
                        I2L
                     </span>
                  </div>
                  <span className="bg-gradient-to-r hidden md:inline-block from-cyberteal-primary to-cyberteal-secondary bg-clip-text text-xl font-bold text-transparent">
                     Idea2Launch
                  </span>
               </Link>

               <Link
                  href="/"
                  className="md:flex items-center text-sm text-cyberteal-muted hover:text-cyberteal-primary hidden"
               >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Home
               </Link>
            </div>

            <div className="flex items-center space-x-4">
               <ConnectWalletButton />
            </div>
         </div>
      </nav>
   );
}
