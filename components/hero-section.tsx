"use client"

import { ArrowRight, CheckCircle2, BookOpen, Code2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Student Satisfaction" },
  { value: "24h", label: "Avg. Response Time" },
]

const highlights = [
  "End-to-end project support",
  "Expert documentation & reporting",
  "Live viva & presentation prep",
]

const floatingCards = [
  {
    icon: FileText,
    title: "Project Report",
    subtitle: "Ready in 48 hrs",
    bg: "bg-[#F2613F]",
  },
  {
    icon: Code2,
    title: "Code Implementation",
    subtitle: "Clean & scalable",
    bg: "bg-[#0FA3B1]",
  },
  {
    icon: BookOpen,
    title: "Synopsis Writing",
    subtitle: "Professionally crafted",
    bg: "bg-[#F5C046]",
  },
]

interface HeroSectionProps {
  onStartProject: () => void
  onExploreServices: () => void
}

export function HeroSection({ onStartProject, onExploreServices }: HeroSectionProps) {
  return (
    <section
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden hero-gradient"
      aria-label="Hero"
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-25 pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, #F2613F 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none animate-float-delay"
        style={{ background: "radial-gradient(circle, #0FA3B1 0%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/4 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #F5C046 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Decorative floating emoji stickers */}
      <div className="absolute top-24 left-8 text-3xl animate-bounce-slow opacity-70 hidden lg:block" aria-hidden="true">🎓</div>
      <div className="absolute top-40 right-12 text-2xl animate-wiggle opacity-60 hidden lg:block" aria-hidden="true">📚</div>
      <div className="absolute bottom-20 left-16 text-2xl animate-float opacity-60 hidden lg:block" aria-hidden="true">💡</div>
      <div className="absolute bottom-32 right-8 text-3xl animate-bounce-slow opacity-70 hidden lg:block" aria-hidden="true">🚀</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
          {/* Left — copy */}
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold tracking-wide mb-6"
              style={{
                background: "#FEE3D4",
                borderColor: "rgba(242,97,63,0.3)",
                color: "#C44A2B",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2613F] animate-pulse" />
              Trusted by 500+ Final-Year Students
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground mb-6"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Worried About Your{" "}
              <span className="gradient-text">Final Year Project?</span>{" "}
              We&apos;ve Got You Covered.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              From idea to execution — we help you build, document, and deliver your project with confidence.
              Expert guidance every step of the way.
            </p>

            {/* Highlights */}
            <ul className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2 sm:gap-4 mb-10 justify-center lg:justify-start" role="list">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-[#F2613F] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={onStartProject}
                className="text-white font-semibold text-base px-7 shadow-md hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #F2613F 0%, #F5A623 100%)",
                  border: "none",
                }}
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={onExploreServices}
                className="border-2 border-[#F2613F]/30 text-[#F2613F] hover:bg-[#FEE3D4] text-base px-7 font-semibold transition-all"
              >
                Explore Services
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-2xl font-bold text-foreground"
                    style={{ fontFamily: "var(--font-plus-jakarta)", color: "#F2613F" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — visual cards */}
          <div className="flex-1 w-full max-w-md lg:max-w-none relative" aria-hidden="true">
            <div className="relative w-full aspect-square max-w-sm mx-auto lg:max-w-none">
              {/* Main card */}
              <div className="rounded-2xl bg-white border border-border shadow-xl p-6" style={{ borderColor: "rgba(242,97,63,0.15)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#FEE3D4" }}
                  >
                    <FileText className="w-5 h-5 text-[#F2613F]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Project Dashboard</p>
                    <p className="text-xs text-muted-foreground">Eryon AI Platform</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    { label: "Synopsis", progress: 100, color: "#F2613F" },
                    { label: "Project Report", progress: 75, color: "#0FA3B1" },
                    { label: "Code Implementation", progress: 60, color: "#F5C046" },
                    { label: "PPT Preparation", progress: 40, color: "#F2613F" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{item.label}</span>
                        <span className="text-foreground font-medium">{item.progress}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all"
                          style={{ width: `${item.progress}%`, background: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Overall Progress</span>
                  <span className="text-sm font-bold" style={{ color: "#F2613F" }}>69% Complete</span>
                </div>
              </div>

              {/* Floating mini cards */}
              {floatingCards.map((card, i) => {
                const Icon = card.icon
                const positions = [
                  "absolute -top-4 -right-4 lg:-right-8",
                  "absolute -bottom-4 -left-4 lg:-left-8",
                  "absolute top-1/2 -right-2 lg:-right-10 -translate-y-1/2",
                ]
                return (
                  <div
                    key={card.title}
                    className={`${positions[i]} bg-white border border-border rounded-xl shadow-lg px-3 py-2.5 flex items-center gap-2.5 animate-fade-up`}
                    style={{ animationDelay: `${i * 120}ms`, borderColor: "rgba(242,97,63,0.15)" }}
                  >
                    <div className={`w-7 h-7 rounded-lg ${card.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-foreground leading-tight">{card.title}</p>
                      <p className="text-[10px] text-muted-foreground">{card.subtitle}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
