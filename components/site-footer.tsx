import Link from "next/link"
import { Mail, MessageCircle, ExternalLink } from "lucide-react"

export function SiteFooter() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #2D1B0E 0%, #1a1a2e 100%)" }} className="text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="font-extrabold text-xl tracking-tight"
                style={{
                  fontFamily: "var(--font-plus-jakarta)",
                  background: "linear-gradient(135deg, #F2613F 0%, #F5A623 60%, #0FA3B1 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                FinalYear<span style={{ WebkitTextFillColor: "rgba(255,255,255,0.85)", fontStyle: "italic" }}>Rush</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Helping final-year students build, document, and deliver their academic projects with confidence.
            </p>
            <p className="text-xs mt-3 text-white/40">Powered by Eryon AI · India</p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <p className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Quick Links</p>
            <ul className="flex flex-col gap-2 text-sm" role="list">
              {[
                { label: "Services", href: "#services" },
                { label: "How It Works", href: "#process" },
                { label: "Why Us", href: "#why-us" },
                { label: "Eryon AI", href: "#eryon-ai" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Eryon AI + Contact */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 tracking-wide uppercase">Eryon AI</p>
            <div className="flex flex-col gap-2 mb-6">
              <a
                href="https://eryonai.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Visit eryonai.com
              </a>

              <a
                href="mailto:connect@eryonai.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" /> connect@eryonai.com
              </a>
            </div>

            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#F2613F]/80 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="mailto:connect@eryonai.com"
                aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0FA3B1]/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <span>&copy; {new Date().getFullYear()} FinalYearRush by Eryon AI. All rights reserved.</span>
          <span>Made with ❤️ for students across India</span>
        </div>
      </div>
    </footer>
  )
}
