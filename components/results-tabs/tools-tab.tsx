import type { ToolCategory } from "@/types/results"
import { Wrench, Code, Database, Users, BarChart3 } from "lucide-react"

interface ToolsTabProps {
  toolCategories: ToolCategory[]
}

const getCategoryIcon = (name: string) => {
  switch (name) {
    case "Development":
      return <Code className="h-5 w-5 text-cyberteal-secondary" />
    case "Infrastructure":
      return <Database className="h-5 w-5 text-cyberteal-primary" />
    case "Governance & Community":
      return <Users className="h-5 w-5 text-cyberteal-secondary" />
    case "Analytics & Monitoring":
      return <BarChart3 className="h-5 w-5 text-cyberteal-primary" />
    default:
      return <Wrench className="h-5 w-5 text-cyberteal-secondary" />
  }
}

export default function ToolsTab({ toolCategories }: ToolsTabProps) {
  return (
    <div className="space-y-6 text-cyberteal-text">
      <div className="flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyberteal-secondary/10">
          <Wrench className="h-5 w-5 text-cyberteal-secondary" />
        </div>
        <h2 className="text-xl font-semibold text-cyberteal-text">Recommended Tools</h2>
      </div>

      <p className="text-cyberteal-muted">
        Based on your project requirements, here's a curated tech stack to help you build efficiently:
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {toolCategories.map((category, index) => (
          <div
            key={index}
            className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-background/50 p-5 transition-all duration-200 hover:shadow-cyber"
          >
            <div className="mb-3 flex items-center space-x-2">
              {getCategoryIcon(category.name)}
              <h3 className="font-medium text-cyberteal-text">{category.name}</h3>
            </div>

            <div className="space-y-3">
              {category.tools.map((tool, toolIndex) => {
                const [toolName, toolDescription] = tool.split(" - ")
                return (
                  <div key={toolIndex} className="rounded-md bg-cyberteal-surface/50 p-3">
                    <div className="font-medium text-cyberteal-text">{toolName}</div>
                    <div className="text-sm text-cyberteal-muted">{toolDescription}</div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-cyberteal-secondary/20 bg-cyberteal-secondary/5 p-4">
        <h3 className="mb-2 font-medium text-cyberteal-secondary">Integration Tips</h3>
        <p className="text-sm text-cyberteal-muted">
          Start with the core infrastructure tools first, then add development and community tools as your project
          grows. Many of these tools offer free tiers or startup programs that can help reduce initial costs.
        </p>
      </div>
    </div>
  )
}

