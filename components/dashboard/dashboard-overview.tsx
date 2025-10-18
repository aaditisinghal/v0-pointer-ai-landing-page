"use client"

import { Card } from "@/components/ui/card"
import { Leaf, DollarSign, Zap, TrendingUp, Activity, Award } from "lucide-react"

const stats = [
  {
    name: "CO₂ Saved Today",
    value: "2.4 kg",
    change: "+12%",
    icon: Leaf,
    color: "text-primary",
  },
  {
    name: "Cost Saved",
    value: "$127.50",
    change: "+8%",
    icon: DollarSign,
    color: "text-primary",
  },
  {
    name: "Efficiency Score",
    value: "94%",
    change: "+3%",
    icon: Zap,
    color: "text-primary",
  },
  {
    name: "Requests Today",
    value: "1,247",
    change: "+18%",
    icon: Activity,
    color: "text-muted-foreground",
  },
  {
    name: "Tokens Processed",
    value: "2.4M",
    change: "+15%",
    icon: TrendingUp,
    color: "text-muted-foreground",
  },
  {
    name: "Leaderboard Rank",
    value: "#42",
    change: "↑5",
    icon: Award,
    color: "text-muted-foreground",
  },
]

const recentActivity = [
  {
    model: "gpt-4",
    tokens: 1250,
    co2: "0.12 kg",
    cost: "$0.05",
    time: "2 min ago",
  },
  {
    model: "claude-3",
    tokens: 890,
    co2: "0.08 kg",
    cost: "$0.03",
    time: "5 min ago",
  },
  {
    model: "gpt-3.5",
    tokens: 2100,
    co2: "0.15 kg",
    cost: "$0.02",
    time: "12 min ago",
  },
  {
    model: "gpt-4",
    tokens: 1580,
    co2: "0.14 kg",
    cost: "$0.06",
    time: "18 min ago",
  },
]

export function DashboardOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-2">Track your carbon footprint and cost savings in real-time</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.name} className="p-6 bg-card border-border hover:border-primary/50 transition-colors">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{stat.name}</p>
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-primary font-medium">{stat.change}</p>
              </div>
              <div className={`p-3 rounded-lg bg-primary/10`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Goal Progress */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-xl font-semibold text-foreground mb-6">Monthly Goals</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">CO₂ Reduction Target</span>
              <span className="text-sm font-medium text-foreground">72 / 100 kg</span>
            </div>
            <div className="h-2 bg-accent rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "72%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">Cost Savings Target</span>
              <span className="text-sm font-medium text-foreground">$3,240 / $5,000</span>
            </div>
            <div className="h-2 bg-accent rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "65%" }} />
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-sm text-muted-foreground">Efficiency Target</span>
              <span className="text-sm font-medium text-foreground">94 / 95%</span>
            </div>
            <div className="h-2 bg-accent rounded-full overflow-hidden">
              <div className="h-full bg-primary rounded-full" style={{ width: "99%" }} />
            </div>
          </div>
        </div>
      </Card>

      {/* Recent Activity */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-xl font-semibold text-foreground mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Activity className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{activity.model}</p>
                  <p className="text-sm text-muted-foreground">{activity.tokens.toLocaleString()} tokens</p>
                </div>
              </div>
              <div className="flex items-center gap-6 text-right">
                <div>
                  <p className="text-sm font-medium text-foreground">{activity.co2}</p>
                  <p className="text-xs text-muted-foreground">CO₂</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{activity.cost}</p>
                  <p className="text-xs text-muted-foreground">Cost</p>
                </div>
                <p className="text-sm text-muted-foreground min-w-[80px]">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
