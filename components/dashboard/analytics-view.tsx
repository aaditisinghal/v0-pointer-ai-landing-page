"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp } from "lucide-react"

export function AnalyticsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground mt-2">Deep insights into your optimization performance</p>
      </div>

      {/* Time Series Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">CO₂ Savings Trend</h3>
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+24%</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[65, 72, 68, 85, 78, 92, 88].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/20 rounded-t-lg relative group cursor-pointer hover:bg-primary/30 transition-colors"
                style={{ height: `${height}%` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                  {height}kg CO₂
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-muted-foreground">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Cost Savings Trend</h3>
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="h-4 w-4" />
              <span className="text-sm font-medium">+18%</span>
            </div>
          </div>
          <div className="h-64 flex items-end justify-between gap-2">
            {[55, 68, 62, 78, 72, 85, 82].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-primary/20 rounded-t-lg relative group cursor-pointer hover:bg-primary/30 transition-colors"
                style={{ height: `${height}%` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-background border border-border rounded px-2 py-1 text-xs whitespace-nowrap">
                  ${(height * 2).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-muted-foreground">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </Card>
      </div>

      {/* Model Performance */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Model Performance</h3>
        <div className="space-y-4">
          {[
            { model: "GPT-4", efficiency: 94, requests: 1247, savings: "$127.50" },
            { model: "Claude-3", efficiency: 91, requests: 892, savings: "$98.40" },
            { model: "GPT-3.5", efficiency: 88, requests: 2100, savings: "$156.20" },
            { model: "Gemini Pro", efficiency: 85, requests: 654, savings: "$72.30" },
          ].map((model) => (
            <div key={model.model} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">{model.model}</span>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-muted-foreground">{model.requests} requests</span>
                  <span className="text-primary font-medium">{model.savings}</span>
                  <span className="text-foreground font-medium">{model.efficiency}%</span>
                </div>
              </div>
              <div className="h-2 bg-accent rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: `${model.efficiency}%` }} />
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Regional Analysis */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Regional Carbon Intensity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { region: "US East", intensity: "Low", color: "text-primary" },
            { region: "EU West", intensity: "Very Low", color: "text-primary" },
            { region: "Asia Pacific", intensity: "Medium", color: "text-yellow-500" },
          ].map((region) => (
            <div key={region.region} className="p-4 rounded-lg bg-accent/50">
              <p className="text-sm text-muted-foreground">{region.region}</p>
              <p className={`text-lg font-semibold ${region.color} mt-1`}>{region.intensity}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
