// ─── Componentes ──────────────────────────────────────────────────────────────
import { Nav }                from './components/nav.js'
import { Hero }               from './components/hero.js'
import { Resumo, carregarStatsGitHub } from './components/resumo.js'
import { Sobre }              from './components/sobre.js'
import { Stack }              from './components/stack.js'
import { Experiencia }        from './components/experiencia.js'
import { Formacao }           from './components/formacao.js'
import { Projetos }           from './components/projetos.js'
import { Certificacoes }      from './components/certificacoes.js'
import { Contato }            from './components/contato.js'

// ─── Footer ─────────────────────────────────────────────────────────────────── 
function Footer() {
  const ano = new Date().getFullYear()
  return `
    <footer class="footer">
      <p>© ${ano} julio cesar lopes</p>
    </footer>
  `
}

// ─── Montagem ───────────────────────────────────────────────────────────────── 
function App() {
  return [
    Nav(),
    Hero(),
    `<main class="shell">`,
      Resumo(),
      Sobre(),
      Stack(),
      Experiencia(),
      Formacao(),
      Projetos(),
      Certificacoes(),
      Contato(),
    `</main>`,
    Footer(),
  ].join('')
}

const app = document.getElementById('app')
app.innerHTML = App()

// Busca os stats
carregarStatsGitHub()

// ─── Animação ─────────────────────────────────────
function ativarReveal() {
  const alvos = document.querySelectorAll('.reveal')

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          obs.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
  )

  alvos.forEach((el) => observer.observe(el))
}

ativarReveal()