import type { RoadmapItem } from "@/types/results"
import { MapIcon, Calendar, CheckCircle2 } from "lucide-react"

interface RoadmapTabProps {
  roadmap: RoadmapItem[]
}

export default function RoadmapTab({ roadmap }: RoadmapTabProps) {
  return (
    <div className="space-y-6 text-cyberteal-text">
      <div className="flex items-center space-x-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyberteal-primary/10">
          <MapIcon className="h-5 w-5 text-cyberteal-primary" />
        </div>
        <h2 className="text-xl font-semibold text-cyberteal-text">Project Roadmap</h2>
      </div>

      <p className="text-cyberteal-muted">
        A strategic timeline for your project development, broken down by quarters:
      </p>

      <div className="relative space-y-0 rounded-xl border border-cyberteal-primary/20 bg-cyberteal-background/50 p-6">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-cyberteal-primary via-cyberteal-secondary to-cyberteal-primary"></div>

        {roadmap.map((item, index) => (
          <div key={index} className="relative mb-8 ml-12 last:mb-0">
            {/* Timeline dot */}
            <div
              className={`absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full ${
                item.color === "purple" ? "bg-cyberteal-primary" : "bg-cyberteal-secondary"
              } shadow-glow`}
            >
              <Calendar className="h-4 w-4 text-cyberteal-background" />
            </div>

            {/* Quarter label */}
            <div
              className={`mb-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${
                item.color === "purple"
                  ? "bg-cyberteal-primary/10 text-cyberteal-primary"
                  : "bg-cyberteal-secondary/10 text-cyberteal-secondary"
              }`}
            >
              {item.quarter}
            </div>

            {/* Phase title */}
            <h3
              className={`mb-2 text-lg font-medium ${
                item.color === "purple" ? "text-cyberteal-primary" : "text-cyberteal-secondary"
              }`}
            >
              {item.title}
            </h3>

            {/* Milestones */}
            <ul className="space-y-2">
              {item.milestones.map((milestone, mIndex) => (
                <li key={mIndex} className="flex items-start space-x-2">
                  <CheckCircle2
                    className={`mt-0.5 h-4 w-4 ${
                      item.color === "purple" ? "text-cyberteal-primary/70" : "text-cyberteal-secondary/70"
                    }`}
                  />
                  <span className="text-cyberteal-muted">{milestone}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-lg border border-cyberteal-primary/20 bg-cyberteal-primary/5 p-4">
        <h3 className="mb-2 font-medium text-cyberteal-primary">Roadmap Strategy</h3>
        <p className="text-sm text-cyberteal-muted">
          This roadmap is designed to balance quick wins with long-term development. Consider setting up public
          milestones with community updates to maintain transparency and build trust with your stakeholders.
        </p>
      </div>
    </div>
  )
}

