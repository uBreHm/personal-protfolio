import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-100">
      <Header />
      <main 
        className="pt-20 flex flex-col gap-20"
        role="main"
        aria-label="Conteúdo principal do portfólio"
      >
        <Outlet />
      </main>
      <footer 
        className="text-center"
        role="contentinfo"
      >
        <Footer />
      </footer>
    </div>
  )
}
