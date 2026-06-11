const GITHUB_USER = 'Julio-Lopes'

export function Resumo() {
  return `
    <section id="resumo" class="section reveal">
      <h2 class="section__title">resumo</h2>
      <div class="stats">
        <div class="stats__item">
          <div class="stats__val" id="stat-repos">...</div>
          <p class="stats__lbl">repos públicos</p>
        </div>
        <div class="stats__item">
          <div class="stats__val" id="stat-followers">...</div>
          <p class="stats__lbl">seguidores</p>
        </div>
        <div class="stats__item">
          <div class="stats__val">2</div>
          <p class="stats__lbl">certificações</p>
        </div>
        <div class="stats__item stats__item--live">
          <div class="stats__val">
            <span class="stats__dot"></span>
            <span class="stats__val--open">aberto</span>
          </div>
          <p class="stats__lbl">para vagas</p>
        </div>
      </div>
    </section>
  `
}

export async function carregarStatsGitHub() {
  try {
    const res  = await fetch(`https://api.github.com/users/${GITHUB_USER}`)
    if (!res.ok) throw new Error('GitHub API error')
    const data = await res.json()
    const repos     = document.getElementById('stat-repos')
    const followers = document.getElementById('stat-followers')
    if (repos)     repos.textContent     = data.public_repos ?? '—'
    if (followers) followers.textContent = data.followers    ?? '—'
  } catch (err) {
    console.warn('[resumo] GitHub API:', err.message)
  }
}