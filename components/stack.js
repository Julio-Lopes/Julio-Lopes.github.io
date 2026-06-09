// ─── Dados ────────────────────────────────────────────────────────────────────
const categorias = [
  {
    nome: 'frontend',
    icon: 'ti-device-desktop',
    cor: '#a78bfa',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap'],
  },
  {
    nome: 'sfcc',
    icon: 'ti-shopping-cart',
    cor: '#c084fc',
    skills: ['SFRA', 'ISML', 'Page Designer', 'Business Manager', 'Cartridges'],
  },
  {
    nome: 'backend',
    icon: 'ti-server-2',
    cor: '#5dcaa5',
    skills: ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'PHP (CodeIgniter)', 'APIs REST'],
  },
  {
    nome: 'banco',
    icon: 'ti-database',
    cor: '#7c9fe0',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    nome: 'cloud/dev',
    icon: 'ti-cloud',
    cor: '#e0a878',
    skills: ['Oracle Cloud (OCI)', 'Docker', 'Git'],
  },
  {
    nome: 'ferramentas',
    icon: 'ti-tools',
    cor: '#d4537e',
    skills: ['VS Code', 'Storybook', 'Figma'],
  },
]

// ─── Render ───────────────────────────────────────────────────────────────────
function renderPill(skill) {
  return `<span class="stack__pill">${skill}</span>`
}

function renderCategoria(cat) {
  return `
    <article class="stack__card" style="border-top-color:${cat.cor}">
      <h3 class="stack__head" style="color:${cat.cor}">
        <i class="ti ${cat.icon}" aria-hidden="true"></i>${cat.nome}
      </h3>
      <div class="stack__tags">
        ${cat.skills.map(renderPill).join('')}
      </div>
    </article>
  `
}

export function Stack() {
  return `
    <section id="stack" class="section reveal">
      <h2 class="section__title">stack</h2>
      <div class="stack__grid">
        ${categorias.map(renderCategoria).join('')}
      </div>
    </section>
  `
}