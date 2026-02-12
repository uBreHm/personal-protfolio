import { useEffect, useState } from "react"
import { profile } from "../data/profile"

export function Projects() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true)
    })

    return () => cancelAnimationFrame(id)
  }, [])
  return (
    <section
      id="projetos"
      className="

        flex items-center
        justify-center
        px-6 md:px-10
      "
      aria-label="Seção de projetos"
    >
      <div
        className={`
          w-full max-w-4xl
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Projetos
        </h2>

        <div className="space-y-10">
          {profile.projects.map((project, index) => (
            <div
              key={index}
              className="
                border-l-2 border-cyan-500 pl-6
                relative
              "
            >
              <div className="
                absolute -left-[9px] top-1
                w-4 h-4 bg-cyan-500 rounded-full
              " />

              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-3">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="
                      text-xs
                      border border-cyan-500/40
                      text-cyan-400
                      px-2 py-1
                      rounded
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    mt-3
                    text-sm
                    text-cyan-400
                    hover:text-cyan-300
                    transition
                  "
                >
                  → Ver projeto
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
