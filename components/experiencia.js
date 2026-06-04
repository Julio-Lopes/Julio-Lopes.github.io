// ─── Dados de experiência ────────────────────────────────────────────────────
const experiencias = [
  {
    empresa:  'Backlgrs',
    cargo:    'Desenvolvedor Frontend (Salesforce Commerce Cloud)',
    periodo:  'Jan 2026 – Jun 2026',
    atual:    true,
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
    empresa:  'CloudQi',
    cargo:    'Full Stack Developer',
    periodo:  'Mai 2025 – Dez 2025',
    atual:    false,
    bullets: [
      'Desenvolvimento de APIs REST utilizando NestJS e PHP (CodeIgniter).',
      'Implementação de regras de negócio e validações para sistemas corporativos.',
      'Integração com bancos de dados SQL e NoSQL (PostgreSQL, MySQL, MongoDB).',
      'Uso de Git e Docker para versionamento e padronização de ambientes.',
    ],
    tags: ['NestJS', 'PHP', 'PostgreSQL', 'MongoDB', 'Docker'],
  },
  {
    empresa:  'Escritório de Contabilidade Julio Wilson',
    cargo:    'Auxiliar de Escritório',
    periodo:  'Jan 2015 – Mar 2022',
    atual:    false,
    bullets: [
      'Apoio em rotinas de Departamento Pessoal, incluindo admissões, demissões e férias.',
      'Suporte em processos fiscais e administrativos.',
      'Tratamento de dados sensíveis com foco em organização, precisão e conformidade.',
    ],
    tags: ['Departamento Pessoal', 'Fiscal', 'Administrativo'],
  },
]

const formacoes = [
  { curso: 'Pós-graduação em Engenharia da Computação', instituicao: 'Uninter', periodo: 'Out 2025 – Abr 2026' },
  { curso: 'MBA em Gestão da Tecnologia da Informação',  instituicao: 'Uninter', periodo: 'Fev 2025 – Out 2025' },
  { curso: 'Análise e Desenvolvimento de Sistemas',      instituicao: 'Uninter', periodo: 'Jul 2022 – Nov 2024' },
]

// ─── Render ───────────────────────────────────────────────────────────────────
function renderExperiencia(exp) {
  const badge = exp.atual
    ? `<span class="exp__badge exp__badge--atual">atual</span>`
    : ''

  return `
    <article class="exp__item">
      <div class="exp__header">
        <div>
          <h3 class="exp__empresa">${exp.empresa} ${badge}</h3>
          <p class="exp__cargo">${exp.cargo}</p>
          <p class="exp__periodo">${exp.periodo}</p>
        </div>
      </div>
      <ul class="exp__bullets">
        ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <div class="exp__tags">
        ${exp.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </article>
  `
}

function renderFormacao(f) {
  return `
    <article class="formacao__item">
      <h4 class="formacao__curso">${f.curso}</h4>
      <p class="formacao__inst">${f.instituicao} · ${f.periodo}</p>
    </article>
  `
}

export function Experiencia() {
  return `
    <section id="experiencia" class="section">
      <h2 class="section__title">// experiência</h2>
      <div class="exp__list">
        ${experiencias.map(renderExperiencia).join('')}
      </div>

      <h2 class="section__title" style="margin-top: 2.5rem;">// formação</h2>
      <div class="formacao__list">
        ${formacoes.map(renderFormacao).join('')}
      </div>
    </section>
  `
}