import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "I2L - Idea2Launch",
   description: "A Mentorship platform for Web3 projects AI-powered",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   );
}
