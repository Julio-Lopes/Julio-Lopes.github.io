export function Sidebar() {
  return `
    <aside class="sidebar">
      <div class="sidebar__top">
        <div class="sidebar__logo">julio@dev:~$</div>

        <div class="sidebar__profile">
          <h1 class="sidebar__name">Julio Cesar Lopes</h1>
          <p class="sidebar__role">Desenvolvedor Frontend | Salesforce Commerce Cloud (SFCC) | React | Next.js | TypeScript | E-commerce</p>
          <p class="sidebar__bio">
            Desenvolvedor Frontend com experiência no desenvolvimento de soluções para e-commerce, atuando com React, Next.js, TypeScript, JavaScript, HTML, CSS e Salesforce Commerce Cloud (SFCC).
            Também possuo experiência em desenvolvimento backend com Java (Spring Boot) e PHP, além de conhecimentos em computação em nuvem e ambientes multi-cloud.
          </p>
        </div>

        <nav class="sidebar__nav" aria-label="Navegação principal">
          <a href="#sobre"          class="nav-item" data-section="sobre">
            <i class="ti ti-user" aria-hidden="true"></i> sobre
          </a>
          <a href="#experiencia"    class="nav-item" data-section="experiencia">
            <i class="ti ti-briefcase" aria-hidden="true"></i> experiência
          </a>
          <a href="#projetos"       class="nav-item active" data-section="projetos">
            <i class="ti ti-brand-github" aria-hidden="true"></i> projetos
          </a>
          <a href="#certificacoes"  class="nav-item" data-section="certificacoes">
            <i class="ti ti-award" aria-hidden="true"></i> certificações
          </a>
          <a href="#contato"        class="nav-item" data-section="contato">
            <i class="ti ti-mail" aria-hidden="true"></i> contato
          </a>
        </nav>
      </div>

      <div class="sidebar__bottom">
        <hr class="sidebar__divider" />
        <span class="sidebar__contact-label">// contato</span>
        <ul class="sidebar__contact">
          <li>
            <i class="ti ti-mail" aria-hidden="true"></i>
            <a href="mailto:juliocrlopes4@gmail.com">juliocrlopes4@gmail.com</a>
          </li>
          <li>
            <i class="ti ti-brand-github" aria-hidden="true"></i>
            <a href="https://github.com/Julio-Lopes" target="_blank" rel="noopener">github.com/Julio-Lopes</a>
          </li>
          <li>
            <i class="ti ti-brand-linkedin" aria-hidden="true"></i>
            <a href="https://www.linkedin.com/in/julio-cesar-ribeiro-lopes-0039ba244/" target="_blank" rel="noopener">LinkedIn</a>
          </li>
        </ul>
      </div>
    </aside>
  `
}