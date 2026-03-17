import { useEffect, useMemo, useState } from "react"
import { scrollToSection } from "../utils/scroll"

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("#inicio")

  const links = useMemo(
    () => [
      { label: "Inicio", href: "#inicio" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Projetos", href: "#projetos" },
      { label: "Skills", href: "#skills" },
      { label: "Contato", href: "#contato" },
    ],
    []
  )

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)

      let current = links[0].href

      for (const link of links) {
        const section = document.getElementById(link.href.replace("#", ""))
        if (!section) continue

        const top = section.getBoundingClientRect().top
        if (top <= 180) {
          current = link.href
        }
      }

      setActiveSection(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [links])

  const handleNavigate = (href: string) => {
    scrollToSection(href)
    setOpen(false)
  }

  return (
    <header
      className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled ? "bg-gray-950/80 backdrop-blur border-b border-white/10" : "bg-transparent"}
      `}
      role="banner"
      aria-label="Navegacao da landing page"
    >
      <div className="w-full pl-7 pr-12 md:pl-40 md:pr-20 h-16 flex items-center justify-between">
        <button
          type="button"
          onClick={() => handleNavigate("#inicio")}
          className="font-bold text-cyan-400 tracking-wide"
        >
          Leonardo.dev
        </button>

        <nav className="hidden md:flex gap-8" aria-label="Navegacao principal">
          {links.map((link) => {
            const isActive = activeSection === link.href

            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigate(link.href)}
                className={`
                  relative transition-all duration-200
                  ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"}
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 animate-fadeIn" />
                )}
              </button>
            )
          })}
        </nav>

        <button
          type="button"
          className="md:hidden text-2xl hover:text-cyan-400 transition p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "X" : "?"}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-72" : "max-h-0"}
        `}
        role="navigation"
        aria-label="Menu movel"
      >
        <div className="p-4 bg-gray-900/90 backdrop-blur flex flex-col gap-4 border-b border-white/10">
          {links.map((link) => {
            const isActive = activeSection === link.href

            return (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavigate(link.href)}
                className={`
                  py-2 transition text-left rounded px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                  ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"}
                `}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </button>
            )
          })}
        </div>
      </div>
    </header>
  )
}
