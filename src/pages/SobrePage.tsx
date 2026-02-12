import { useEffect, useState } from "react"
import { profile } from "../data/profile"
import { Avatar } from "../components/Avatar"
import avatarImg from "../assets/avatar.jpg"
import { scrollToSection } from "../utils/scroll"

export function SobrePage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true)
    })

    return () => cancelAnimationFrame(id)
  }, [])

  const firstName = profile.name.split(" ")[0]
  const lastName = profile.name.split(" ").slice(1).join(" ")

  return (
    <section
      className="
        min-h-[90vh]
        flex items-center
        justify-center
        px-6 md:px-10 py-20
      "
      aria-label="Seção sobre mim"
    >
      <div
        className={`
          w-full max-w-5xl
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <div className="flex flex-col md:flex-row items-center gap-10">

          {/* AVATAR */}
          <div className="flex-shrink-0">
            <Avatar
              src={avatarImg}
              name={profile.name}
              size="lg"
            />
          </div>

          {/* TEXTO */}
          <div className="flex-1 text-center md:text-left">

            {/* ROLE */}
            <span className="
              text-cyan-400
              text-sm
              tracking-widest
              block mb-4
              font-medium
            ">
              {profile.role.toUpperCase()}
            </span>

            {/* NOME */}
            <h1 className="
              text-4xl md:text-6xl lg:text-7xl
              font-bold
              leading-tight
              mb-6
            ">
              {firstName}{" "}
              <span className="
                text-gray-400
                font-semibold
              ">
                {lastName}
              </span>
            </h1>

            {/* VALUE STATEMENT */}
            <p className="
              text-gray-400
              max-w-2xl
              leading-relaxed
              whitespace-pre-line
              mb-8
              text-base md:text-lg
            ">
              {profile.about.trim()}
            </p>

            {/* CTA */}
            <div className="
              flex flex-wrap
              gap-4
              justify-center md:justify-start
              mb-10
            ">
              <button
                onClick={() => scrollToSection("experiencia")}
                className="
                  px-6 py-3
                  bg-cyan-500
                  text-black
                  font-semibold
                  rounded-lg
                  hover:bg-cyan-400
                  transition-all
                "
              >
                Ver Experiências
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="
                  px-6 py-3
                  border border-cyan-500
                  text-cyan-400
                  font-semibold
                  rounded-lg
                  hover:bg-cyan-500/10
                  transition-all
                "
              >
                Entrar em Contato
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
