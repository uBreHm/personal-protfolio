import { Header } from "./components/Header"
import { Hero } from "./components/Hero"

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100">
      <Header />

      <main className="pt-20">
        <Hero />

        <section id="experiencia" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Experiência</h1>
        </section>

        <section id="projetos" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Projetos</h1>
        </section>

        <section id="skills" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Skills</h1>
        </section>

        <section id="contato" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl">Contato</h1>
        </section>
      </main>
    </div>
  )
}
