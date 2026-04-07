import { LeadCaptureForm } from "@/components/lead-capture-form"
import { GraduationCap, Star } from "lucide-react"

const testimonials = [
  {
    name: "Arjun Mehta",
    branch: "Computer Engineering, Pune University",
    quote: "Eryon AI helped me finish my ML project in under a week. My examiner was genuinely impressed.",
    stars: 5,
  },
  {
    name: "Priya Desai",
    branch: "Information Technology, Mumbai University",
    quote: "The report and synopsis were exactly what my college required. No revisions needed at all.",
    stars: 5,
  },
  {
    name: "Karan Joshi",
    branch: "Electronics Engineering, VTU",
    quote: "I was terrified of my viva. The 1:1 prep session made all the difference — I scored well.",
    stars: 5,
  },
]

export function LeadCaptureSection() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="lead-capture-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left — form (3/5) */}
          <div className="lg:col-span-3">
            <p className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: "#F2613F" }}>Get Started</p>
            <h2
              id="lead-capture-heading"
              className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta)" }}
            >
              Book Your{" "}
              <span className="gradient-text">Free Consultation</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Fill in the form and our team will reach out within 24 hours to discuss your project, answer your questions, and provide a transparent quote.
            </p>

            <div
              className="rounded-2xl border bg-background p-6 sm:p-8 shadow-sm"
              style={{ borderColor: "rgba(242,97,63,0.15)" }}
            >
              <LeadCaptureForm />
            </div>
          </div>

          {/* Right — social proof (2/5) */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div
              className="rounded-2xl border p-6"
              style={{ background: "#FEE3D4", borderColor: "rgba(242,97,63,0.2)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: "#F2613F" }}
                >
                  <GraduationCap className="w-5 h-5 text-white" />
                </div>
                <p className="font-semibold text-foreground text-sm">Student Reviews</p>
              </div>
              <div className="flex gap-0.5 mb-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" style={{ fill: "#F2613F", color: "#F2613F" }} />
                ))}
              </div>
              <p className="text-2xl font-bold text-foreground" style={{ fontFamily: "var(--font-plus-jakarta)" }}>4.9 / 5</p>
              <p className="text-xs text-muted-foreground mt-0.5">Based on 500+ student reviews</p>
            </div>

            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border bg-white p-5"
                style={{ borderColor: "rgba(242,97,63,0.12)" }}
              >
                <div className="flex gap-0.5 mb-3" aria-label={`${t.stars} stars`}>
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5" style={{ fill: "#F2613F", color: "#F2613F" }} />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-3">
                  &quot;{t.quote}&quot;
                </p>
                <div>
                  <p className="text-xs font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.branch}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
