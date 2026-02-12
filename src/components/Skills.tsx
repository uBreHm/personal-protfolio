import { useEffect, useState } from "react"
import { profile } from "../data/profile"

export function Skills() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setVisible(true)
    })

    return () => cancelAnimationFrame(id)
  }, [])


  return (
    <section
      id="skills"
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
          Skills
        </h2>

        {/* GRID DE SKILLS */}
        <div className="flex flex-wrap gap-3">
          {profile.skills.map((skill, index) => (
            <div
              key={index}
              className="
                px-4 py-2
                border border-cyan-500/40
                text-cyan-400
                rounded-lg
                bg-cyan-500/5
                backdrop-blur-sm
                transition-all duration-300
                hover:border-cyan-400
                hover:text-cyan-300
                hover:bg-cyan-500/10
                hover:scale-105
                hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]
                cursor-default
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
