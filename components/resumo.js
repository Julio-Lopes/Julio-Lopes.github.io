// ─── Config ───────────────────────────────────────────────────────────────────
const GITHUB_USER = 'Julio-Lopes'

// ─── Render inicial ─────────────────────────────
function renderStatStatic(val, lbl, id = '') {
  const idAttr = id ? `id="${id}"` : ''
  return `
    <div class="stats__item">
      <div class="stats__val" ${idAttr}>${val}</div>
      <p class="stats__lbl">${lbl}</p>
    </div>
  `
}

export function Resumo() {
  return `
    <section id="resumo" class="section reveal">
      <h2 class="section__title">resumo</h2>
      <div class="stats">
        ${renderStatStatic('...', 'repos públicos', 'stat-repos')}
        ${renderStatStatic('...', 'seguidores',     'stat-followers')}
        ${renderStatStatic('2',  'certificações')}
        <div class="stats__item stats__item--live">
          <div class="stats__val"><span class="stats__dot"></span>aberto</div>
          <p class="stats__lbl">para vagas</p>
        </div>
      </div>
    </section>
  `
}

// ─── Fetch GitHub ──────────────────────────────────────────────────────────────
export async function carregarStatsGitHub() {
  try {
    const res  = await fetch(`https://api.github.com/users/${GITHUB_USER}`)
    if (!res.ok) throw new Error('rate limit ou usuário não encontrado')
    const data = await res.json()

    const repos     = document.getElementById('stat-repos')
    const followers = document.getElementById('stat-followers')

    if (repos)     repos.textContent     = data.public_repos ?? '—'
    if (followers) followers.textContent = data.followers    ?? '—'
  } catch (err) {
    console.warn('[resumo] GitHub API:', err.message)
  }
}