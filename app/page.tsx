"use client"

import { useState, useCallback } from "react"
import { ArrowRight } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { CollageQuotesBanner } from "@/components/collage-quotes-banner"
import { StudentExperienceSection } from "@/components/student-experience-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { EryonAiSection } from "@/components/eryon-ai-section"
import { LeadCaptureSection } from "@/components/lead-capture-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { SiteFooter } from "@/components/site-footer"
import { LeadModal } from "@/components/lead-modal"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  const scrollToServices = useCallback(() => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }, [])

  return (
    <>
      <Navbar onStartProject={openModal} />

      <main>
        <HeroSection onStartProject={openModal} onExploreServices={scrollToServices} />

        {/* Funky collage quotes marquee banner */}
        <ScrollReveal>
          <CollageQuotesBanner />
        </ScrollReveal>

        <ScrollReveal>
          <StudentExperienceSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ServicesSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <ProcessSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <WhyChooseUsSection />
        </ScrollReveal>

        {/* Funky quotes banner between sections */}
        <ScrollReveal>
          <CollageQuotesBanner />
        </ScrollReveal>

        {/* Eryon AI feature section */}
        <ScrollReveal>
          <EryonAiSection />
        </ScrollReveal>

        <ScrollReveal>
          <LeadCaptureSection />
        </ScrollReveal>
        
        <ScrollReveal>
          <FinalCtaSection onStartProject={openModal} />
        </ScrollReveal>
      </main>

      <SiteFooter />

      {/* Sticky floating CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={openModal}
          aria-label="Start Your Project"
          className="flex items-center gap-2 px-5 py-3 rounded-full text-white font-semibold text-sm shadow-xl hover:shadow-2xl transition-all active:scale-95 hover:scale-105"
          style={{ background: "linear-gradient(135deg, #F2613F 0%, #F5A623 100%)" }}
        >
          Start Project
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <LeadModal open={modalOpen} onClose={closeModal} />
    </>
  )
}
