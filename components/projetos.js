const projetos = [
  {
    emoji: '☕', badge: 'Java',
    thumb: 'linear-gradient(135deg,#080d28,rgba(176,114,25,0.25))',
    nome:  'Ecommerce-Spring-Boot-React',
    desc:  'E-commerce fullstack com autenticação JWT, catálogo com busca e filtro, carrinho persistente, painel admin e e-mails transacionais.',
    tags:  ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    repo:  'https://github.com/Julio-Lopes/Ecommerce-Spring-Boot-React',
    demo:  '',
  },
  {
    emoji: '🎮', badge: 'Java',
    thumb: 'linear-gradient(135deg,#080d28,rgba(185,139,255,0.25))',
    nome:  'Social-Gaming-Spring-Boot-React',
    desc:  'Rede social para gamers com feed, catálogo de jogos via RAWG, comunidades com chat em tempo real (WebSocket + Redis), recomendações por gênero, rankings e integração com Twitch.',
    tags:  ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
    repo:  'https://github.com/Julio-Lopes/social-gaming-spring-boot-react',
    demo:  '',
  },
  {
    emoji: '', badge: 'React / TS',
    thumb: "url('./assets/eevee.gif') center/contain no-repeat, linear-gradient(135deg,#080d28,rgba(49,120,198,0.25))",
    nome:  'Pokedex',
    desc:  'Pokédex interativa com React e TypeScript para consulta de informações de Pokémon em tempo real utilizando a PokéAPI.',
    tags:  ['React', 'TypeScript', 'PokéAPI'],
    repo:  'https://github.com/Julio-Lopes/Pokedex-React',
    demo:  '',
  },
  {
    emoji: '🐍', badge: 'Python',
    thumb: 'linear-gradient(135deg,#080d28,rgba(53,114,165,0.25))',
    nome:  'Know-Your-Fan',
    desc:  'Plataforma de análise de fãs de eSports com integração à Twitch, IA (Gemini), OCR e dashboard de insights.',
    tags:  ['Python', 'Streamlit', 'Gemini', 'PostgreSQL'],
    repo:  'https://github.com/Julio-Lopes/Know-Your-Fan',
    demo:  '',
  },
  {
    emoji: '💰', badge: 'React / TS',
    thumb: 'linear-gradient(135deg,#080d28,rgba(49,120,198,0.25))',
    nome:  'Sistema-De-Gestao-Controle-De-Gastos',
    desc:  'Sistema web fullstack para gerenciamento de despesas pessoais e categorização de transações financeiras.',
    tags:  ['React', '.NET', 'MySQL', 'JWT'],
    repo:  'https://github.com/Julio-Lopes/Sistema-De-Gestao-Controle-De-Gastos',
    demo:  '',
  },
]
export function Projetos() {
  return `
    <section id="projetos" class="section reveal">
      <h2 class="section__title">projetos</h2>
      <div class="projetos__grid">
        ${projetos.map(p => `
          <article class="proj">
            <div class="proj__thumb" style="background:${p.thumb}">
              ${p.emoji}
              <span class="proj__badge">${p.badge}</span>
            </div>
            <div class="proj__content">
              <div class="proj__title">${p.nome}</div>
              <p class="proj__desc">${p.desc}</p>
              <div class="proj__techs">
                ${p.tags.map(t => `<span class="proj__tech">${t}</span>`).join('')}
              </div>
              <div class="proj__links">
                <a class="proj__link" href="${p.repo}" target="_blank" rel="noopener">
                  <i class="ti ti-brand-github"></i>repositório
                </a>
                ${p.demo ? `<a class="proj__link" href="${p.demo}" target="_blank" rel="noopener"><i class="ti ti-external-link"></i>demo</a>` : ''}
              </div>
            </div>
          </article>
        `).join('')}
      </div>
    </section>
  `
}
