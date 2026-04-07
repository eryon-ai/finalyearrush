import {
  FileText,
  PenLine,
  BookOpen,
  LayoutDashboard,
  Presentation,
  Code2,
  Rocket,
  Mic2,
} from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Documentation",
    description: "Comprehensive technical documentation written to industry standards — clear, structured, and submission-ready.",
    color: "text-[#F2613F]",
    bg: "bg-[#FEE3D4]",
    border: "border-[#F2613F]/20",
    hoverBorder: "hover:border-[#F2613F]/50",
  },
  {
    icon: PenLine,
    title: "Synopsis Writing",
    description: "A compelling synopsis that captures your project's scope, objectives, and methodology in the right format.",
    color: "text-[#0FA3B1]",
    bg: "bg-[#D4F1F4]",
    border: "border-[#0FA3B1]/20",
    hoverBorder: "hover:border-[#0FA3B1]/50",
  },
  {
    icon: BookOpen,
    title: "Project Report",
    description: "Full academic project reports including literature review, methodology, results, and conclusions.",
    color: "text-[#9A6F00]",
    bg: "bg-[#FEF3CD]",
    border: "border-[#F5C046]/20",
    hoverBorder: "hover:border-[#F5C046]/50",
  },
  {
    icon: LayoutDashboard,
    title: "Project Overview",
    description: "Clear project overviews covering architecture, tech stack, features, and deployment strategy.",
    color: "text-[#F2613F]",
    bg: "bg-[#FEE3D4]",
    border: "border-[#F2613F]/20",
    hoverBorder: "hover:border-[#F2613F]/50",
  },
  {
    icon: Presentation,
    title: "PPT Preparation",
    description: "Professionally designed presentations that tell your project story convincingly to any audience.",
    color: "text-[#0FA3B1]",
    bg: "bg-[#D4F1F4]",
    border: "border-[#0FA3B1]/20",
    hoverBorder: "hover:border-[#0FA3B1]/50",
  },
  {
    icon: Code2,
    title: "Code Implementation",
    description: "Clean, scalable, and well-commented code implementations tailored to your project requirements.",
    color: "text-[#9A6F00]",
    bg: "bg-[#FEF3CD]",
    border: "border-[#F5C046]/20",
    hoverBorder: "hover:border-[#F5C046]/50",
  },
  {
    icon: Rocket,
    title: "Deployment Support",
    description: "End-to-end deployment assistance — from hosting setup to live environment configuration.",
    color: "text-[#F2613F]",
    bg: "bg-[#FEE3D4]",
    border: "border-[#F2613F]/20",
    hoverBorder: "hover:border-[#F2613F]/50",
  },
  {
    icon: Mic2,
    title: "Viva Preparation",
    description: "Mock Q&A sessions, examiner-focused prep, and confidence-building guidance before your viva.",
    color: "text-[#0FA3B1]",
    bg: "bg-[#D4F1F4]",
    border: "border-[#0FA3B1]/20",
    hoverBorder: "hover:border-[#0FA3B1]/50",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 bg-background" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: "#F2613F" }}>What We Offer</p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Everything You Need to{" "}
            <span className="gradient-text">Deliver with Confidence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Pick the service you need, or let us handle everything end-to-end. No partial efforts — only complete, polished results.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className={`group rounded-2xl border ${service.border} bg-white p-6 ${service.hoverBorder} hover:shadow-lg transition-all duration-200 cursor-default card-glow`}
              >
                <div className={`w-11 h-11 rounded-xl ${service.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-5 h-5 ${service.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-sm" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{service.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
