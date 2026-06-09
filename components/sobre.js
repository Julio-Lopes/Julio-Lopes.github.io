// ─── Dados ────────────────────────────────────────────────────────────────────
const paragrafos = [
  `Desenvolvedor Frontend com experiência no desenvolvimento de soluções para e-commerce, atuando com React, Next.js, TypeScript, JavaScript, HTML, CSS e Salesforce Commerce Cloud (SFCC). Tenho experiência na construção de interfaces modernas, responsivas e acessíveis, transformação de layouts do Figma em aplicações funcionais, criação de componentes reutilizáveis e integração com APIs REST.`,

  `Ao longo da minha trajetória, participei do desenvolvimento e evolução de plataformas de e-commerce, contribuindo para a performance, usabilidade e manutenção de aplicações voltadas à experiência do usuário e aos objetivos do negócio.`,

  `Também possuo experiência em desenvolvimento backend com Java (Spring Boot) e PHP, além de conhecimentos em computação em nuvem e ambientes multi-cloud, o que me permite compreender o fluxo completo das aplicações e colaborar de forma eficiente com diferentes áreas técnicas.`,

  `Sou formado em Análise e Desenvolvimento de Sistemas e pós-graduado em MBE Gestão da Tecnologia da Informação. Busco constantemente aprimorar minhas habilidades técnicas, aplicando boas práticas de desenvolvimento, código limpo e soluções que gerem valor para usuários e empresas.`,
]

// ─── Render ───────────────────────────────────────────────────────────────────
export function Sobre() {
  return `
    <section id="sobre" class="section reveal">
      <h2 class="section__title">sobre</h2>
      <div class="card sobre__card">
        ${paragrafos.map((p) => `<p class="sobre__text">${p}</p>`).join('')}
      </div>
    </section>
  `
}