import type { Metadata } from "next";
import "./globals.css";
import { AppKit } from "./context/appkit";
import { ToastProvider } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
   title: "I2L - Idea2Launch",
   description: "An AI-powered mentorship platform for Web3 projects",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <AppKit>{children}</AppKit>
         </body>
      </html>
   );
}
