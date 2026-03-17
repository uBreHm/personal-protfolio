import { Contact } from "../../../components/Contatc"
import { Experiences } from "../../../components/Experience"
import { Hero } from "../../../components/Hero"
import { Projects } from "../../../components/Projects"
import { Skills } from "../../../components/Skills"

export function Home() {
  return (
    <>
      <Hero />
      <Experiences />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}
