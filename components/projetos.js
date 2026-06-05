const GITHUB_USER  = 'Julio-Lopes'
const COMMITS_MOCK = '320+'

const repos = [
  {
    nome:  'Pokedex',
    desc:  'Pokédex interativa desenvolvida com React e TypeScript para consulta de informações de Pokémon em tempo real utilizando a PokéAPI.',
    lang:  'React/TypeScript',
    cor:   '#3178c6',
    stars: 0,
    url:   'https://github.com/Julio-Lopes/Pokedex-React',
    tags:  ['React', 'TypeScript', 'PokéAPI']
  },
  {
    nome:  'Know-Your-Fan',
    desc:  'Plataforma de análise de fãs de eSports com integração à Twitch, IA (Gemini), OCR e dashboard de insights.',
    lang:  'Python',
    cor:   '#3572A5',
    stars: 0,
    url:   'https://github.com/Julio-Lopes/Know-Your-Fan',
    tags:  ['Python', 'Streamlit', 'Gemini', 'PostgreSQL'],
  },
  {
    nome:  'Sistema-De-Gestao-Controle-De-Gastos',
    desc:  'Sistema web fullstack para gerenciamento de despesas pessoais e categorização de transações financeiras.',
    lang:  'React/TypeScript',
    cor:   '#3178c6',
    stars: 0,
    url:   'https://github.com/Julio-Lopes/Sistema-De-Gestao-Controle-De-Gastos',
    tags:  ['React', '.NET', 'MySQL', 'JWT'],
  }
]

// ─── Busca stats na API do GitHub ──────────────────────────────────────
async function fetchStats() {
  try {
    const [userRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USER}`),
      fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`),
    ])
    const user      = await userRes.json()
    const reposList = await reposRes.json()

    const langs = new Set(
      reposList.filter(r => r.language).map(r => r.language)
    )

    const elRepos  = document.querySelector('.stats__item--repos  .stats__val')
    const elLangs  = document.querySelector('.stats__item--langs  .stats__val')

    if (elRepos) elRepos.textContent = user.public_repos ?? '—'
    if (elLangs) elLangs.textContent = langs.size || '—'
  } catch (e) {
    console.warn('Não foi possível carregar stats do GitHub:', e)
  }
}

// ─── Render ───────────────────────────────────────────────────────────────────
function renderStats() {
  return `
    <div class="stats">
      <div class="stats__item stats__item--repos">
        <span class="stats__val">…</span>
        <span class="stats__label">REPOS</span>
      </div>
      <div class="stats__item stats__item--langs">
        <span class="stats__val">…</span>
        <span class="stats__label">LANGS</span>
      </div>
      <div class="stats__item">
        <span class="stats__val">${COMMITS_MOCK}</span>
        <span class="stats__label">COMMITS</span>
      </div>
    </div>
  `
}

function renderRepo(repo) {
  return `
    <a class="repo" href="${repo.url}" target="_blank" rel="noopener" aria-label="Repositório ${repo.nome}">
      <div class="repo__header">
        <i class="ti ti-brand-github" aria-hidden="true"></i>
        <span class="repo__nome">${repo.nome}</span>
      </div>
      <p class="repo__desc">${repo.desc}</p>
      <div class="repo__footer">
        <span class="repo__lang">
          <span class="repo__lang-dot" style="background:${repo.cor}"></span>
          ${repo.lang}
        </span>
        <span class="repo__stars">
          <i class="ti ti-star" aria-hidden="true"></i>${repo.stars}
        </span>
      </div>
      <div class="repo__tags">
        ${repo.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </a>
  `
}

export function Projetos() {
  setTimeout(fetchStats, 0)

  return `
    <section id="projetos" class="section">
      <h2 class="section__title">// projetos</h2>
      ${renderStats()}
      <div class="repo__grid">
        ${repos.map(renderRepo).join('')}
      </div>
    </section>
  `
}
