import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Coins, MapIcon as RoadMap, Wrench } from "lucide-react";

export default function OutputCards() {
   const cards = [
      {
         title: "Use Case Suggestions",
         icon: <Lightbulb className="h-6 w-6 text-cyberteal-primary" />,
         content:
            "AI-generated use cases tailored to your project's unique value proposition.",
      },
      {
         title: "Tokenomics",
         icon: <Coins className="h-6 w-6 text-cyberteal-secondary" />,
         content:
            "Comprehensive token distribution, utility, and economic model suggestions.",
      },
      {
         title: "Roadmap",
         icon: <RoadMap className="h-6 w-6 text-cyberteal-primary" />,
         content:
            "Strategic development timeline with key milestones and implementation phases.",
      },
      {
         title: "Recommended Tools",
         icon: <Wrench className="h-6 w-6 text-cyberteal-secondary" />,
         content:
            "Curated tech stack and development resources to bring your project to life.",
      },
   ];

   return (
      <section className="mx-auto max-w-4xl py-12">
         <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((card, index) => (
               <Card
                  key={index}
                  className="bg-cyberteal-background transform  border-cyberteal-primary/20 transition-all duration-300 hover:scale-105 shadow-cyber"
               >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <CardTitle className="text-lg font-bold text-cyberteal-text">
                        {card.title}
                     </CardTitle>
                     {card.icon}
                  </CardHeader>
                  <CardContent>
                     <p className="text-sm text-cyberteal-muted">
                        {card.content}
                     </p>
                  </CardContent>
               </Card>
            ))}
         </div>
      </section>
   );
}
