const perfil = {
  eyebrow:   'Full Stack Developer',
  nome:      'Julio Cesar',
  sobrenome: 'RIBEIRO LOPES',
  tags:      ['Full Stack Developer', 'Salesforce Commerce Cloud', 'React', 'Next.js', 'TypeScript', 'Java', 'Spring'],
}

const estrelas = [
  { top: 18, left: 20, delay: 0,   size: 2 },
  { top: 34, left: 72, delay: 0.6, size: 2 },
  { top: 12, left: 55, delay: 1.1, size: 2 },
  { top: 46, left: 30, delay: 0.3, size: 3 },
  { top: 56, left: 84, delay: 0.9, size: 2 },
  { top: 28, left: 88, delay: 1.4, size: 2 },
  { top: 40, left: 12, delay: 0.5, size: 2 },
  { top: 22, left: 44, delay: 1.7, size: 3 },
  { top: 65, left: 60, delay: 0.8, size: 2 },
  { top: 10, left: 80, delay: 2.1, size: 2 },
]

export function Hero() {
  return `
    <header class="hero">
      <div class="hero__floor"></div>
      ${estrelas.map(s =>
        `<span style="position:absolute;border-radius:50%;background:#fff;box-shadow:0 0 6px rgba(200,210,255,0.8);width:${s.size}px;height:${s.size}px;top:${s.top}%;left:${s.left}%;animation:starBlink 2s ${s.delay}s ease-in-out infinite alternate;"></span>`
      ).join('')}
      <p class="hero__eyebrow">${perfil.eyebrow}</p>
      <h1 class="hero__name"><span class="glow-text">${perfil.nome}</span></h1>
      <p class="hero__sub">${perfil.sobrenome}</p>
      <div class="hero__tags">
        ${perfil.tags.map(t => `<span class="hero__tag">${t}</span>`).join('')}
      </div>
      <div class="hero__scroll">
        <span>scroll</span>
        <div class="hero__scroll-line"></div>
      </div>
      <style>
        @keyframes starBlink { from { opacity: 0.2; } to { opacity: 1; } }
      </style>
    </header>
  `
}
