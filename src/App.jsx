import { useEffect } from 'react'

const experience = [
  {
    period: '2024 — Atual',
    title: 'Front-end Developer · Studio Aurora',
    description:
      'Construção de interfaces acessíveis com foco em performance e arquitetura de componentes reutilizáveis.',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    period: '2022 — 2024',
    title: 'UI Developer · Freelance',
    description:
      'Criação de landing pages e dashboards para produtos digitais, priorizando UX e animações sutis.',
    tech: ['React', 'Framer Motion', 'Figma'],
  },
]

const projects = [
  {
    name: 'Pulse Analytics',
    summary:
      'Painel de métricas para equipes de marketing com visualização de funil e relatórios automatizados.',
    href: '#',
  },
  {
    name: 'Voyage Booking',
    summary:
      'Experiência de reserva para mobile-first com foco em conversão e fluxo simplificado.',
    href: '#',
  },
  {
    name: 'Nexa Design System',
    summary:
      'Biblioteca de componentes documentada para padronizar interfaces entre múltiplos produtos.',
    href: '#',
  },
]

const socials = [
  {
    name: 'GitHub',
    href: 'https://github.com/eliasaraujo-dev/',
    icon: (
      <>
        <path d="M9 19c-5 1.5-5-2.5-7-3" />
        <path d="M15 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/eliasaraujx/',
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/eliasaraujo.dev',
    icon: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37a4 4 0 1 1-4.63-4.63A4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
  {
    name: 'E-mail',
    href: 'mailto:eliasaraujx@gmail.com',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 5L2 7" />
      </>
    ),
  },
]

function App() {
  useEffect(() => {
    const setMousePosition = (x, y) => {
      document.documentElement.style.setProperty('--mouse-x', `${x}px`)
      document.documentElement.style.setProperty('--mouse-y', `${y}px`)
    }

    const handleMouseMove = (event) => {
      setMousePosition(event.clientX, event.clientY)
    }

    setMousePosition(window.innerWidth / 2, window.innerHeight / 2)
    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 py-12 lg:grid lg:grid-cols-[1fr_1.2fr] lg:gap-16 lg:px-16 lg:py-0">
      <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Elias Araujo
          </h1>
          <h2 className="mt-3 text-lg font-medium text-slate-200">
            Engenheiro Fullstack
          </h2>
          <p className="mt-5 max-w-sm leading-relaxed text-slate-400">
            Crio produtos acessíveis, rápidos e focados em experiência do usuário na web.
          </p>

          <nav className="mt-12 hidden space-y-4 lg:block" aria-label="Seções">
            <a href="#about" className="group flex items-center gap-4 uppercase tracking-[0.18em] text-xs font-semibold text-slate-500 hover:text-teal-300">
              <span className="h-px w-8 bg-slate-600 transition-all duration-200 group-hover:w-12 group-hover:bg-teal-300" />
              <span>Sobre</span>
            </a>
            <a href="#experience" className="group flex items-center gap-4 uppercase tracking-[0.18em] text-xs font-semibold text-slate-500 hover:text-teal-300">
              <span className="h-px w-8 bg-slate-600 transition-all duration-200 group-hover:w-12 group-hover:bg-teal-300" />
              <span>Experiência</span>
            </a>
            <a href="#projects" className="group flex items-center gap-4 uppercase tracking-[0.18em] text-xs font-semibold text-slate-500 hover:text-teal-300">
              <span className="h-px w-8 bg-slate-600 transition-all duration-200 group-hover:w-12 group-hover:bg-teal-300" />
              <span>Projetos</span>
            </a>
            <a href="#education" className="group flex items-center gap-4 uppercase tracking-[0.18em] text-xs font-semibold text-slate-500 hover:text-teal-300">
              <span className="h-px w-8 bg-slate-600 transition-all duration-200 group-hover:w-12 group-hover:bg-teal-300" />
              <span>Educação</span>
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col items-start gap-5 pb-2 lg:mt-0">
          <p className="flex items-center gap-2 text-sm text-slate-500">
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4 stroke-current"
              fill="none"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            RJ, Brazil
          </p>

          <div className="flex items-center gap-4 text-slate-500">
            {socials.map((social) => (
              <a
                key={social.name}
                className="inline-flex p-0.5 transition duration-200 hover:text-teal-300"
                href={social.href}
                aria-label={social.name}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 stroke-current"
                  fill="none"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  role="img"
                  aria-hidden="true"
                >
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </header>

      <section className="space-y-16 py-12 lg:py-24">
        <article id="about" className="space-y-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 lg:hidden">
            Sobre
          </h3>
          <p className="leading-relaxed text-slate-400">
            Sou desenvolvedor front-end com foco em interfaces limpas, acessíveis e performáticas. Gosto de transformar ideias complexas em experiências simples, mantendo atenção em tipografia, espaçamento e microinterações.
          </p>
          <p className="leading-relaxed text-slate-400">
            Atualmente trabalho com React, Tailwind CSS e TypeScript, colaborando com times de produto e design para lançar funcionalidades de alto impacto.
          </p>
        </article>

        <article id="experience" className="space-y-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 lg:hidden">
            Experiência
          </h3>
          <div className="space-y-4">
            {experience.map((job) => (
              <div
                key={job.title}
                className="rounded-lg border border-transparent bg-transparent p-5 transition hover:border-teal-300/60 hover:bg-slate-900/90 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.2)]"
              >
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{job.period}</p>
                <h4 className="mt-2 text-base font-semibold text-slate-100">{job.title}</h4>
                <p className="mt-2 leading-relaxed text-slate-400">{job.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {job.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-teal-300/15 px-3 py-1 text-xs font-medium text-teal-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://docs.google.com/document/d/1mql7ztFMyHl7NCDIoo-zC0oi6QXmZPFyF7ME7Pr_YUY/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-teal-200"
          >
            Ver currículo completo
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </article>

        <article id="projects" className="space-y-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 lg:hidden">
            Projetos
          </h3>
          <div className="space-y-4">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.href}
                className="block rounded-lg border border-transparent bg-transparent p-5 transition hover:border-teal-300/60 hover:bg-slate-900/90 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.2)]"
              >
                <h4 className="text-base font-semibold text-slate-100">{project.name}</h4>
                <p className="mt-2 leading-relaxed text-slate-400">{project.summary}</p>
              </a>
            ))}
          </div>
        </article>

        <article id="education" className="space-y-5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-200 lg:hidden">
            Educação
          </h3>
          <div className="rounded-lg border border-transparent bg-transparent p-5 transition hover:border-teal-300/60 hover:bg-slate-900/90 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.2)]">
            <p className="text-xs uppercase tracking-[0.14em] text-slate-500">2023 — Atualmente</p>
            <h4 className="mt-2 text-base font-semibold text-slate-100">Tecnólogo em Análise e Desenvolvimento de Sistemas</h4>
            <p className="mt-2 leading-relaxed text-slate-400">Formação com foco em arquitetura de software, engenharia de requisitos e desenvolvimento de aplicações web escaláveis.</p>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
