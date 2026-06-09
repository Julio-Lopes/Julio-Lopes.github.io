// ─── Dados ────────────────────────────────────────────────────────────────────
const contatos = [
  { label: 'github.com/Julio-Lopes', href: 'https://github.com/Julio-Lopes', icon: 'ti-brand-github' },
  { label: 'linkedin.com/in/julio',  href: 'https://linkedin.com',           icon: 'ti-brand-linkedin' },
  { label: 'julio@email.com',        href: 'mailto:julio@email.com',         icon: 'ti-mail' },
]

// ─── Render ───────────────────────────────────────────────────────────────────
function renderContato(c) {
  return `
    <a class="contato__link" href="${c.href}" target="_blank" rel="noopener">
      <i class="ti ${c.icon}" aria-hidden="true"></i>${c.label}
    </a>
  `
}

export function Contato() {
  return `
    <section id="contato" class="section reveal">
      <h2 class="section__title">contato</h2>
      <div class="contato__grid">
        ${contatos.map(renderContato).join('')}
      </div>
    </section>
  `
}