import { Github, Linkedin } from "lucide-react"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="
        border-t border-white/10
        mt-20
      "
    >
      <div
        className="
          max-w-5xl
          mx-auto
          px-6 md:px-10
          py-8
          flex flex-col md:flex-row
          items-center
          justify-between
          gap-6
        "
      >
        {/* TEXTO */}
        <div className="text-gray-500 text-sm">
          © {year} Leonardo Brehm. Todos os direitos reservados.
        </div>

        {/* LINKS */}
        <div className="flex items-center gap-5">

          {/* GITHUB */}
          <a
            href="https://github.com/uBreHm"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-cyan-400
              transition
              hover:scale-110
            "
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/in/leonardo-barbosa-brehm-757877247/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-gray-400
              hover:text-cyan-400
              transition
              hover:scale-110
            "
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>

        </div>
      </div>
    </footer>
  )
}
