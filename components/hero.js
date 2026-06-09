// ─── Dados ────────────────────────────────────────────────────────────────────
const perfil = {
  nome: 'Julio Cesar',
  sobrenome: 'RIBEIRO LOPES',
  tags: ['Frontend Developer', 'Salesforce Commerce Cloud', 'React', 'TypeScript'],
}

// posições aleatórias das estrelas (top%, left%, delay s, tamanho px)
const estrelas = [
  { top: 18, left: 20, delay: 0,   size: 2 },
  { top: 34, left: 72, delay: 0.6, size: 2 },
  { top: 12, left: 55, delay: 1.1, size: 2 },
  { top: 46, left: 30, delay: 0.3, size: 3 },
  { top: 56, left: 84, delay: 0.9, size: 2 },
  { top: 28, left: 88, delay: 1.4, size: 2 },
  { top: 40, left: 12, delay: 0.5, size: 2 },
  { top: 22, left: 44, delay: 1.7, size: 3 },
]

// ─── Render ───────────────────────────────────────────────────────────────────
function renderEstrela(s) {
  return `<span class="hero__star" style="top:${s.top}%;left:${s.left}%;width:${s.size}px;height:${s.size}px;animation-delay:${s.delay}s"></span>`
}

function renderTag(tag) {
  return `<span class="hero__tag">${tag}</span>`
}

export function Hero() {
  return `
    <header class="hero">
      <div class="hero__glow"></div>
      ${estrelas.map(renderEstrela).join('')}
      <div class="hero__floor"></div>
      <h1 class="hero__name">${perfil.nome}</h1>
      <p class="hero__sub">${perfil.sobrenome}</p>
      <div class="hero__tags">
        ${perfil.tags.map(renderTag).join('')}
      </div>
    </header>
  `
}