"use client"

import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface SidebarSection {
  title: string
  items: { title: string; href: string }[]
}

const sections: SidebarSection[] = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "#overview" },
      { title: "Installation", href: "#installation" },
      { title: "Quick Start", href: "#quick-start" },
    ],
  },
  {
    title: "Core Features",
    items: [
      { title: "Performance Optimization", href: "#performance" },
      { title: "Cost Optimization", href: "#cost" },
      { title: "Carbon Tracking", href: "#carbon-tracking" },
      { title: "Analytics", href: "#analytics" },
    ],
  },
  {
    title: "AI-Powered Features",
    items: [
      { title: "Neural Network", href: "#neural-network" },
      { title: "Knowledge Graph", href: "#knowledge-graph" },
      { title: "High-Accuracy Training", href: "#training" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { title: "BuildWiseClient", href: "#buildwise-client" },
      { title: "AIEnhancedClient", href: "#ai-enhanced-client" },
      { title: "CarbonTrackedClient", href: "#carbon-tracked-client" },
      { title: "Configuration", href: "#configuration" },
    ],
  },
  {
    title: "Guides",
    items: [
      { title: "Carbon Receipt System", href: "#carbon-receipts" },
      { title: "Heroku Deployment", href: "#heroku-deployment" },
      { title: "Testing", href: "#testing" },
      { title: "Contributing", href: "#contributing" },
    ],
  },
]

export function DocsSidebar({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["Getting Started"])

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={onClose} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 shrink-0 border-r border-white/10 bg-black pt-16 transition-transform md:sticky md:top-20 md:h-[calc(100vh-5rem)] md:translate-x-0 md:pt-8",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <nav className="h-full overflow-y-auto px-4 pb-8">
          {sections.map((section) => (
            <div key={section.title} className="mb-6">
              <button
                onClick={() => toggleSection(section.title)}
                className="mb-2 flex w-full items-center justify-between text-sm font-semibold text-white/60 hover:text-white"
              >
                {section.title}
                {expandedSections.includes(section.title) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              {expandedSections.includes(section.title) && (
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block rounded-md px-3 py-1.5 text-sm text-white/60 hover:bg-white/5 hover:text-white"
                        onClick={onClose}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
