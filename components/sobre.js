const paragrafos = [
  `Desenvolvedor <strong>Full Stack</strong>, com experiência em front-end (<strong>React, Next.js, TypeScript</strong>) e back-end (<strong>Java, Spring Boot</strong>), incluindo vivência prática em soluções de e-commerce com <strong>Salesforce Commerce Cloud (SFCC)</strong>.`,
  `No front-end, construo interfaces modernas, responsivas e acessíveis, com transformação de layouts do <strong>Figma</strong> em aplicações funcionais, criação de componentes reutilizáveis e integração com <strong>APIs REST</strong>.`,
  `No back-end, desenvolvo APIs REST com <strong>Java e Spring Boot</strong>, modelagem e persistência de dados, autenticação e testes unitários, aplicando boas práticas de arquitetura e código limpo.`,
  `Ao longo da minha trajetória, participei do desenvolvimento e evolução de plataformas de e-commerce, contribuindo para performance, usabilidade e manutenção de aplicações voltadas à experiência do usuário, e venho me aprofundando em desenvolvimento back-end para atuar de forma mais completa no ciclo full stack.`,
]

export function Sobre() {
  return `
    <section id="sobre" class="section reveal">
      <h2 class="section__title">sobre</h2>
      <div class="sobre__grid">
        <div class="sobre__text">
          ${paragrafos.map(p => `<p>${p}</p>`).join('')}
        </div>
        <div class="code-card">
          <div class="code-topbar">
            <div class="dot dot-red"></div>
            <div class="dot dot-yellow"></div>
            <div class="dot dot-green"></div>
            <span class="code-filename">developer.ts</span>
          </div>
          <div class="code-body">
            <div><span class="ln">1</span><span class="kw">const</span> <span class="fn">developer</span> <span class="punct">= {</span></div>
            <div><span class="ln">2</span>&nbsp;&nbsp;<span class="prop">name</span><span class="punct">:</span> <span class="str">'Julio Cesar'</span><span class="punct">,</span></div>
            <div><span class="ln">3</span>&nbsp;&nbsp;<span class="prop">role</span><span class="punct">:</span> <span class="str">'Frontend Engineer'</span><span class="punct">,</span></div>
            <div><span class="ln">4</span>&nbsp;&nbsp;<span class="prop">company</span><span class="punct">:</span> <span class="str">'Backlgrs'</span><span class="punct">,</span></div>
            <div><span class="ln">5</span>&nbsp;&nbsp;<span class="prop">stack</span><span class="punct">: [</span></div>
            <div><span class="ln">6</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'React'</span><span class="punct">,</span> <span class="str">'Next.js'</span><span class="punct">,</span></div>
            <div><span class="ln">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span class="str">'TypeScript'</span><span class="punct">,</span> <span class="str">'SFCC'</span></div>
            <div><span class="ln">8</span>&nbsp;&nbsp;<span class="punct">],</span></div>
            <div><span class="ln">9</span>&nbsp;&nbsp;<span class="prop">open</span><span class="punct">:</span> <span class="val">true</span><span class="punct">,</span></div>
            <div><span class="ln">10</span>&nbsp;&nbsp;<span class="prop">location</span><span class="punct">:</span> <span class="str">'Brasil 🇧🇷'</span></div>
            <div><span class="ln">11</span><span class="punct">}</span><span class="cursor-blink"></span></div>
          </div>
        </div>
      </div>
    </section>
  `
}
