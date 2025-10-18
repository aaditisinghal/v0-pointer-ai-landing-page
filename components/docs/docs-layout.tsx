"use client"

import type React from "react"

import { useState } from "react"
import { Search, Menu, X, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { DocsSidebar } from "./docs-sidebar"

export function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600">
                <span className="text-lg font-bold text-black">B</span>
              </div>
              <span className="text-xl font-bold">BuildWise</span>
            </Link>
            <nav className="hidden items-center gap-6 md:flex">
              <Link href="/docs" className="text-sm font-medium text-white">
                Docs
              </Link>
              <Link href="/docs#examples" className="text-sm font-medium text-white/60 hover:text-white">
                Examples
              </Link>
              <Link href="/docs#api" className="text-sm font-medium text-white/60 hover:text-white">
                API Reference
              </Link>
              <Link href="/docs#guides" className="text-sm font-medium text-white/60 hover:text-white">
                Guides
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
              <Input
                placeholder="Search docs..."
                className="h-9 w-64 border-white/10 bg-white/5 pl-9 text-sm placeholder:text-white/40 focus-visible:ring-emerald-500"
              />
              <kbd className="pointer-events-none absolute right-3 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-1 rounded border border-white/10 bg-white/5 px-1.5 font-mono text-xs font-medium text-white/60 sm:flex">
                ⌘K
              </kbd>
            </div>
            <Button variant="ghost" size="icon" className="text-white/60 hover:text-white">
              <Github className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto flex px-4">
        {/* Sidebar */}
        <DocsSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 py-8 md:pl-8">{children}</main>

        {/* Table of Contents */}
        <aside className="sticky top-20 hidden h-[calc(100vh-5rem)] w-64 shrink-0 py-8 pl-8 xl:block">
          <div className="text-sm">
            <p className="mb-4 font-semibold text-white/60">On this page</p>
            <nav className="space-y-2">
              <a href="#overview" className="block text-emerald-400 hover:text-emerald-300">
                Overview
              </a>
              <a href="#installation" className="block text-white/60 hover:text-white">
                Installation
              </a>
              <a href="#quick-start" className="block text-white/60 hover:text-white">
                Quick Start
              </a>
              <a href="#features" className="block text-white/60 hover:text-white">
                Features
              </a>
              <a href="#carbon-tracking" className="block text-white/60 hover:text-white">
                Carbon Tracking
              </a>
              <a href="#ai-powered" className="block text-white/60 hover:text-white">
                AI-Powered Optimization
              </a>
              <a href="#examples" className="block text-white/60 hover:text-white">
                Examples
              </a>
              <a href="#api-reference" className="block text-white/60 hover:text-white">
                API Reference
              </a>
              <a href="#deployment" className="block text-white/60 hover:text-white">
                Deployment
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  )
}
