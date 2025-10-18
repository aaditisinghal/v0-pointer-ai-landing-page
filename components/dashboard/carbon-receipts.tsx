"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Receipt, Download, Share2, Calendar, Filter } from "lucide-react"

const receipts = [
  {
    id: "RCP-2024-001",
    date: "2024-01-15",
    co2Saved: "2.4 kg",
    costSaved: "$127.50",
    requests: 1247,
    equivalents: "0.5 trees planted",
  },
  {
    id: "RCP-2024-002",
    date: "2024-01-14",
    co2Saved: "3.1 kg",
    costSaved: "$156.20",
    requests: 1589,
    equivalents: "0.6 trees planted",
  },
  {
    id: "RCP-2024-003",
    date: "2024-01-13",
    co2Saved: "1.8 kg",
    costSaved: "$98.40",
    requests: 892,
    equivalents: "0.4 trees planted",
  },
]

export function CarbonReceipts() {
  const [view, setView] = useState<"daily" | "weekly" | "monthly">("daily")

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Carbon Receipts</h1>
          <p className="text-muted-foreground mt-2">View and export your environmental impact reports</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2 bg-transparent">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
        </div>
      </div>

      {/* View Toggle */}
      <div className="flex items-center gap-2 p-1 bg-accent rounded-lg w-fit">
        <Button
          variant={view === "daily" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setView("daily")}
          className="rounded-md"
        >
          Daily
        </Button>
        <Button
          variant={view === "weekly" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setView("weekly")}
          className="rounded-md"
        >
          Weekly
        </Button>
        <Button
          variant={view === "monthly" ? "secondary" : "ghost"}
          size="sm"
          onClick={() => setView("monthly")}
          className="rounded-md"
        >
          Monthly
        </Button>
      </div>

      {/* Receipts List */}
      <div className="space-y-4">
        {receipts.map((receipt) => (
          <Card key={receipt.id} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Receipt className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{receipt.id}</h3>
                    <p className="text-sm text-muted-foreground">{receipt.date}</p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">CO₂ Saved</p>
                      <p className="text-lg font-semibold text-primary">{receipt.co2Saved}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Cost Saved</p>
                      <p className="text-lg font-semibold text-foreground">{receipt.costSaved}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Requests</p>
                      <p className="text-lg font-semibold text-foreground">{receipt.requests}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Equivalent</p>
                      <p className="text-lg font-semibold text-foreground">{receipt.equivalents}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Download className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
