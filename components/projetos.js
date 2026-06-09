// ─── Dados ────────────────────────────────────────────────────────────────────
const projetos = [
  {
    nome: 'Ecommerce-Spring-Boot-React',
    desc: 'E-commerce fullstack com autenticação JWT, catálogo com busca e filtro, carrinho persistente, painel admin com dashboard e e-mails transacionais.',
    lang: 'Java',
    langCor: '#b07219',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    stars: 0,
    repo: 'https://github.com/Julio-Lopes/Ecommerce-Spring-Boot-React',
    demo: '',
  },
  {
    nome: 'Pokedex',
    desc: 'Pokédex interativa desenvolvida com React e TypeScript para consulta de informações de Pokémon em tempo real utilizando a PokéAPI.',
    lang: 'React/TypeScript',
    langCor: '#3178c6',
    tags: ['React', 'TypeScript', 'PokéAPI'],
    stars: 0,
    repo: 'https://github.com/Julio-Lopes/Pokedex-React',
    demo: '',
  },
  {
    nome: 'Know-Your-Fan',
    desc: 'Plataforma de análise de fãs de eSports com integração à Twitch, IA (Gemini), OCR e dashboard de insights.',
    lang: 'Python',
    langCor: '#3572A5',
    tags: ['Python', 'Streamlit', 'Gemini', 'PostgreSQL'],
    stars: 0,
    repo: 'https://github.com/Julio-Lopes/Know-Your-Fan',
    demo: '',
  },
  {
    nome: 'Sistema-De-Gestao-Controle-De-Gastos',
    desc: 'Sistema web fullstack para gerenciamento de despesas pessoais e categorização de transações financeiras.',
    lang: 'React/TypeScript',
    langCor: '#3178c6',
    tags: ['React', '.NET', 'MySQL', 'JWT'],
    stars: 0,
    repo: 'https://github.com/Julio-Lopes/Sistema-De-Gestao-Controle-De-Gastos',
    demo: '',
  },
]

// ─── Render ───────────────────────────────────────────────────────────────────
function renderTag(tag) {
  return `<span class="proj__tag">${tag}</span>`
}

function renderProjeto(proj) {
  const demoBtn = proj.demo
    ? `<a class="proj__link proj__link--demo" href="${proj.demo}" target="_blank" rel="noopener">
         <i class="ti ti-external-link" aria-hidden="true"></i>demo
       </a>`
    : ''

  return `
    <article class="proj">
      <div class="proj__top">
        <a class="proj__name" href="${proj.repo}" target="_blank" rel="noopener">
          <i class="ti ti-brand-github" aria-hidden="true"></i>${proj.nome}
        </a>
      </div>
      <p class="proj__desc">${proj.desc}</p>
      <div class="proj__lang">
        <span class="proj__lang-dot" style="background:${proj.langCor}"></span>
        <span class="proj__lang-name">${proj.lang}</span>
        <span class="proj__stars"><i class="ti ti-star" aria-hidden="true"></i>${proj.stars}</span>
      </div>
      <div class="proj__tags">
        ${proj.tags.map(renderTag).join('')}
      </div>
      <div class="proj__actions">
        <a class="proj__link" href="${proj.repo}" target="_blank" rel="noopener">
          <i class="ti ti-brand-github" aria-hidden="true"></i>repositório
        </a>
        ${demoBtn}
      </div>
    </article>
  `
}

export function Projetos() {
  return `
    <section id="projetos" class="section reveal">
      <h2 class="section__title">projetos</h2>
      <div class="projetos__grid">
        ${projetos.map(renderProjeto).join('')}
      </div>
    </section>
  `
}