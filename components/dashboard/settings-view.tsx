"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Key, Bell, CreditCard, Target } from "lucide-react"

export function SettingsView() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground mt-2">Manage your account and preferences</p>
      </div>

      {/* Profile Settings */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3 mb-6">
          <User className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Profile</h3>
        </div>
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" defaultValue="John Doe" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Save Changes</Button>
        </div>
      </Card>

      {/* Carbon Goals */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3 mb-6">
          <Target className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Carbon Goals</h3>
        </div>
        <div className="space-y-4 max-w-md">
          <div className="space-y-2">
            <Label htmlFor="co2-target">Monthly CO₂ Reduction Target (kg)</Label>
            <Input id="co2-target" type="number" defaultValue="100" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cost-target">Monthly Cost Savings Target ($)</Label>
            <Input id="cost-target" type="number" defaultValue="5000" />
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Update Goals</Button>
        </div>
      </Card>

      {/* API Keys */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3 mb-6">
          <Key className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">API Keys</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-accent/50">
            <div>
              <p className="font-medium text-foreground">Production Key</p>
              <p className="text-sm text-muted-foreground font-mono">bw_prod_••••••••••••••••</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Regenerate
              </Button>
              <Button variant="outline" size="sm">
                Revoke
              </Button>
            </div>
          </div>
          <Button variant="outline" className="gap-2 bg-transparent">
            <Key className="h-4 w-4" />
            Generate New Key
          </Button>
        </div>
      </Card>

      {/* Notifications */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3 mb-6">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive weekly carbon reports</p>
            </div>
            <Button variant="outline" size="sm">
              Enabled
            </Button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-foreground">Goal Alerts</p>
              <p className="text-sm text-muted-foreground">Get notified when you reach milestones</p>
            </div>
            <Button variant="outline" size="sm">
              Enabled
            </Button>
          </div>
        </div>
      </Card>

      {/* Account Tier */}
      <Card className="p-6 bg-card border-border">
        <div className="flex items-center gap-3 mb-6">
          <CreditCard className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-foreground">Account Tier</h3>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground">Current Plan: Developer</p>
            <p className="text-sm text-muted-foreground">$49/month • 100k requests/month</p>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Upgrade to Pro</Button>
        </div>
      </Card>
    </div>
  )
}
