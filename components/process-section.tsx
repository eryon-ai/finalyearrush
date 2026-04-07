import { Lightbulb, Puzzle, Wrench, CheckCircle2, MessageSquare } from "lucide-react"

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Share Your Idea",
    description: "Tell us what you have in mind — even if it's vague. We'll help you shape it into a viable project.",
    color: "#F2613F",
    bg: "#FEE3D4",
  },
  {
    icon: Puzzle,
    step: "02",
    title: "We Design the Solution",
    description: "Our experts map out the architecture, tech stack, and documentation structure that fits your requirements.",
    color: "#0FA3B1",
    bg: "#D4F1F4",
  },
  {
    icon: Wrench,
    step: "03",
    title: "Development & Documentation",
    description: "We build the code, write the reports, and prepare all the materials your submission needs.",
    color: "#9A6F00",
    bg: "#FEF3CD",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Final Delivery & Guidance",
    description: "You receive everything polished and ready. We walk you through each component so you understand it fully.",
    color: "#F2613F",
    bg: "#FEE3D4",
  },
  {
    icon: MessageSquare,
    step: "05",
    title: "1:1 Project Discussion",
    description: "A dedicated session where we prep you for your viva, answer every question, and boost your confidence.",
    color: "#0FA3B1",
    bg: "#D4F1F4",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 md:py-28 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: "#F2613F" }}>How It Works</p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            From Zero to{" "}
            <span className="gradient-text">Submission-Ready</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A simple, transparent process designed around your academic timeline.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:flex items-start gap-0 relative">
          {/* Connector line */}
          <div
            className="absolute top-7 left-[10%] right-[10%] h-px pointer-events-none"
            style={{ background: "linear-gradient(90deg, #F2613F 0%, #F5C046 50%, #0FA3B1 100%)", opacity: 0.3 }}
            aria-hidden="true"
          />
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="flex-1 flex flex-col items-center text-center px-3 relative">
                {/* Step dot */}
                <div
                  className="w-14 h-14 rounded-full border-2 bg-white flex items-center justify-center mb-4 shadow-sm relative z-10"
                  style={{ borderColor: `${step.color}40` }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: step.bg }}
                  >
                    <Icon className="w-5 h-5" style={{ color: step.color }} />
                  </div>
                </div>
                <span className="text-xs font-bold mb-1 tracking-widest" style={{ color: step.color }}>{step.step}</span>
                <h3 className="font-semibold text-foreground text-sm mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Mobile: vertical */}
        <div className="flex flex-col gap-0 lg:hidden relative">
          <div
            className="absolute top-8 bottom-8 left-7 w-px pointer-events-none"
            style={{ background: "linear-gradient(180deg, #F2613F 0%, #F5C046 50%, #0FA3B1 100%)", opacity: 0.3 }}
            aria-hidden="true"
          />
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.step} className="flex gap-5 pb-8 last:pb-0 relative">
                <div className="flex-shrink-0 w-14 flex flex-col items-center">
                  <div
                    className="w-14 h-14 rounded-full border-2 bg-white flex items-center justify-center shadow-sm relative z-10"
                    style={{ borderColor: `${step.color}40` }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: step.bg }}
                    >
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                  </div>
                </div>
                <div className="pt-3">
                  <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>{step.step}</span>
                  <h3 className="font-semibold text-foreground text-sm mt-0.5 mb-1" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
