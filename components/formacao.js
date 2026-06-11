const formacoes = [
  { curso: 'Pós-graduação em Engenharia da Computação',    instituicao: 'Uninter', periodo: 'Out 2025 — Abr 2026' },
  { curso: 'MBA em Gestão da Tecnologia da Informação',    instituicao: 'Uninter', periodo: 'Fev 2025 — Out 2025' },
  { curso: 'Análise e Desenvolvimento de Sistemas',        instituicao: 'Uninter', periodo: 'Jul 2022 — Nov 2024' },
]

export function Formacao() {
  return `
    <section id="formacao" class="section reveal">
      <h2 class="section__title">formação</h2>
      <div class="form__list">
        ${formacoes.map(f => `
          <article class="form__item">
            <h4 class="form__curso">${f.curso}</h4>
            <p class="form__meta">${f.instituicao} · ${f.periodo}</p>
          </article>
        `).join('')}
      </div>
    </section>
  `
}