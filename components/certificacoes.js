const certificacoes = [
  {
    titulo:  'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    emissor: 'Oracle', ano: '2025', icon: 'ti-certificate',
  },
  {
    titulo:  'Oracle Fusion Cloud Applications ERP Certified Foundations Associate',
    emissor: 'Oracle', ano: '2025', icon: 'ti-certificate',
  },
]

export function Certificacoes() {
  return `
    <section id="certificacoes" class="section reveal">
      <h2 class="section__title">certificações</h2>
      <div class="cert__list">
        ${certificacoes.map(c => `
          <article class="cert__item">
            <i class="ti ${c.icon} cert__icon" aria-hidden="true"></i>
            <div>
              <h4 class="cert__titulo">${c.titulo}</h4>
              <p class="cert__meta">${c.emissor} · ${c.ano}</p>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `
}