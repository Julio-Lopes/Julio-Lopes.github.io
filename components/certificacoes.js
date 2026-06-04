// ─── Dados ────────────────────────────────────────────────────────────────────
const certificacoes = [
  {
    titulo: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    emissor: 'Oracle',
    ano: '2025',
    icon: 'ti-certificate',
  },
  {
    titulo: 'Oracle Fusion Cloud Applications ERP Certified Foundations Associate',
    emissor: 'Oracle',
    ano: '2025',
    icon: 'ti-certificate',
  },
]

// ─── Render ───────────────────────────────────────────────────────────────────
function renderCert(cert) {
  return `
    <article class="cert__item">
      <i class="ti ${cert.icon} cert__icon" aria-hidden="true"></i>
      <div>
        <h4 class="cert__titulo">${cert.titulo}</h4>
        <p class="cert__meta">${cert.emissor} · ${cert.ano}</p>
      </div>
    </article>
  `
}

export function Certificacoes() {
  return `
    <section id="certificacoes" class="section">
      <h2 class="section__title">// certificações</h2>
      <div class="cert__list">
        ${certificacoes.map(renderCert).join('')}
      </div>
    </section>
  `
}