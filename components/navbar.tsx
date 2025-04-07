"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import ConnectWalletButton from "./connect-wallet-button";

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   return (
      <nav className="sticky top-0 z-50 w-full border-b border-cyberteal-primary/20 bg-cyberteal-background/80 backdrop-blur-md">
         <div className="container mx-auto flex h-16 items-center justify-between px-4">
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

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-4 md:flex">
               <ConnectWalletButton />
            </div>

            {/* Mobile Navigation */}
            <div className="flex md:hidden">
               <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  className="text-cyberteal-text hover:bg-cyberteal-surface hover:text-cyberteal-primary"
               >
                  <Menu className="h-5 w-5" />
               </Button>
            </div>
         </div>

         {/* Mobile Menu */}
         {isMenuOpen && (
            <div className="container mx-auto border-t border-cyberteal-primary/20 px-4 py-4 md:hidden">
               <div className="flex flex-col space-y-3">
                  <ConnectWalletButton />
               </div>
            </div>
         )}
      </nav>
   );
}
