import { BrowserRouter, Routes, Route } from "react-router-dom"
import { RootLayout } from "./layouts/RootLayout"
import { Home } from "./pages/Home"
import { SobrePage } from "./pages/SobrePage"
import { ExperienciaPage } from "./pages/ExperienciaPage"
import { ProjetosPage } from "./pages/ProjetosPage"
import { SkillsPage } from "./pages/SkillsPage"
import { ContatoPage } from "./pages/ContatoPage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/experiencia" element={<ExperienciaPage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contato" element={<ContatoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
