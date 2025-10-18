"use client"

import { Card } from "@/components/ui/card"
import { Trophy, Award, TrendingUp } from "lucide-react"

const leaderboard = [
  { rank: 1, name: "EcoTech Solutions", co2Saved: "1,247 kg", badge: "🏆", trend: "+12" },
  { rank: 2, name: "GreenAI Labs", co2Saved: "1,156 kg", badge: "🥈", trend: "+8" },
  { rank: 3, name: "Sustainable Systems", co2Saved: "1,089 kg", badge: "🥉", trend: "+5" },
  { rank: 4, name: "CleanCode Inc", co2Saved: "987 kg", badge: "⭐", trend: "+3" },
  { rank: 5, name: "EarthFirst Dev", co2Saved: "892 kg", badge: "⭐", trend: "-2" },
]

const achievements = [
  { name: "First Steps", description: "Saved your first 1kg of CO₂", unlocked: true },
  { name: "Carbon Warrior", description: "Saved 100kg of CO₂", unlocked: true },
  { name: "Efficiency Master", description: "Maintained 90%+ efficiency for 30 days", unlocked: true },
  { name: "Team Player", description: "Invited 5 team members", unlocked: false },
  { name: "Sustainability Champion", description: "Saved 1000kg of CO₂", unlocked: false },
]

export function LeaderboardView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Leaderboard</h1>
        <p className="text-muted-foreground mt-2">See how you rank among other carbon savers</p>
      </div>

      {/* Your Rank Card */}
      <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-full bg-primary/20">
              <Trophy className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Your Current Rank</p>
              <p className="text-4xl font-bold text-foreground">#42</p>
              <p className="text-sm text-primary font-medium mt-1">↑ 5 positions this week</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Total CO₂ Saved</p>
            <p className="text-2xl font-bold text-foreground">724 kg</p>
          </div>
        </div>
      </Card>

      {/* Global Leaderboard */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Global Rankings</h3>
        <div className="space-y-3">
          {leaderboard.map((entry) => (
            <div
              key={entry.rank}
              className="flex items-center justify-between p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl w-8 text-center">{entry.badge}</span>
                <div>
                  <p className="font-medium text-foreground">{entry.name}</p>
                  <p className="text-sm text-muted-foreground">Rank #{entry.rank}</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="font-semibold text-foreground">{entry.co2Saved}</p>
                  <p className="text-xs text-muted-foreground">CO₂ saved</p>
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    entry.trend.startsWith("+") ? "text-primary" : "text-red-500"
                  }`}
                >
                  <TrendingUp className="h-4 w-4" />
                  {entry.trend}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Achievements */}
      <Card className="p-6 bg-card border-border">
        <h3 className="text-lg font-semibold text-foreground mb-6">Achievements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className={`p-4 rounded-lg border ${
                achievement.unlocked ? "bg-primary/5 border-primary/50" : "bg-accent/30 border-border opacity-60"
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`p-2 rounded-lg ${achievement.unlocked ? "bg-primary/20" : "bg-accent"}`}>
                  <Award className={`h-5 w-5 ${achievement.unlocked ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{achievement.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}
