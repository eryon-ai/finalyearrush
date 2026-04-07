"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Share Your Idea",
    description: "Tell us what you have in mind — even if it's vague. We'll help you shape it into a viable project. No stress, just brainstorming.",
    color: "#F2613F",
  },
  {
    step: "02",
    title: "We Design the Solution",
    description: "Our experts map out the architecture, tech stack, and documentation structure that fits your requirements perfectly.",
    color: "#0FA3B1",
  },
  {
    step: "03",
    title: "Development & Docs",
    description: "We build the code, write the reports, and prepare all the materials your submission needs. You sit back and relax.",
    color: "#F5C046",
  },
  {
    step: "04",
    title: "Final Delivery",
    description: "You receive everything polished and ready. We walk you through each component so you understand it fully inside and out.",
    color: "#F2613F",
  },
  {
    step: "05",
    title: "1:1 Discussion",
    description: "A dedicated session where we prep you for your viva, answer every question, and boost your confidence to max levels.",
    color: "#0ea5e9",
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 10%"]
  })

  // Smooth the scroll progress for a buttery feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const headerColor = "#ffffff"

  return (
    <motion.section 
      ref={containerRef} 
      id="process" 
      style={{ 
        background: "linear-gradient(135deg, #F2613F 0%, #F5C046 50%, #0FA3B1 100%)" 
      }}
      className="relative py-32 md:py-56 overflow-hidden"
    >
      {/* Decorative Radial Background Blooms */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 z-0" 
        style={{ 
          backgroundImage: "radial-gradient(circle at 15% 50%, rgba(255,255,255,0.4) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.3) 0%, transparent 40%)" 
        }} 
        aria-hidden="true" 
      />

      {/* MASSIVE BACKGROUND SVG TRACK */}
      <div className="absolute inset-0 z-0 flex items-center justify-center -top-[15%]">
        <svg 
           className="w-[150%] max-w-[1400px] h-[130%]" 
           viewBox="0 0 1000 4000" 
           preserveAspectRatio="none"
        >
          {/* Faint ambient track */}
          <path 
            d="M 200 0 C 200 400, 800 400, 800 800 C 800 1200, 200 1200, 200 1600 C 200 2000, 800 2000, 800 2400 C 800 2800, 200 2800, 200 3200 C 200 3600, 800 3600, 800 4000" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="120" 
            strokeLinecap="round"
            className="text-white opacity-10"
          />
          {/* Animated filled track - switched to white for visibility against vibrant BG */}
          <motion.path 
            d="M 200 0 C 200 400, 800 400, 800 800 C 800 1200, 200 1200, 200 1600 C 200 2000, 800 2000, 800 2400 C 800 2800, 200 2800, 200 3200 C 200 3600, 800 3600, 800 4000" 
            fill="none" 
            stroke="#ffffff" 
            strokeWidth="130" 
            strokeLinecap="round"
            style={{ pathLength: smoothProgress }}
            className="opacity-30 mix-blend-screen"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Reveal Header - Premiere Reveal */}
        <div className="mb-48 md:mb-64 flex flex-col items-end">
          <div className="text-right">
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              className="font-bold text-sm md:text-base tracking-widest uppercase mb-6 text-[#F2613F] bg-white/10 backdrop-blur-md w-fit ml-auto px-6 py-2.5 rounded-full border border-white/10 shadow-xl"
            >
              How it works
            </motion.p>
            
            <div className="overflow-hidden">
              <motion.h2 
                className="text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8.5rem] font-black uppercase tracking-tighter leading-[0.8] mb-2"
                style={{ color: headerColor }}
              >
                {["From", "Zero", "to", "Ready"].map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: false }}
                    transition={{ 
                      duration: 0.8, 
                      delay: i * 0.1, 
                      ease: [0.33, 1, 0.68, 1] 
                    }}
                    className="inline-block mr-[0.2em] transform-gpu"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
            </div>
            
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
              className="mt-4"
            >
              <p className="text-xl md:text-2xl font-medium text-white/60 tracking-tight">
                A simple journey to academic excellence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Thick alternating boxes */}
        <div className="flex flex-col gap-32 md:gap-48">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0
            return (
              <div key={step.step} className={`flex w-full ${isEven ? 'justify-start' : 'justify-end'}`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9, y: 100 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ 
                    duration: 0.7, 
                    type: "spring", 
                    bounce: 0.15, 
                    stiffness: 70 
                  }}
                  className="w-full sm:w-[90%] md:w-[70%] lg:w-[48%] bg-white p-10 md:p-16 text-slate-900 rounded-[2.5rem] md:rounded-[3.5rem] relative group"
                  style={{ boxShadow: "0 50px 100px -20px rgba(0,0,0,0.4)" }}
                >
                  <span 
                    className={`absolute -top-10 md:-top-16 ${isEven ? '-right-4 md:-right-8' : '-left-4 md:-left-8'} text-[8rem] md:text-[12rem] lg:text-[14rem] font-black font-mono tracking-tighter opacity-25 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none select-none`}
                    style={{ color: step.color }}
                  >
                    {step.step}
                  </span>
                  
                  <h3 className="text-3xl md:text-5xl font-black mb-6 tracking-tight text-slate-950 leading-[1] relative z-10">
                    {step.title}
                  </h3>
                  
                  <p className="text-lg md:text-xl leading-relaxed text-slate-600 font-medium relative z-10">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}
