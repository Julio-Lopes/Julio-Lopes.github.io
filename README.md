# Portfolio — Julio Cesar Ribeiro Lopes

> Site de apresentação pessoal com estética synthwave/dark — hero com grid 3D animado, campo de estrelas em canvas, partículas flutuantes, glow de mouse e fade-in das seções ao rolar. Totalmente responsivo, incluindo menu hamburger para mobile.

🔗 **[Ver online](https://julio-lopes.github.io/)**

---

## ✨ Funcionalidades

- Hero com nome em gradiente, grid perspectiva 3D animado (retrowave) e estrelas piscando
- Campo de estrelas renderizado em canvas — sobe suavemente pelo fundo
- Blobs de luz roxa/cyan animados com glow de fundo
- Glow radial que acompanha o cursor (desktop)
- Partículas flutuantes roxas e ciano (desktop)
- Fade-in das seções via **IntersectionObserver** ao rolar
- Stats de repositórios e seguidores em tempo real via **GitHub API**
- Stack organizada por categoria em cards com cor de acento individual
- Timeline de experiência com destaque verde para emprego atual
- Seção de formação acadêmica
- Grid de projetos com thumbs coloridos e links para repositório/demo
- Seção de certificações
- Seção de contato com bloco de destaque e links diretos
- Navegação sticky com scroll suave e underline animado
- **Menu hamburger animado** para mobile
- Design responsivo — 320px, 640px, 1024px, 1440px, 1800px e 2K+
- `prefers-reduced-motion` respeitado
- Zero dependências de build — HTML, CSS e JS puros com ES Modules

---

## 🗂️ Estrutura do projeto

```
portfolio/
├── index.html                  # Entrada da aplicação
├── style.css                   # Design system + animações + responsivo
├── main.js                     # Orquestra componentes, canvas, partículas, glow e hamburger
└── components/
    ├── nav.js                  # Navegação sticky + menu mobile hamburger
    ├── hero.js                 # Nome + grid animado + estrelas
    ├── resumo.js               # Stats do GitHub em tempo real
    ├── sobre.js                # Resumo profissional + code block
    ├── stack.js                # Skills por categoria        ← edite aqui
    ├── experiencia.js          # Timeline de empregos        ← edite aqui
    ├── formacao.js             # Formação acadêmica          ← edite aqui
    ├── projetos.js             # Grid de repositórios        ← edite aqui
    ├── certificacoes.js        # Certificações               ← edite aqui
    └── contato.js              # Links de contato            ← edite aqui
```

---

## 🚀 Rodando localmente

O projeto usa **ES Modules** (`type="module"`), por isso precisa de um servidor HTTP local.

**Opção 1 — VS Code:** instale [Live Server (Ritwick Dey)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), clique com botão direito em `index.html` → **Open with Live Server**.

**Opção 2 — Terminal:**
```bash
npx serve .
```
Acesse `http://localhost:3000`.

**Opção 3 — Python:**
```bash
python -m http.server 8080
```
Acesse `http://localhost:8080`.

---

## ➕ Como adicionar um projeto

Abra `components/projetos.js` e adicione um objeto ao array `projetos`:

```js
{
  emoji: '🚀',
  badge: 'Next.js',
  thumb: 'linear-gradient(135deg,#080d28,rgba(124,77,255,0.25))',
  nome:  'nome-do-repo',
  desc:  'Descrição curta do projeto.',
  tags:  ['Next.js', 'TypeScript'],
  repo:  'https://github.com/Julio-Lopes/nome-do-repo',
  demo:  '',   // URL ao vivo — deixe '' para não exibir o botão
},
```

**Gradientes de thumb por linguagem:**

| Linguagem  | Cor do gradiente                              |
|------------|-----------------------------------------------|
| Java       | `rgba(176,114,25,0.25)`                       |
| TypeScript | `rgba(49,120,198,0.25)`                       |
| Python     | `rgba(53,114,165,0.25)`                       |
| PHP        | `rgba(79,93,149,0.25)`                        |
| C# / .NET  | `rgba(23,134,0,0.25)`                         |
| HTML/CSS   | `rgba(227,76,38,0.25)`                        |
| Roxo       | `rgba(124,77,255,0.25)`                       |
| Cyan       | `rgba(0,229,255,0.15)`                        |

---

## ⚙️ Onde mexer

| O que alterar | Arquivo |
|---|---|
| Nome e tags do hero | `components/hero.js` — objeto `perfil` |
| Texto do sobre | `components/sobre.js` — array `paragrafos` |
| Skills e tecnologias | `components/stack.js` — array `categorias` |
| Experiências profissionais | `components/experiencia.js` — array `experiencias` |
| Formação acadêmica | `components/formacao.js` — array `formacoes` |
| Projetos | `components/projetos.js` — array `projetos` |
| Certificações | `components/certificacoes.js` — array `certificacoes` |
| Links de contato | `components/contato.js` — array `contatos` |
| Paleta de cores | `style.css` — variáveis em `:root` |
| Velocidade do grid animado | `style.css` — `@keyframes floorScroll` |
| Links do menu de navegação | `components/nav.js` — array `links` |

---

## 🌐 Deploy no GitHub Pages

```bash
git add .
git commit -m "atualiza portfolio"
git push
```
Acesse **Settings → Pages → Source → main → / (root) → Save** e aguarde 1–2 minutos.

---

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript ES2022
- ES Modules (sem bundler)
- Canvas API — campo de estrelas animado
- [GitHub REST API](https://docs.github.com/en/rest) — stats em tempo real
- [Tabler Icons](https://tabler.io/icons) — ícones
- [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) + [Space Mono](https://fonts.google.com/specimen/Space+Mono) — tipografia

---

## 📄 Licença

MIT — sinta-se livre para usar como base para o seu próprio portfolio.