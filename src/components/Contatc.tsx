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

        flex items-center
        justify-center
        px-6 md:px-10
      "
      aria-label="Seção de contato"
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
          noValidate
        >

          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm text-gray-400 mb-2 font-medium">
              Nome <span aria-label="obrigatório">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              required
              aria-required="true"
              className="
                w-full px-4 py-3
                bg-gray-900
                border border-gray-800
                rounded-lg
                outline-none
                focus:border-cyan-500
                focus-visible:ring-2
                focus-visible:ring-cyan-500/50
                transition-all
              "
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm text-gray-400 mb-2 font-medium">
              Mensagem <span aria-label="obrigatório">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Sua mensagem"
              required
              aria-required="true"
              rows={5}
              className="
                w-full px-4 py-3
                bg-gray-900
                border border-gray-800
                rounded-lg
                outline-none
                focus:border-cyan-500
                focus-visible:ring-2
                focus-visible:ring-cyan-500/50
                transition-all
                resize-none
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3
              bg-cyan-500
              text-black
              font-semibold
              rounded-lg
              hover:bg-cyan-400
              transition-all
              disabled:opacity-50
              disabled:cursor-not-allowed
              focus-visible:ring-2
              focus-visible:ring-cyan-400
            "
            aria-busy={loading}
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
