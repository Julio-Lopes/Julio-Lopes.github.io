export function Sobre() {
  const skills = {
    'Frontend':  ['JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'HTML5', 'CSS3', 'SCSS', 'Bootstrap'],
    'SFCC':      ['SFRA', 'ISML', 'Page Designer', 'Business Manager', 'Cartridges'],
    'Backend':   ['Node.js', 'NestJS', 'Java', 'Spring Boot', 'PHP (CodeIgniter)', 'APIs REST'],
    'Banco':     ['PostgreSQL', 'MySQL', 'MongoDB'],
    'Cloud/Dev': ['Oracle Cloud (OCI)', 'Docker', 'Git'],
  }

  const skillsHTML = Object.entries(skills).map(([categoria, lista]) => `
    <div class="skills__group">
      <h4 class="skills__category">${categoria}</h4>
      <ul class="skills__list">
        ${lista.map(s => `<li class="skills__tag">${s}</li>`).join('')}
      </ul>
    </div>
  `).join('')

  return `
    <section id="sobre" class="section">
      <h2 class="section__title">// sobre</h2>
      <p class="sobre__text">
        Desenvolvedor Frontend com experiência no desenvolvimento de soluções para e-commerce, atuando com
        React, Next.js, TypeScript, JavaScript, HTML, CSS e Salesforce Commerce Cloud (SFCC). Tenho experiência
        na construção de interfaces modernas, responsivas e acessíveis, transformação de layouts do Figma em
        aplicações funcionais, criação de componentes reutilizáveis e integração com APIs REST.
      </p>
      <p class="sobre__text">
        Ao longo da minha trajetória, participei do desenvolvimento e evolução de plataformas de e-commerce,
        contribuindo para a performance, usabilidade e manutenção de aplicações voltadas à experiência do
        usuário e aos objetivos do negócio.
      </p>
      <p class="sobre__text">
        Também possuo experiência em desenvolvimento backend com Java (Spring Boot) e PHP, além de conhecimentos
        em computação em nuvem e ambientes multi-cloud, o que me permite compreender o fluxo completo das
        aplicações e colaborar de forma eficiente com diferentes áreas técnicas.
      </p>
      <p class="sobre__text">
        Sou formado em Análise e Desenvolvimento de Sistemas e pós-graduado em MBE Gestão da Tecnologia da
        Informação. Busco constantemente aprimorar minhas habilidades técnicas, aplicando boas práticas de
        desenvolvimento, código limpo e soluções que gerem valor para usuários e empresas.
      </p>
      <div class="skills">${skillsHTML}</div>
    </section>
  `
}