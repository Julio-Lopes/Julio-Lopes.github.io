// ─── Dados ────────────────────────────────────────────────────────────────────
const links = [
  { label: 'sobre',       href: '#sobre' },
  { label: 'stack',       href: '#stack' },
  { label: 'experiência', href: '#experiencia' },
  { label: 'formação',    href: '#formacao' },
  { label: 'projetos',    href: '#projetos' },
  { label: 'contato',     href: '#contato' },
]

// ─── Render ───────────────────────────────────────────────────────────────────
export function Nav() {
  return `
    <nav class="nav">
      <span class="nav__logo">~/julio-lopes</span>
      <div class="nav__links">
        ${links.map((l) => `<a href="${l.href}">${l.label}</a>`).join('')}
      </div>
    </nav>
  `
}