import { Link } from "react-router-dom"
import { profile } from "../data/profile"
import { Avatar } from "../components/Avatar"
import avatarImg from "../assets/avatar.jpg"

export function Home() {
  const firstName = profile.name.split(" ")[0]
  const lastName = profile.name.split(" ").slice(1).join(" ")

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
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

            {/* CTA BUTTONS */}
            <div className="
              flex flex-wrap
              gap-4
              justify-center md:justify-start
              mb-10
            ">
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
        </div>

        {/* CARDS COM LINKS PARA SEÇÕES */}
        <div className="mt-20 pt-20 border-t border-white/10">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Navegue por seção:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/sobre"
              className="
                p-6 border border-cyan-500/30 rounded-lg
                hover:border-cyan-500 hover:bg-cyan-500/5
                transition-all group
              "
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                Sobre Mim
              </h3>
              <p className="text-gray-400 text-sm">
                Conheça mais sobre mim e meu background profissional
              </p>
            </Link>

            <Link
              to="/experiencia"
              className="
                p-6 border border-cyan-500/30 rounded-lg
                hover:border-cyan-500 hover:bg-cyan-500/5
                transition-all group
              "
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                Experiências
              </h3>
              <p className="text-gray-400 text-sm">
                Veja minhas experiências profissionais e carreiras
              </p>
            </Link>

            <Link
              to="/projetos"
              className="
                p-6 border border-cyan-500/30 rounded-lg
                hover:border-cyan-500 hover:bg-cyan-500/5
                transition-all group
              "
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                Projetos
              </h3>
              <p className="text-gray-400 text-sm">
                Explore os projetos que criei e trabalhos realizados
              </p>
            </Link>

            <Link
              to="/skills"
              className="
                p-6 border border-cyan-500/30 rounded-lg
                hover:border-cyan-500 hover:bg-cyan-500/5
                transition-all group
              "
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                Skills
              </h3>
              <p className="text-gray-400 text-sm">
                Conheça minhas habilidades técnicas e competências
              </p>
            </Link>

            <Link
              to="/contato"
              className="
                p-6 border border-cyan-500/30 rounded-lg
                hover:border-cyan-500 hover:bg-cyan-500/5
                transition-all group
              "
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan-400 transition">
                Contato
              </h3>
              <p className="text-gray-400 text-sm">
                Entre em contato comigo para oportunidades
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
