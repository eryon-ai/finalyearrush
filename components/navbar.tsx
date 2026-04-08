"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Why Us", href: "#why-us" },
  { label: "Eryon AI", href: "#eryon-ai" },
  { label: "Contact", href: "#contact" },
]

interface NavbarProps {
  onStartProject: () => void
}

export function Navbar({ onStartProject }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/92 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group" aria-label="FinalYearRush Home">
          <Image 
            src="/logo.png" 
            alt="FinalYearRush Logo" 
            width={160} 
            height={40} 
            className="h-10 w-auto" 
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  link.label === "Eryon AI"
                    ? "text-[#F2613F] font-semibold hover:text-[#C44A2B]"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button
            onClick={onStartProject}
            className="text-sm px-5 font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #F2613F 0%, #F5A623 100%)",
              color: "white",
              border: "none",
            }}
          >
            Start Your Project
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-border px-4 pb-5 pt-2 animate-fade-in">
          <ul className="flex flex-col gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "block py-2 px-3 rounded-md text-sm font-medium transition-colors",
                    link.label === "Eryon AI"
                      ? "text-[#F2613F] font-semibold hover:bg-[#FEE3D4]"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => { setMenuOpen(false); onStartProject() }}
            className="w-full mt-4 font-semibold"
            style={{
              background: "linear-gradient(135deg, #F2613F 0%, #F5A623 100%)",
              color: "white",
              border: "none",
            }}
          >
            Start Your Project
          </Button>
        </div>
      )}
    </header>
  )
}
