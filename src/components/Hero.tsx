import { useEffect, useState } from "react"
import { profile } from "../data/profile"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <section
      id="sobre"
      className="
        min-h-[90vh]
        flex items-center
        justify-center
        px-6 md:px-10
      "
    >
      <div
        className={`
          w-full max-w-4xl
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* TAG */}
        <span className="text-cyan-400 text-sm tracking-widest block mb-3">
          {profile.role.toUpperCase()}
        </span>

        {/* NOME */}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
          {profile.name.split(" ")[0]}{" "}
          <span className="text-gray-400">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        {/* TEXTO */}
        <p className="
          text-gray-400
          max-w-2xl
          leading-relaxed
          whitespace-pre-line
          mb-8
        ">
          {profile.about.trim()}
        </p>

        {/* BOTÕES */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projetos"
            className="
              px-6 py-3 rounded bg-cyan-500 text-black font-medium
              hover:bg-cyan-400 transition
            "
          >
            Ver projetos
          </a>

          <a
            href="#contato"
            className="
              px-6 py-3 rounded border border-cyan-500 text-cyan-400
              hover:bg-cyan-500/10 transition
            "
          >
            Contato
          </a>
        </div>

        {/* SKILLS */}
        <div className="mt-10 flex flex-wrap gap-2">
          {profile.skills.slice(0, 5).map(skill => (
            <span
              key={skill}
              className="text-xs bg-gray-900 px-3 py-1 rounded text-gray-400"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
