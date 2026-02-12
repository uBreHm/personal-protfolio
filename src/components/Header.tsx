import { useEffect, useMemo, useState } from "react"

export function Header() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("#sobre")
    const [scrolled, setScrolled] = useState(false)

    const links = useMemo (() => [
        { label: "Sobre", href: "#sobre" },
        { label: "Experiência", href: "#experiencia" },
        { label: "Projetos", href: "#projetos" },
        { label: "Skills", href: "#skills" },
        { label: "Contato", href: "#contato" },
    ], [])

    // efeito ao rolar a página
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    // detectar seção ativa
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`)
                    }
                })
            },
            { threshold: 0.3 }
        )

        links.forEach((l) => {
            const el = document.querySelector(l.href)
            if (el) observer.observe(el)
        })

        return () => observer.disconnect()
    }, [links])

    const handleScroll = (href: string) => {
        const id = href.replace("#", "")
        const element = document.getElementById(id)

        if (!element) return

        setActive(href)

        const headerOffset = 80
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        })

        setOpen(false)
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
        >
            <div className="w-full pl-7 pr-12 md:pl-40 md:pr-20 h-16 flex items-center justify-between">


                {/* LOGO */}
                <h1 className="font-bold text-cyan-400 tracking-wide">
                    Leonardo.dev
                </h1>


                {/* DESKTOP */}
                <nav className="hidden md:flex gap-8">
                    {links.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => handleScroll(l.href)}
                            className={`
                                    relative transition-all duration-200
                                    ${active === l.href
                                    ? "text-cyan-400"
                                    : "text-gray-400 hover:text-white"}
                                `}
                        >
                            {l.label}

                            {active === l.href && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-400 animate-fadeIn" />
                            )}
                        </button>

                    ))}
                </nav>

                {/* BOTÃO MOBILE */}
                <button
                    className="md:hidden text-2xl hover:text-cyan-400 transition"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* MENU MOBILE */}
            <div
                className={`
          md:hidden overflow-hidden transition-all duration-300
          ${open ? "max-h-72" : "max-h-0"}
        `}
            >
                <div className="p-4 bg-gray-900/90 backdrop-blur flex flex-col gap-4 border-b border-white/10">
                    {links.map((l) => (
                        <button
                            key={l.href}
                            onClick={() => handleScroll(l.href)}
                            className={`
                                    py-2 transition text-left
                                    ${active === l.href
                                    ? "text-cyan-400"
                                    : "text-gray-400"}
                                `}
                        >
                            {l.label}
                        </button>

                    ))}
                </div>
            </div>
        </header>
    )
}
