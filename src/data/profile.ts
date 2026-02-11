export const profile = {
  name: "Leonardo Brehm",
  role: "Desenvolvedor Full Stack",

  about: `
  Sou desenvolvedor full stack com experiência prática em React, React Native e .NET,
  atuando no desenvolvimento de aplicações reais desde a concepção até o deploy.

  No projeto Ema Analytics fui responsável por grande parte das telas do aplicativo,
  consumo de APIs, implementação de interfaces e experiência do usuário,
  além de atuar como Product Owner apoiando backlog e priorização.
  `,

  skills: [
    "React",
    "React Native",
    "TypeScript",
    ".NET",
    "PostgreSQL",
    "D3",
    "n8n",
    "Git",
    "Scrum"
  ],

  experiences: [
    {
      title: "Desenvolvedor Full Stack / Product Owner",
      company: "UnescLabs – Projeto Ema Sistemas",
      period: "2025 – Atual",
      items: [
        "Desenvolvimento mobile com React Native e TypeScript",
        "Integração e consumo de APIs",
        "Implementação das principais telas do Ema Analytics",
        "Melhorias de experiência do usuário",
        "Atuação como Product Owner e code reviews"
      ]
    },
    {
      title: "Estagiário de Desenvolvimento",
      company: "UnescLabs – DEPs",
      period: "2022 – 2023",
      items: [
        "Formação em C#, .NET e Angular",
        "Desenvolvimento de Web APIs",
        "Modelagem com Entity Framework",
        "Integração front-end e back-end"
      ]
    }
  ],

  projects: [
    {
      title: "Ema Analytics",
      desc: "Aplicativo mobile com consumo de APIs, construção de interfaces e gráficos com D3.",
      stack: ["React Native", "TypeScript", "Axios"]
    },
    {
      title: "Sistema de Reservas",
      desc: "Backend em .NET com PostgreSQL para gestão de reservas de hotel.",
      stack: [".NET", "PostgreSQL", "React"]
    }
  ]
}
