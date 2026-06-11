const experiencias = [
  {
    empresa: 'Backlgrs', atual: true,
    cargo:   'Desenvolvedor Frontend — Salesforce Commerce Cloud',
    periodo: 'Jan 2026 — Jun 2026',
    bullets: [
      'Desenvolvimento e evolução de interfaces de e-commerce em SFCC (PDP, PLP, Cart e Checkout).',
      'Criação de componentes reutilizáveis utilizando SFRA, ISML e Page Designer.',
      'Implementação e manutenção de regras de negócio no Business Manager (promoções, campanhas e regras comerciais).',
      'Suporte ao ciclo de deploy e gerenciamento de ambientes Sandbox e Cartridges.',
      'Integração com equipes de negócio, QA e desenvolvimento para evolução contínua da plataforma.',
    ],
    tags: ['SFCC', 'SFRA', 'ISML', 'Page Designer', 'Business Manager'],
  },
  {
    empresa: 'CloudQi', atual: false,
    cargo:   'Full Stack Developer',
    periodo: 'Mai 2025 — Dez 2025',
    bullets: [
      'Desenvolvimento de APIs REST utilizando NestJS e PHP (CodeIgniter).',
      'Implementação de regras de negócio e validações para sistemas corporativos.',
      'Integração com bancos de dados SQL e NoSQL (PostgreSQL, MySQL, MongoDB).',
      'Uso de Git e Docker para versionamento e padronização de ambientes.',
    ],
    tags: ['NestJS', 'PHP', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    empresa: 'Escritório de Contabilidade Julio Wilson', atual: false,
    cargo:   'Auxiliar de Escritório',
    periodo: 'Jan 2015 — Mar 2022',
    bullets: [
      'Apoio em rotinas de Departamento Pessoal, incluindo admissões, demissões e férias.',
      'Suporte em processos fiscais e administrativos.',
      'Tratamento de dados sensíveis com foco em organização, precisão e conformidade.',
    ],
    tags: ['Departamento Pessoal', 'Fiscal', 'Administrativo'],
  },
]

export function Experiencia() {
  return `
    <section id="experiencia" class="section reveal">
      <h2 class="section__title">experiência</h2>
      <div class="exp__list">
        ${experiencias.map(exp => `
          <article class="exp__item ${exp.atual ? 'exp__item--current' : ''}">
            <div class="exp__top">
              <span class="exp__company">${exp.empresa}</span>
              ${exp.atual ? '<span class="exp__badge">atual</span>' : ''}
            </div>
            <p class="exp__role">${exp.cargo}</p>
            <p class="exp__date">${exp.periodo}</p>
            <ul class="exp__bullets">
              ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
            </ul>
            <div class="exp__tags">
              ${exp.tags.map(t => `<span class="exp__tag">${t}</span>`).join('')}
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `
}