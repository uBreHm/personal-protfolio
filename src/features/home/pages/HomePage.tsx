import { Link } from "react-router-dom"
import { profile } from "../../../data/profile"
import { Avatar } from "../../../components/Avatar"
import avatarImg from "../../../assets/avatar.jpg"

const navSections = [
  {
    title: "Sobre Mim",
    to: "/sobre",
    description: "Conheça mais sobre mim e meu background profissional",
  },
  {
    title: "Experiências",
    to: "/experiencia",
    description: "Veja minhas experiências profissionais e carreira",
  },
  {
    title: "Projetos",
    to: "/projetos",
    description: "Explore os projetos que criei e trabalhos realizados",
  },
  {
    title: "Skills",
    to: "/skills",
    description: "Conheça minhas habilidades técnicas e competências",
  },
  {
    title: "Contato",
    to: "/contato",
    description: "Entre em contato comigo para oportunidades",
  },
] as const

export function Home() {
  const firstName = profile.name.split(" ")[0]
  const lastName = profile.name.split(" ").slice(1).join(" ")

  return (
    <main
      className="min-h-screen bg-[#0A0A0A] text-gray-100 flex items-center justify-center px-6"
      aria-labelledby="home-heading"
    >
      <div className="w-full max-w-5xl">
        <section
          className="flex flex-col md:flex-row items-center gap-10 mb-16"
          aria-label="Apresentação"
        >
          <div className="flex-shrink-0">
            <Avatar
              src={avatarImg}
              alt={`Foto de ${profile.name}`}
              name={profile.name}
              size="lg"
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <span
              className="
              text-cyan-400
              text-sm
              tracking-widest
              block mb-4
              font-medium
            "
            >
              {profile.role.toUpperCase()}
            </span>

            <h1
              id="home-heading"
              className="
              text-4xl md:text-6xl lg:text-7xl
              font-bold
              leading-tight
              mb-6
            "
            >
              {firstName}{" "}
              <span
                className="
                text-gray-400
                font-semibold
              "
              >
                {lastName}
              </span>
            </h1>

            <p
              className="
              text-gray-400
              max-w-2xl
              leading-relaxed
              whitespace-pre-line
              mb-8
              text-base md:text-lg
            "
            >
              {profile.about.trim()}
            </p>

            <div
              className="
              flex flex-wrap
              gap-4
              justify-center md:justify-start
              mb-10
            "
            >
              <Link
                to="/sobre"
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
                Explore Meu Perfil
              </Link>
              <Link
                to="/contato"
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
              </Link>
            </div>
          </div>
        </section>

        <section
          className="mt-20 pt-20 border-t border-white/10"
          aria-labelledby="home-sections-heading"
        >
          <h2
            id="home-sections-heading"
            className="text-2xl md:text-3xl font-bold mb-10"
          >
            Navegue por seção:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {navSections.map((section) => (
              <Link
                key={section.to}
                to={section.to}
                className="
                  p-6 border border-cyan-500/30 rounded-lg
                  hover:border-cyan-500 hover:bg-cyan-500/5
                  transition-all group
                "
              >
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                  {section.title}
                </h3>
                <p className="text-gray-400 text-sm">{section.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
