"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { LeadCaptureForm } from "@/components/lead-capture-form"

interface LeadModalProps {
  open: boolean
  onClose: () => void
}

export function LeadModal({ open, onClose }: LeadModalProps) {
  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [open])

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl animate-fade-up overflow-y-auto max-h-[90vh]">
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2
                id="modal-title"
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-plus-jakarta)" }}
              >
                Get Free Consultation
              </h2>
              <p className="text-sm text-muted-foreground mt-0.5">
                Fill in your details and we&apos;ll get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={onClose}
              className="ml-4 p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <LeadCaptureForm onSuccess={onClose} compact />
        </div>
      </div>
    </div>
  )
}
