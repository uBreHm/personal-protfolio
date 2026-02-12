import { useEffect, useState } from "react"
import { profile } from "../data/profile"

export function Experiences() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true)
    })

    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section
      id="experiencia"
      className="

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
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Experiências
        </h2>

        <div className="space-y-10">
          {profile.experiences.map((exp, index) => (
            <div
              key={index}
              className="
                border-l-2 border-cyan-500 pl-6
                relative
              "
            >
              {/* BOLINHA DA TIMELINE */}
              <div className="
                absolute -left-[9px] top-1
                w-4 h-4 bg-cyan-500 rounded-full
              " />

              <h3 className="text-xl font-semibold text-white">
                {exp.title}
              </h3>

              <p className="text-cyan-400 text-sm mb-1">
                {exp.company}
              </p>

              <span className="text-gray-500 text-sm block mb-3">
                {exp.period}
              </span>

              <ul className="space-y-2">
                {exp.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-400 flex gap-2"
                  >
                    <span className="text-cyan-500">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
