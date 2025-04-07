import type { UseCaseSuggestion } from "@/types/results"
import { Lightbulb } from "lucide-react"

interface UseCaseTabProps {
  useCases: UseCaseSuggestion[]
}

export default function UseCaseTab({ useCases }: UseCaseTabProps) {
  return (
    <div className="space-y-6 text-cyberteal-text">
      <div className="flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyberteal-primary/10">
          <Lightbulb className="h-5 w-5 text-cyberteal-primary" />
        </div>
        <h2 className="text-xl font-semibold text-cyberteal-text">Use Case Suggestions</h2>
      </div>

      <p className="text-cyberteal-muted">
        Based on your project idea, here are potential use cases that could drive adoption and value:
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
              <p>{useCase.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-primary/5 p-4">
        <h3 className="mb-2 font-medium text-cyberteal-primary">Pro Tip</h3>
        <p className="text-sm text-cyberteal-muted">
          Focus on 1-2 primary use cases initially to build a strong foundation before expanding to secondary use cases.
          This approach helps with product-market fit and resource allocation.
        </p>
      </div>
    </div>
  )
}

