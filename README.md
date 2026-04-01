# Portfólio - Elias Araujo

Portfólio pessoal construído com React + Vite + Tailwind CSS, com foco em performance, acessibilidade e boa indexação para recrutadores, crawlers e ATS.

## Stack

- React 19
- Vite 8
- Tailwind CSS
- ESLint

## SEO e Indexação

O projeto foi configurado para melhorar descoberta e leitura por robôs que não executam JavaScript:

- metadados de SEO no HTML base
- Open Graph e Twitter Cards
- JSON-LD com schema Person
- fallback em `noscript`
- prerender estático no build de produção

Com isso, o arquivo final `dist/index.html` já sai com o conteúdo do app renderizado dentro de `#root`.

## Scripts

- `npm run dev`: ambiente local com HMR
- `npm run build`: build completo (cliente + SSR + prerender)
- `npm run build:client`: build do bundle cliente
- `npm run build:ssr`: build SSR para geração de HTML estático
- `npm run prerender`: injeta o HTML renderizado em `dist/index.html`
- `npm run preview`: sobe preview local da pasta `dist`
- `npm run lint`: executa lint do projeto

## Como funciona o prerender

1. `vite build` gera os assets do cliente.
2. `vite build --ssr src/entry-server.jsx --outDir dist/server` gera o bundle SSR.
3. `scripts/prerender.mjs` importa `dist/server/entry-server.js`, renderiza o app para string e substitui o conteúdo de `#root` em `dist/index.html`.
4. No cliente, `src/main.jsx` usa `hydrateRoot` quando já existe HTML, preservando interatividade sem re-render completo.

## Estrutura relevante

- `src/App.jsx`: layout e conteúdo do portfólio
- `src/main.jsx`: bootstrap com hidratação
- `src/entry-server.jsx`: entry SSR para renderToString
- `scripts/prerender.mjs`: script de prerender
- `index.html`: metadados e fallback sem JavaScript

## Execução local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```
