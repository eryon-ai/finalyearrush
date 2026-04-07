"use client"

import { Mail, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FinalCtaSectionProps {
  onStartProject: () => void
}

export function FinalCtaSection({ onStartProject }: FinalCtaSectionProps) {
  return (
    <section
      className="py-20 md:py-28 relative overflow-hidden"
      aria-labelledby="final-cta-heading"
      style={{
        background: "linear-gradient(135deg, #F2613F 0%, #F5A623 50%, #0FA3B1 100%)",
      }}
    >
      {/* Decorative overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.07) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Floating emoji decorations */}
      <div className="absolute top-8 left-12 text-4xl opacity-40 animate-float hidden md:block" aria-hidden="true">🎓</div>
      <div className="absolute bottom-8 right-12 text-3xl opacity-40 animate-bounce-slow hidden md:block" aria-hidden="true">🚀</div>
      <div className="absolute top-1/2 left-8 -translate-y-1/2 text-2xl opacity-30 animate-wiggle hidden lg:block" aria-hidden="true">✨</div>
      <div className="absolute top-1/2 right-8 -translate-y-1/2 text-2xl opacity-30 animate-float-delay hidden lg:block" aria-hidden="true">💡</div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-balance mb-5"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Let&apos;s Build Your Project Together
        </h2>
        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
          Don&apos;t let your final year project be a source of stress. Take the first step today and let our experts guide you to a confident submission.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={onStartProject}
            className="bg-white hover:bg-white/90 shadow-lg font-bold text-base px-8 hover:scale-105 active:scale-95 transition-all"
            style={{ color: "#F2613F" }}
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <a
            href="https://wa.me/919876543210?text=Hi%2C+I%27m+interested+in+Eryon+AI+project+assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl border border-white/40 text-white text-base font-semibold hover:bg-white/15 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>

          <a
            href="mailto:connect@eryonai.com"
            className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl border border-white/40 text-white text-base font-semibold hover:bg-white/15 transition-colors"
            aria-label="Send us an email"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
        </div>

        <p className="text-white/60 text-xs mt-8">
          Free consultation · No commitment required · Response within 24 hours
        </p>
      </div>
    </section>
  )
}
