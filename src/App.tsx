import { Contact } from "./components/Contatc"
import { Experiences } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100">
      <Header />

      <main className="pt-20">
        <Hero />
        <Experiences />
        <Projects />
        <Skills />
        <Contact />
        
      </main>
      <footer className="text-center text-gray-500 py-6">
        <Footer />
      </footer>
    </div>
  )
}
