import { Sidebar }      from './components/sidebar.js'
import { Sobre }         from './components/sobre.js'
import { Experiencia }   from './components/experiencia.js'
import { Projetos }      from './components/projetos.js'
import { Certificacoes } from './components/certificacoes.js'
import { Contato }       from './components/contato.js'

// ─── Monta o HTML ─────────────────────────────────────────────────────────────
document.getElementById('sidebar').innerHTML  = Sidebar()
document.getElementById('conteudo').innerHTML =
  Sobre() + Experiencia() + Projetos() + Certificacoes() + Contato()

// ─── Navegação ativa no scroll ────────────────────────────────────────────────
const sections = document.querySelectorAll('.section')
const navItems = document.querySelectorAll('.nav-item')

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id
        navItems.forEach(item => {
          item.classList.toggle('active', item.dataset.section === id)
        })
      }
    })
  },
  { threshold: 0.35 }
)

sections.forEach(s => observer.observe(s))

// ─── Scroll suave nos links da nav ───────────────────────────────────────────
document.addEventListener('click', e => {
  const link = e.target.closest('.nav-item')
  if (!link) return
  e.preventDefault()
  const target = document.querySelector(link.getAttribute('href'))
  if (target) target.scrollIntoView({ behavior: 'smooth' })
})