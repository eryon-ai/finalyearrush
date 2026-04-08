"use client"

import { Brain, Sparkles, Zap, MessageSquareCode, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const aiFeatures = [
  {
    icon: Brain,
    title: "AI-Powered Project Planning",
    description:
      "Our proprietary Eryon AI engine analyzes your domain, automatically suggests optimal tech stacks, research topics, and project architectures tailored to your branch.",
    color: "text-[#F2613F]",
    bg: "bg-[#FEE3D4]",
    border: "border-[#F2613F]/20",
  },
  {
    icon: MessageSquareCode,
    title: "Smart Documentation Generator",
    description:
      "Generate IEEE/APA-formatted project reports, synopses, and abstracts instantly — then refine with expert human review for full accuracy.",
    color: "text-[#0FA3B1]",
    bg: "bg-[#D4F1F4]",
    border: "border-[#0FA3B1]/20",
  },
  {
    icon: Sparkles,
    title: "Viva Question Predictor",
    description:
      "Ace your oral exam. Eryon AI predicts likely examiner questions from your project domain and preps you with concise, confident answers.",
    color: "text-[#9A6F00]",
    bg: "bg-[#FEF3CD]",
    border: "border-[#F5C046]/20",
  },
  {
    icon: Zap,
    title: "24/7 Project Assistant",
    description:
      "Chat with Eryon AI any time — get instant clarifications, debugging hints, and step-by-step implementation guidance around the clock.",
    color: "text-[#F2613F]",
    bg: "bg-[#FEE3D4]",
    border: "border-[#F2613F]/20",
  },
]

export function EryonAiSection() {
  return (
    <section
      id="eryon-ai"
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(145deg, #fff8f4 0%, #ffffff 40%, #e8f9fb 100%)",
      }}
      aria-labelledby="eryon-ai-heading"
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F2613F 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #0FA3B1 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F5C046 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Branded badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FEE3D4] border border-[#F2613F]/30 mb-6">
            <div className="w-5 h-5 rounded-md bg-[#F2613F] flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="text-[#C44A2B] text-xs font-bold tracking-widest uppercase">
              Powered by Eryon AI
            </span>
          </div>

          <h2
            id="eryon-ai-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance mb-5"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Meet the AI Behind{" "}
            <span className="gradient-text">Your Success</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            FinalYearRush is supercharged by{" "}
            <strong className="text-[#F2613F]">Eryon AI</strong> — India&apos;s most student-friendly AI platform
            built to help you go from &quot;I have no idea&quot; to &quot;submission ready&quot; in record time.
          </p>
        </div>

        {/* AI Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
          {aiFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className={`group rounded-2xl border ${feature.border} bg-white p-7 card-glow transition-all duration-300 hover:scale-[1.02] cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3
                  className="font-bold text-foreground text-base mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Eryon AI card — visual highlight */}
        <div
          className="rounded-3xl overflow-hidden relative"
          style={{
            background: "linear-gradient(135deg, #F2613F 0%, #F5A623 50%, #0FA3B1 100%)",
          }}
        >
          {/* Overlay pattern */}
          <div
            className="absolute inset-0 pointer-events-none opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(255,255,255,0.2) 0%, transparent 40%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/80 text-sm font-semibold tracking-widest uppercase">Eryon AI Platform</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                The Full Eryon AI Experience
              </h3>
              <p className="text-white/80 leading-relaxed max-w-lg text-sm sm:text-base">
                Explore the complete Eryon AI suite — AI chatbot, project tracker, real-time support dashboard,
                smart code review, and more. Sign in to unlock everything.
              </p>

              {/* Stats */}
              <div className="flex gap-8 mt-6 justify-center md:justify-start">
                {[
                  { val: "500+", label: "Projects Done" },
                  { val: "98%", label: "Satisfaction Rate" },
                  { val: "24h", label: "Response Time" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-white">{s.val}</p>
                    <p className="text-white/60 text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTAs */}
            <div className="flex flex-col gap-3 min-w-[200px]">
              <a
                href="https://eryonai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#F2613F] font-bold text-sm hover:bg-white/90 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                aria-label="Visit Eryon AI website"
              >
                <ExternalLink className="w-4 h-4" />
                Visit eryonai.com
              </a>
              <p className="text-white/50 text-xs text-center">Free consultation · No commitment required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
