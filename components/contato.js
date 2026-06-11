const contatos = [
  { label: 'github.com/Julio-Lopes',  href: 'https://github.com/Julio-Lopes',                                  icon: 'ti-brand-github'   },
  { label: 'linkedin.com/julio',      href: 'https://www.linkedin.com/in/julio-cesar-ribeiro-lopes-0039ba244/', icon: 'ti-brand-linkedin' },
  { label: 'juliocrlopes4@gmail.com', href: 'mailto:juliocrlopes4@gmail.com',                                   icon: 'ti-mail'           },
]

export function Contato() {
  return `
    <section id="contato" class="section reveal">
      <h2 class="section__title">contato</h2>
      <div class="contato__wrap">
        <div class="contato__title">Vamos trabalhar juntos?</div>
        <p class="contato__sub">
          Estou aberto a novas oportunidades, projetos freelance<br>e colaborações interessantes.
        </p>
        <div class="contato__links">
          ${contatos.map(c => `
            <a class="contato__link" href="${c.href}" target="_blank" rel="noopener">
              <i class="ti ${c.icon}" aria-hidden="true"></i>${c.label}
            </a>
          `).join('')}
        </div>
      </div>
    </section>
  `
}