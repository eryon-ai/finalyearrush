"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

const reasons = [
  {
    title: "Student-Focused Approach",
    description: "We understand the academic pressure, marking criteria, and what examiners look for — because we've been there. No fluff, just practical solutions that guarantee results.",
    gradient: "linear-gradient(135deg, #F2613F 0%, #F5A623 100%)",
    shadow: "rgba(242, 97, 63, 0.5)",
  },
  {
    title: "Scalable & Clean Solutions",
    description: "Our code and documentation follow industry best practices — not just enough to pass, but enough to impress your toughest panel members.",
    gradient: "linear-gradient(135deg, #0FA3B1 0%, #2E7D32 100%)",
    shadow: "rgba(15, 163, 177, 0.5)",
  },
  {
    title: "End-to-End Support",
    description: "From your first idea to your final viva — we're with you at every stage. Complete peace of mind knowing professionals have your back.",
    gradient: "linear-gradient(135deg, #F5C046 0%, #F2613F 100%)",
    shadow: "rgba(245, 192, 70, 0.5)",
  },
  {
    title: "Reliable & Confidential",
    description: "Your project details are completely private. We deliver on time, every time — zero excuses, zero delays. It's like having a senior engineer on call.",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0FA3B1 100%)", 
    shadow: "rgba(14, 165, 233, 0.5)"
  },
]

const trustItems = [
  { label: "Response Time", value: "Within 24 Hours", color: "#F2613F" },
  { label: "Project Types", value: "All Branches", color: "#0FA3B1" },
  { label: "Privacy", value: "100% Confidential", color: "#9A6F00" },
  { label: "Revisions", value: "Unlimited Rounds", color: "#F2613F" },
]

export function WhyChooseUsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <section ref={containerRef} id="why-us" className="py-24 bg-background relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-[10vh]">
          <p className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: "#F2613F" }}>Why Eryon AI</p>
          <h2
            className="text-4xl md:text-7xl font-black text-foreground uppercase tracking-tight leading-[0.9] mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Built for Students<br/>
            <span 
              className="text-transparent" 
              style={{ 
                WebkitTextStroke: "1px currentColor", 
                background: "linear-gradient(to bottom, currentColor, transparent)",
                WebkitBackgroundClip: "text"
              }}
            >
              Trusted by 100s
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6">
            We aren&apos;t just another service — we&apos;re a partner who genuinely cares about your academic success.
          </p>
        </div>

        {/* Stacked Cards */}
        <div className="relative mt-24">
          {reasons.map((reason, i) => {
            const targetScale = 1 - ((reasons.length - 1 - i) * 0.05)
            return (
              <StackedCard 
                key={i}
                i={i}
                reason={reason}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            )
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-32 rounded-2xl border border-border bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10 shadow-lg" style={{ borderColor: "rgba(242,97,63,0.15)" }}>
          {trustItems.map((item) => (
            <div key={item.label} className="text-center">
              <p
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-plus-jakarta)", color: item.color }}
              >
                {item.value}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

interface StackedCardProps {
  i: number
  reason: typeof reasons[0]
  progress: MotionValue<number>
  range: number[]
  targetScale: number
}

function StackedCard({ i, reason, progress, range, targetScale }: StackedCardProps) {
  const scale = useTransform(progress, range, [1, targetScale])
  const rotateX = useTransform(progress, range, ["0deg", "-15deg"])
  
  return (
    <div 
      className="sticky flex items-start justify-center w-full mb-[20vh] md:mb-[30vh]"
      style={{ 
        top: `calc(15vh + ${i * 2}rem)`, 
        perspective: "1000px" 
      }}
    >
      <motion.div
        style={{
          scale,
          rotateX,
          backgroundImage: reason.gradient,
          transformOrigin: "top center",
          boxShadow: `0 3rem 5rem -1rem ${reason.shadow}`
        }}
        className="relative w-full rounded-[2rem] md:rounded-[3rem] p-8 md:p-14 text-white overflow-hidden flex flex-col justify-center min-h-[40vh] md:min-h-[50vh]"
      >
        {/* Dark gradient overlay to ensure text is readable over any color */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/10 to-black/50 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col gap-4">
          <span 
            className="absolute -top-12 md:-top-16 -right-4 md:right-8 text-[10rem] md:text-[14rem] font-bold font-mono tracking-tighter mix-blend-overlay"
            style={{ color: "rgba(255, 255, 255, 0.4)" }}
          >
            0{i + 1}
          </span>
          
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight drop-shadow-sm">
            {reason.title}
          </h3>
          
          <p className="text-base md:text-xl text-white max-w-2xl leading-relaxed mt-4 drop-shadow-sm font-medium">
            {reason.description}
          </p>
        </div>
      </motion.div>
    </div>
  )
}
