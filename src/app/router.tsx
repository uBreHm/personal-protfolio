import { BrowserRouter, Route, Routes } from "react-router-dom"
import { RootLayout } from "../layouts/RootLayout"
import { Home } from "../features/home/pages/HomePage"
import { SobrePage } from "../features/about/pages/SobrePage"
import { ExperienciaPage } from "../features/experience/pages/ExperienciaPage"
import { ProjetosPage } from "../features/projects/pages/ProjetosPage"
import { SkillsPage } from "../features/skills/pages/SkillsPage"
import { ContactPage } from "../features/contact/pages/ContactPage"
import { NotFoundPage } from "../features/not-found/pages/NotFoundPage"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/experiencia" element={<ExperienciaPage />} />
          <Route path="/projetos" element={<ProjetosPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
