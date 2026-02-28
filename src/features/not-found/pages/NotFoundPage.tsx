import { Link } from "react-router-dom"

export function NotFoundPage() {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center px-6 py-20"
      aria-labelledby="not-found-title"
    >
      <div className="w-full max-w-xl text-center">
        <p className="text-cyan-400 font-semibold mb-2">404</p>
        <h1 id="not-found-title" className="text-4xl md:text-5xl font-bold mb-4">
          Página não encontrada
        </h1>
        <p className="text-gray-400 mb-8">
          O caminho acessado não existe. Volte para a página inicial.
        </p>

        <Link
          to="/"
          className="
            inline-block px-6 py-3
            bg-cyan-500 text-black font-semibold rounded-lg
            hover:bg-cyan-400 transition-all
          "
        >
          Ir para Home
        </Link>
      </div>
    </section>
  )
}
