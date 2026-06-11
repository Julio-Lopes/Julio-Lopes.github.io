import { Nav }                           from './components/nav.js'
import { Hero }                          from './components/hero.js'
import { Resumo, carregarStatsGitHub }   from './components/resumo.js'
import { Sobre }                         from './components/sobre.js'
import { Stack }                         from './components/stack.js'
import { Experiencia }                   from './components/experiencia.js'
import { Formacao }                      from './components/formacao.js'
import { Projetos }                      from './components/projetos.js'
import { Certificacoes }                 from './components/certificacoes.js'
import { Contato }                       from './components/contato.js'

function Footer() {
  return `<footer class="footer"><p>built with ♥ — julio cesar ribeiro lopes · ${new Date().getFullYear()}</p></footer>`
}

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

document.getElementById('app').innerHTML = App()
carregarStatsGitHub()

// ─── Scroll reveal ─────────────────────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target) }
    })
  },
  { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
)
document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

// ─── Mouse glow (desktop only) ────────────────────────────────────────────────
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.getElementById('mouseGlow')
  document.addEventListener('mousemove', e => {
    glow.style.left = e.clientX + 'px'
    glow.style.top  = e.clientY + 'px'
  })
}

// ─── Canvas star field ────────────────────────────────────────────────────────
const canvas = document.getElementById('canvas-bg')
const ctx    = canvas.getContext('2d')
let CW = canvas.width  = window.innerWidth
let CH = canvas.height = window.innerHeight

window.addEventListener('resize', () => {
  CW = canvas.width  = window.innerWidth
  CH = canvas.height = window.innerHeight
})

const stars = Array.from({ length: 130 }, () => ({
  x: Math.random() * CW,
  y: Math.random() * CH,
  r: Math.random() * 1.2 + 0.2,
  speed: Math.random() * 0.12 + 0.04,
  opacity: Math.random() * 0.6 + 0.2,
}))

;(function drawCanvas() {
  ctx.clearRect(0, 0, CW, CH)
  stars.forEach(s => {
    ctx.beginPath()
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(200,210,255,${s.opacity})`
    ctx.fill()
    s.y -= s.speed
    if (s.y < 0) { s.y = CH; s.x = Math.random() * CW }
  })
  requestAnimationFrame(drawCanvas)
})()

// ─── Floating particles (desktop only) ────────────────────────────────────────
if (window.innerWidth > 640) {
  function spawnParticle() {
    const p    = document.createElement('div')
    p.className = 'particle'
    const size = Math.random() * 3 + 1
    const blue = Math.random() > 0.5
    p.style.cssText = `
      width:${size}px;height:${size}px;
      left:${Math.random()*100}vw;bottom:-10px;
      background:${blue ? 'rgba(124,77,255,0.6)' : 'rgba(0,229,255,0.5)'};
      box-shadow:0 0 ${size*3}px ${blue ? 'rgba(124,77,255,0.8)' : 'rgba(0,229,255,0.8)'};
      animation-duration:${Math.random()*12+8}s;
      animation-delay:${Math.random()*5}s;
    `
    document.body.appendChild(p)
    setTimeout(() => p.remove(), 20000)
  }
  setInterval(spawnParticle, 800)
}

// ─── Mobile hamburger menu ────────────────────────────────────────────────────
document.addEventListener('click', e => {
  const btn   = e.target.closest('.nav__hamburger')
  const menu  = document.querySelector('.nav__mobile')
  const isLink = e.target.closest('.nav__mobile a')

  if (btn) {
    btn.classList.toggle('open')
    menu.classList.toggle('open')
    return
  }
  if (isLink) {
    document.querySelector('.nav__hamburger').classList.remove('open')
    menu.classList.remove('open')
    return
  }
  if (menu && menu.classList.contains('open') && !e.target.closest('nav')) {
    document.querySelector('.nav__hamburger').classList.remove('open')
    menu.classList.remove('open')
  }
})