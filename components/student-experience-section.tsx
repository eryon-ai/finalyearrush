import { Clock, BrainCog, HeartHandshake, Frown, AlertTriangle, FileX } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Running out of time",
    description: "The deadline is tomorrow and you still have no idea where to start.",
    color: "text-[#F2613F]",
    bg: "bg-[#FEE3D4]",
  },
  {
    icon: BrainCog,
    title: "No clue what to build",
    description: "Everyone around you seems to have their project figured out — but you don't.",
    color: "text-[#0FA3B1]",
    bg: "bg-[#D4F1F4]",
  },
  {
    icon: FileX,
    title: "Documentation overwhelm",
    description: "Synopsis? Report? Abstract? The paperwork feels endless and confusing.",
    color: "text-[#9A6F00]",
    bg: "bg-[#FEF3CD]",
  },
  {
    icon: Frown,
    title: "Fear of the viva",
    description: "You built something but you're terrified of explaining it to your examiner.",
    color: "text-[#F2613F]",
    bg: "bg-[#FEE3D4]",
  },
  {
    icon: AlertTriangle,
    title: "Code that doesn't work",
    description: "Your implementation is half-done and Google isn't helping anymore.",
    color: "text-[#0FA3B1]",
    bg: "bg-[#D4F1F4]",
  },
  {
    icon: HeartHandshake,
    title: "No one to guide you",
    description: "Your supervisor is busy and your friends are as lost as you are.",
    color: "text-[#9A6F00]",
    bg: "bg-[#FEF3CD]",
  },
]

export function StudentExperienceSection() {
  return (
    <section className="py-20 md:py-28 bg-white" aria-labelledby="student-exp-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-bold text-sm tracking-widest uppercase mb-3" style={{ color: "#F2613F" }}>Sound Familiar?</p>
          <h2
            id="student-exp-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground text-balance mb-4"
            style={{ fontFamily: "var(--font-plus-jakarta)" }}
          >
            Final Year Rush —{" "}
            <span className="gradient-text">Without the Stress</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            We know how overwhelming final year feels. Every student goes through it — but you don&apos;t have to go through it alone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((problem) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.title}
                className="group rounded-2xl border border-border bg-background p-6 hover:shadow-md transition-all duration-200 card-glow"
                style={{ borderColor: "rgba(242,97,63,0.1)" }}
              >
                <div className={`w-10 h-10 rounded-xl ${problem.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-5 h-5 ${problem.color}`} />
                </div>
                <h3 className="font-semibold text-foreground mb-2" style={{ fontFamily: "var(--font-plus-jakarta)" }}>{problem.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
              </div>
            )
          })}
        </div>

        <div
          className="mt-14 rounded-2xl p-8 text-center"
          style={{ background: "linear-gradient(135deg, #FEE3D4 0%, #FEF3CD 100%)", border: "1px solid rgba(242,97,63,0.2)" }}
        >
          <p className="text-lg font-bold text-foreground" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Eryon AI was built by people who remember exactly how it felt. 🎓
          </p>
          <p className="text-muted-foreground mt-2 text-sm max-w-xl mx-auto">
            That&apos;s why we offer end-to-end support — from your very first idea all the way to your final submission.
          </p>
        </div>
      </div>
    </section>
  )
}
