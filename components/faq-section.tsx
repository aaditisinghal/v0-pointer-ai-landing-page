"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is BuildWise and who is it for?",
    answer:
      "BuildWise is an AI optimization platform designed for developers, teams, and organizations running LLM workloads. It reduces cost by 30-50%, cuts carbon emissions, and provides verifiable Carbon Receipts for every request. Perfect for anyone using OpenAI, Anthropic, Gemini, or local GPUs.",
  },
  {
    question: "How does BuildWise reduce LLM costs?",
    answer:
      "BuildWise uses a Knowledge Graph to remember what worked, a Neural Policy to predict optimal settings, and hardware-aware control to tune GPU efficiency. It optimizes prompts, context, caching, region selection, and micro-batching—all before your request runs.",
  },
  {
    question: "What are Carbon Receipts?",
    answer:
      "Carbon Receipts are tamper-evident records showing tokens, latency, cost, kWh, and CO₂ for every LLM call. They include a SHA-256 hash for verification and can be exported for ESG reporting. You get proof of savings you can hand to finance and sustainability teams.",
  },
  {
    question: "Does BuildWise work with my existing LLM provider?",
    answer:
      "Yes! BuildWise works across OpenAI, Anthropic, Gemini, vLLM, Triton, and local GPUs. It's a drop-in SDK that requires no infrastructure migration. Just add the client and start optimizing.",
  },
  {
    question: "How does the Knowledge Graph work?",
    answer:
      "The Knowledge Graph stores 20+ entities and 16+ relationships connecting prompts, documents, models, regions, hardware, and outcomes. It learns from your workloads and evolves over time, making tomorrow smarter than today.",
  },
  {
    question: "Is my data secure with BuildWise?",
    answer:
      "Absolutely. BuildWise uses metrics-only logging by default and never stores raw content unless you enable it for analytics. Optional org HMAC ensures receipt integrity. Enterprise customers can deploy on private cloud with full governance controls.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about BuildWise and how it optimizes your AI workloads
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
