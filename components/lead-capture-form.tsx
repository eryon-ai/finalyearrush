"use client"

import { useState } from "react"
import { CheckCircle2, Clock, Lock, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const projectTypes = [
  "Web Application",
  "Mobile Application",
  "Machine Learning / AI",
  "IoT Project",
  "Data Analytics / Dashboard",
  "Blockchain Project",
  "Embedded Systems",
  "Networking Project",
  "Other",
]

interface FormData {
  fullName: string
  email: string
  phone: string
  projectType: string
  description: string
}

interface FormErrors {
  fullName?: string
  email?: string
  projectType?: string
  description?: string
}

interface LeadCaptureFormProps {
  onSuccess?: () => void
  compact?: boolean
}

export function LeadCaptureForm({ onSuccess, compact = false }: LeadCaptureFormProps) {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    description: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!form.fullName.trim()) newErrors.fullName = "Full name is required."
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "A valid email address is required."
    if (!form.projectType) newErrors.projectType = "Please select a project type."
    if (!form.description.trim() || form.description.length < 20)
      newErrors.description = "Please describe your project in at least 20 characters."
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
    onSuccess?.()
  }

  const field = (
    id: keyof FormData,
    label: string,
    type: string = "text",
    placeholder: string = "",
    required: boolean = true
  ) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">
        {label}
        {!required && <span className="text-muted-foreground font-normal ml-1">(optional)</span>}
      </label>
      <input
        id={id}
        type={type}
        value={form[id]}
        onChange={(e) => {
          setForm((prev) => ({ ...prev, [id]: e.target.value }))
          if (errors[id as keyof FormErrors]) setErrors((prev) => ({ ...prev, [id]: undefined }))
        }}
        placeholder={placeholder}
        aria-required={required}
        aria-describedby={errors[id as keyof FormErrors] ? `${id}-error` : undefined}
        className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-white text-foreground placeholder-muted-foreground outline-none focus:ring-2 transition-all ${
          errors[id as keyof FormErrors]
            ? "border-destructive focus:ring-destructive/30"
            : "border-input focus:border-primary focus:ring-primary/20"
        }`}
      />
      {errors[id as keyof FormErrors] && (
        <p id={`${id}-error`} className="mt-1 text-xs text-destructive" role="alert">
          {errors[id as keyof FormErrors]}
        </p>
      )}
    </div>
  )

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-7 h-7 text-primary" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
          We&apos;ve received your request!
        </h3>
        <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
          Our team will reach out to you within 24 hours to discuss your project. Keep an eye on your inbox.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Free consultation request form">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        {field("fullName", "Full Name", "text", "Rahul Sharma")}
        {field("email", "Email Address", "email", "rahul@college.edu")}
        {field("phone", "Phone Number", "tel", "+91 98765 43210", false)}

        <div className={compact ? "" : "sm:col-span-1"}>
          <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-1.5">
            Project Type
          </label>
          <select
            id="projectType"
            value={form.projectType}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, projectType: e.target.value }))
              if (errors.projectType) setErrors((prev) => ({ ...prev, projectType: undefined }))
            }}
            aria-required
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-white text-foreground outline-none focus:ring-2 transition-all appearance-none cursor-pointer ${
              errors.projectType
                ? "border-destructive focus:ring-destructive/30"
                : "border-input focus:border-primary focus:ring-primary/20"
            }`}
          >
            <option value="" disabled>Select project type…</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="mt-1 text-xs text-destructive" role="alert">
              {errors.projectType}
            </p>
          )}
        </div>

        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1.5">
            Short Project Description
          </label>
          <textarea
            id="description"
            rows={compact ? 3 : 4}
            value={form.description}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, description: e.target.value }))
              if (errors.description) setErrors((prev) => ({ ...prev, description: undefined }))
            }}
            placeholder="Briefly describe what you want to build or what help you need…"
            aria-required
            aria-describedby={errors.description ? "description-error" : undefined}
            className={`w-full rounded-xl border px-4 py-2.5 text-sm bg-white text-foreground placeholder-muted-foreground outline-none focus:ring-2 transition-all resize-none ${
              errors.description
                ? "border-destructive focus:ring-destructive/30"
                : "border-input focus:border-primary focus:ring-primary/20"
            }`}
          />
          {errors.description && (
            <p id="description-error" className="mt-1 text-xs text-destructive" role="alert">
              {errors.description}
            </p>
          )}
        </div>
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="w-full mt-5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm text-sm py-6"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Submitting…
          </>
        ) : (
          "Get Free Consultation"
        )}
      </Button>

      {/* Trust signals */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
          We usually respond within 24 hours
        </span>
        <span className="hidden sm:block text-border">|</span>
        <span className="flex items-center gap-1.5">
          <Lock className="w-3.5 h-3.5 flex-shrink-0 text-primary" />
          Your data is safe and confidential
        </span>
      </div>
    </form>
  )
}
