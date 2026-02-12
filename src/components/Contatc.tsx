import { useState } from "react"
import emailjs from "@emailjs/browser"

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError(false)

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        PUBLIC_KEY
      )

      setSuccess(true)
      form.reset()
    } catch (err) {
      console.error(err)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contato"
      className="
        min-h-[90vh]
        flex items-center
        justify-center
        px-6 md:px-10
        mb-20
      "
    >
      <div className="w-full max-w-xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Contato
        </h2>

        <p className="text-gray-400 mb-8">
          Entre em contato comigo para oportunidades ou projetos.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            name="name"
            placeholder="Seu nome"
            required
            className="
              w-full px-4 py-3
              bg-gray-900
              border border-gray-800
              rounded-lg
              outline-none
              focus:border-cyan-500
            "
          />

          <input
            name="email"
            type="email"
            placeholder="Seu email"
            required
            className="
              w-full px-4 py-3
              bg-gray-900
              border border-gray-800
              rounded-lg
              outline-none
              focus:border-cyan-500
            "
          />

          <textarea
            name="message"
            placeholder="Sua mensagem"
            required
            rows={5}
            className="
              w-full px-4 py-3
              bg-gray-900
              border border-gray-800
              rounded-lg
              outline-none
              focus:border-cyan-500
            "
          />

          <button
            disabled={loading}
            className="
              w-full py-3
              bg-cyan-500
              text-black
              font-semibold
              rounded-lg
              hover:bg-cyan-400
              transition
              disabled:opacity-50
            "
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>

          {success && (
            <p className="text-green-400">
              Email enviado com sucesso!
            </p>
          )}

          {error && (
            <p className="text-red-400">
              Erro ao enviar email. Tente novamente.
            </p>
          )}

        </form>

      </div>
    </section>
  )
}
