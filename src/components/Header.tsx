import { useEffect, useMemo, useState } from "react"
import { Link, useLocation } from "react-router-dom"

export function Header() {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    const links = useMemo (() => [
        { label: "Home", href: "/" },
        { label: "Sobre", href: "/sobre" },
        { label: "Experiência", href: "/experiencia" },
        { label: "Projetos", href: "/projetos" },
        { label: "Skills", href: "/skills" },
        { label: "Contato", href: "/contato" },
    ], [])

    // efeito ao rolar a página
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const isActive = (href: string) => {
        return location.pathname === href
    }


    return (
        <header
            className={`
        fixed w-full z-50 transition-all duration-300
        ${scrolled
                    ? "bg-gray-950/80 backdrop-blur border-b border-white/10"
                    : "bg-transparent"
                }
      `}
            role="banner"
            aria-label="Navegação do portfólio"
        >
            <div className="w-full pl-7 pr-12 md:pl-40 md:pr-20 h-16 flex items-center justify-between">


                {/* LOGO */}
                <h1 className="font-bold text-cyan-400 tracking-wide">
                    Leonardo.dev
                </h1>


                {/* DESKTOP */}
                <nav className="hidden md:flex gap-8">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            to={l.href}
                            className={`
                                    relative transition-all duration-200
                                    ${isActive(l.href)
                                    ? "text-cyan-400"
                                    : "text-gray-400 hover:text-white"}
                                `}
                        >
                            {l.label}

                            {isActive(l.href) && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 animate-fadeIn" />
                            )}
                        </Link>

                    ))}
                </nav>

                {/* BOTÃO MOBILE */}
                <button
                    className="md:hidden text-2xl hover:text-cyan-400 transition p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Fechar menu" : "Abrir menu"}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* MENU MOBILE */}
            <div
                id="mobile-menu"
                className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-72" : "max-h-0"}
        `}
                role="navigation"
                aria-label="Menu móvel"
            >
                <div className="p-4 bg-gray-900/90 backdrop-blur flex flex-col gap-4 border-b border-white/10">
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            to={l.href}
                            onClick={() => setOpen(false)}
                            className={`
                                    py-2 transition text-left rounded px-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400
                                    ${isActive(l.href)
                                    ? "text-cyan-400"
                                    : "text-gray-400 hover:text-white"}
                                `}
                            aria-current={isActive(l.href) ? "page" : undefined}
                        >
                            {l.label}
                        </Link>

                    ))}
                </div>
            </div>
        </header>
    )
}
