import { GraduationCap, Layers, LifeBuoy, ShieldCheck } from "lucide-react"

const reasons = [
  {
    icon: GraduationCap,
    title: "Student-Focused Approach",
    description: "We understand the academic pressure, marking criteria, and what examiners look for — because we've been there.",
    gradientFrom: "#F2613F",
    gradientTo: "#F5A623",
    border: "border-[#F2613F]/20",
  },
  {
    icon: Layers,
    title: "Scalable & Clean Solutions",
    description: "Our code and documentation follow industry best practices — not just enough to pass, but enough to impress.",
    gradientFrom: "#0FA3B1",
    gradientTo: "#48c9b0",
    border: "border-[#0FA3B1]/20",
  },
  {
    icon: LifeBuoy,
    title: "End-to-End Support",
    description: "From your first idea to your final viva — we're with you at every stage, not just one part of the journey.",
    gradientFrom: "#F5C046",
    gradientTo: "#F2613F",
    border: "border-[#F5C046]/20",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Confidential",
    description: "Your project details are completely private. We deliver on time, every time — no excuses, no delays.",
    gradientFrom: "#F2613F",
    gradientTo: "#0FA3B1",
    border: "border-[#F2613F]/20",
  },
]

const trustItems = [
  { label: "Response Time", value: "Within 24 Hours", color: "#F2613F" },
  { label: "Project Types", value: "All Branches", color: "#0FA3B1" },
  { label: "Privacy", value: "100% Confidential", color: "#9A6F00" },
  { label: "Revisions", value: "Unlimited Rounds", color: "#F2613F" },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-background" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: "#F2613F" }}>Why Eryon AI</p>
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Built for Students,{" "}
            <span className="gradient-text">Trusted by Hundreds</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We aren&apos;t just another service — we&apos;re a partner who genuinely cares about your academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className={`group rounded-2xl border ${reason.border} bg-white p-8 hover:shadow-lg transition-all duration-200 card-glow`}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-200"
                  style={{ background: `linear-gradient(135deg, ${reason.gradientFrom} 0%, ${reason.gradientTo} 100%)` }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-lg font-semibold text-foreground mb-2"
                  style={{ fontFamily: "var(--font-plus-jakarta)" }}
                >
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{reason.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust bar */}
        <div className="mt-12 rounded-2xl border border-border bg-white p-6 flex flex-col md:flex-row items-center justify-between gap-6" style={{ borderColor: "rgba(242,97,63,0.15)" }}>
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
