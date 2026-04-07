"use client"

const quotesRow1 = [
  { emoji: "🎓", text: "Deadline in 2 days? We got you!" },
  { emoji: "⚡", text: "From vague idea → polished project" },
  { emoji: "📝", text: "Synopsis? Report? Bring it on." },
  { emoji: "🚀", text: "500+ students already submitted" },
  { emoji: "💡", text: "Expert guidance. Zero stress." },
  { emoji: "🎯", text: "Hit that perfect viva score" },
  { emoji: "🤓", text: "Clean code. Every single time." },
  { emoji: "🏆", text: "Trusted by students across India" },
]

const quotesRow2 = [
  { emoji: "📚", text: "No cap — we literally write it right" },
  { emoji: "🧠", text: "AI-powered. Human-touched." },
  { emoji: "✅", text: "Submission-ready in 48 hrs" },
  { emoji: "💬", text: "Real support. Real people. Real results." },
  { emoji: "🔥", text: "Your project, our passion" },
  { emoji: "🎉", text: "Free consultation, no commitment" },
  { emoji: "📊", text: "All engineering branches covered" },
  { emoji: "💯", text: "100% confidential. Always." },
]

function QuoteChip({ emoji, text, variant = "coral" }: { emoji: string; text: string; variant?: "coral" | "teal" | "gold" | "peach" }) {
  const styles: Record<string, string> = {
    coral: "bg-[#FEE3D4] text-[#C44A2B] border-[#F2613F]/30",
    teal: "bg-[#D4F1F4] text-[#0B7A85] border-[#0FA3B1]/30",
    gold: "bg-[#FEF3CD] text-[#9A6F00] border-[#F5C046]/30",
    peach: "bg-[#FFF0E6] text-[#C44A2B] border-[#F2613F]/20",
  }

  return (
    <span
      className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold ${styles[variant]} mx-3`}
    >
      <span className="text-base">{emoji}</span>
      {text}
    </span>
  )
}

const row1Variants: Array<"coral" | "teal" | "gold" | "peach"> = ["coral", "teal", "gold", "coral", "teal", "peach", "gold", "coral"]
const row2Variants: Array<"coral" | "teal" | "gold" | "peach"> = ["teal", "coral", "peach", "gold", "coral", "teal", "gold", "peach"]

export function CollageQuotesBanner() {
  return (
    <section
      className="py-8 overflow-hidden relative"
      style={{ background: "linear-gradient(135deg, #fff8f4 0%, #e8f9fb 100%)" }}
      aria-label="Collage quotes banner"
    >
      {/* Decorative border top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #F2613F 0%, #F5C046 50%, #0FA3B1 100%)" }}
      />
      {/* Decorative border bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(90deg, #0FA3B1 0%, #F5C046 50%, #F2613F 100%)" }}
      />

      {/* Row 1 */}
      <div className="marquee-track mb-3" aria-hidden="true">
        <div className="flex animate-scroll-left whitespace-nowrap">
          {/* Double the list for seamless loop */}
          {[...quotesRow1, ...quotesRow1].map((q, i) => (
            <QuoteChip key={i} emoji={q.emoji} text={q.text} variant={row1Variants[i % row1Variants.length]} />
          ))}
        </div>
      </div>

      {/* Row 2 — reverse direction */}
      <div className="marquee-track" aria-hidden="true" style={{ direction: "rtl" }}>
        <div className="flex animate-scroll-left whitespace-nowrap" style={{ direction: "ltr" }}>
          {[...quotesRow2, ...quotesRow2].map((q, i) => (
            <QuoteChip key={i} emoji={q.emoji} text={q.text} variant={row2Variants[i % row2Variants.length]} />
          ))}
        </div>
      </div>

      {/* Section label */}
      <div className="text-center mt-4">
        <span className="sticker text-[#F2613F] bg-[#FEE3D4] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest border border-[#F2613F]/30 uppercase">
          🎓 Back to Collage — Made Stress-Free
        </span>
      </div>
    </section>
  )
}
