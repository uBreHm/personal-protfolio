# 🚀 Portfólio Leonardo Brehm

Portfólio pessoal moderno e responsivo de um desenvolvedor full stack. Construído com **React**, **TypeScript**, **Tailwind CSS** e **Vite**.

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com tema dark e cores cyan/azul
- ⚡ **Performance**: Otimizado para web com Vite
- 📱 **Responsivo**: Mobile-first design, funciona em todos os dispositivos
- ♿ **Acessível**: Totalmente acessível (WCAG 2.1 AA) com ARIA labels
- 🎯 **SEO Otimizado**: Meta tags, Open Graph e Twitter Cards
- 🚀 **Animações Suaves**: Transições e animações fluidas
- 📧 **Formulário de Contato**: Integrado com EmailJS
- 🎭 **Customizações**: Cursor customizado, scrollbar estilizada

## 🛠️ Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool rápido
- **Lucide React** - Ícones
- **EmailJS** - Envio de emails
- **ESLint** - Code quality

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/uBreHm/personal-protfolio.git

# Entre no diretório
cd personal-protfolio

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### Variáveis de Ambiente

Crie um arquivo `.env.local` com:

```
VITE_EMAILJS_SERVICE_ID=seu_service_id
VITE_EMAILJS_TEMPLATE_ID=seu_template_id
VITE_EMAILJS_PUBLIC_KEY=sua_public_key
```

[Obtenha as chaves do EmailJS aqui](https://www.emailjs.com/)

## 🚀 Como Executar

### Desenvolvimento

```bash
npm run dev
```

O servidor iniciará em `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Preview da Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Avatar.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── data/               # Dados estáticos
│   └── profile.ts
├── utils/              # Funções utilitárias
│   └── scroll.ts
├── App.tsx             # Componente principal
├── App.css             # Estilos da app
├── index.css           # Estilos globais
└── main.tsx            # Entrada da aplicação
```

## 🎨 Customização

### Editar Dados

Edite `src/data/profile.ts` para atualizar:
- Nome e cargo
- Sobre mim
- Skills
- Experiências
- Projetos

### Cores

As cores principais estão definidas em `tailwind.config.js` e usar Tailwind utilities.

Cor principal: `#06b6d4` (Cyan)

### Fontes

Personalize a fonte em `src/index.css`

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Acessibilidade

- ✅ Semântica HTML correta
- ✅ ARIA labels em elementos interativos
- ✅ Contraste de cor suficiente (WCAG AA)
- ✅ Navegação por teclado
- ✅ Focus visible para acessibilidade
- ✅ Alt text em imagens

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Faça upload da pasta 'dist' para o Netlify
```

### GitHub Pages

Configure em `vite.config.ts`:
```ts
export default defineConfig({
  base: '/personal-protfolio/',
  // ...
})
```

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint (FCP): < 1.5s
- Largest Contentful Paint (LCP): < 2.5s
- Cumulative Layout Shift (CLS): < 0.1

## 🐛 Troubleshooting

### Formulário de contato não envia

1. Verifique as variáveis de ambiente
2. Confirme que o service_id, template_id e public_key estão corretos
3. Verificar console do navegador para erros

### Smooth scroll não funciona

Adicione `scroll-behavior: smooth;` ao `html` em `src/index.css` (já implementado)

## 📄 Licença

Este projeto é de código aberto e disponível sob a licença MIT.

## 👨‍💻 Autor

**Leonardo Brehm**
- GitHub: [@uBreHm](https://github.com/uBreHm)
- LinkedIn: [leonardo-barbosa-brehm](https://www.linkedin.com/in/leonardo-barbosa-brehm-757877247/)

## 🙏 Créditos

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Lucide Icons](https://lucide.dev/)
- [EmailJS](https://www.emailjs.com/)
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# environment variables
.env
.env.local
.env.*.local

# vite env
.env.development.local
.env.production.local

