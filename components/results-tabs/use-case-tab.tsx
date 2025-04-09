import type { UseCase } from "@/types/results";
import { Lightbulb, Users } from "lucide-react";

interface UseCaseTabProps {
   useCases: UseCase[];
   protip: string;
   audiences: string[];
}

export default function UseCaseTab({
   useCases,
   protip,
   audiences,
}: UseCaseTabProps) {
   return (
      <div className="space-y-6 text-cyberteal-text">
         <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyberteal-primary/10">
               <Lightbulb className="h-5 w-5 text-cyberteal-primary" />
            </div>
            <h2 className="text-xl font-semibold text-cyberteal-text">
               Use Case Suggestions
            </h2>
         </div>

         <p className="text-cyberteal-muted">
            Based on your project idea, here are potential use cases that could
            drive adoption and value:
         </p>

         <div className="grid gap-4 sm:grid-cols-2">
            {useCases.map((useCase, index) => (
               <div
                  key={index}
                  className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-4 shadow-sm transition-all duration-200 hover:shadow-cyber"
               >
                  <div className="flex items-start space-x-3">
                     <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyberteal-primary/20 text-xs font-bold text-cyberteal-primary">
                        {index + 1}
                     </div>
                     <p>{useCase.description}</p>
                  </div>
               </div>
            ))}
         </div>

         <div className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyberteal-primary/10">
               <Users className="h-5 w-5 text-cyberteal-primary" />
            </div>
            <h2 className="text-xl font-semibold text-cyberteal-text">
               Target Audience
            </h2>
         </div>

         <p className="text-cyberteal-muted">
            The following are the target audiences for the suggested use cases:
         </p>

         <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience, index) => (
               <div
                  key={index}
                  className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-4 shadow-sm transition-all duration-200 hover:shadow-cyber"
               >
                  <div className="flex items-start space-x-3">
                     <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-cyberteal-primary/20 text-xs font-bold text-cyberteal-primary">
                        {index + 1}
                     </div>
                     <p>{audience}</p>
                  </div>
               </div>
            ))}
         </div>

         <div className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-primary/5 p-4">
            <h3 className="mb-2 font-medium text-cyberteal-primary">Pro Tip</h3>
            <p className="text-sm text-cyberteal-muted">{protip}</p>
         </div>
      </div>
   );
}
