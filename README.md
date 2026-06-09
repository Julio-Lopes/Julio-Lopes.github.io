# Portfolio — Julio Cesar Ribeiro Lopes

> Site de apresentação pessoal com estética synthwave, grid animado no hero, fade-in das seções ao rolar, skills por categoria e stats em tempo real via GitHub API.

🔗 **[Ver online](https://julio-lopes.github.io/)**

---

## ✨ Funcionalidades

- Hero com grid em perspectiva animado (efeito retrowave) e estrelas que piscam
- Fade-in das seções conforme entram na tela via **IntersectionObserver**
- Stats de repositórios e seguidores buscados em tempo real via **GitHub API**
- Stack organizada por categoria em cards coloridos (sem barras de porcentagem)
- Timeline de experiência com destaque para o emprego atual
- Seção de formação acadêmica
- Grid de projetos com linguagem, stars e links para repositório e demo
- Navegação sticky com scroll suave entre seções
- Design responsivo — mobile, 1080p, 1440p e 2K
- `prefers-reduced-motion` respeitado
- Zero dependências de build — HTML, CSS e JS puros com ES Modules

---

## 🗂️ Estrutura do projeto

```
portfolio/
├── index.html                  # Entrada da aplicação
├── style.css                   # Estilos globais + animações
├── main.js                     # Orquestra e monta os componentes
└── components/
    ├── nav.js                  # Navegação sticky
    ├── hero.js                 # Nome + grid animado + estrelas
    ├── resumo.js               # Stats do GitHub em tempo real
    ├── sobre.js                # Resumo profissional
    ├── stack.js                # Skills por categoria  ← edite aqui
    ├── experiencia.js          # Timeline de empregos  ← edite aqui
    ├── formacao.js             # Formação acadêmica    ← edite aqui
    ├── projetos.js             # Grid de repositórios  ← edite aqui
    ├── certificacoes.js        # Certificações
    └── contato.js              # Links de contato
```

---

## 🚀 Rodando localmente

O projeto usa **ES Modules** (`type="module"`), por isso precisa de um servidor HTTP local — não abre direto como arquivo.

**Opção 1 — VS Code:** instale a extensão [Live Server (Ritwick Dey)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), clique com botão direito em `index.html` → **Open with Live Server**.

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
  nome:     'nome-do-repo',
  desc:     'Descrição curta do projeto.',
  lang:     'TypeScript',
  langCor:  '#3178c6',
  tags:     ['React', 'Next.js'],
  stars:    0,
  repo:     'https://github.com/Julio-Lopes/nome-do-repo',
  demo:     '',           // URL ao vivo — deixe '' para não exibir o botão
},
```

**Cores por linguagem:**

| Linguagem  | Cor       |
|------------|-----------|
| JavaScript | `#f7df1e` |
| TypeScript | `#3178c6` |
| Python     | `#3572A5` |
| Java       | `#b07219` |
| PHP        | `#4F5D95` |
| C#         | `#178600` |
| HTML       | `#e34c26` |
| CSS        | `#563d7c` |

---

## ⚙️ Onde mexer

| O que alterar | Arquivo |
|---|---|
| Texto do sobre | `components/sobre.js` — array `paragrafos` |
| Skills e tecnologias | `components/stack.js` — array `categorias` |
| Experiências profissionais | `components/experiencia.js` — array `experiencias` |
| Formação acadêmica | `components/formacao.js` — array `formacoes` |
| Projetos | `components/projetos.js` — array `projetos` |
| Certificações | `components/certificacoes.js` — array `certificacoes` |
| Links de contato | `components/contato.js` — array `contatos` |
| Velocidade do grid animado | `style.css` — `@keyframes floor-scroll` (valor `2.6s`) |
| Paleta de cores | `style.css` — variáveis no bloco `:root` |

---

## 🌐 Deploy no GitHub Pages

1. Suba os arquivos para o repositório:
```bash
git add .
git commit -m "atualiza portfolio"
git push
```
2. Acesse **Settings → Pages → Source → main → / (root) → Save**
3. Aguarde 1–2 minutos — a URL aparece na mesma página

---

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript ES2022
- ES Modules (sem bundler)
- [GitHub REST API](https://docs.github.com/en/rest) — stats em tempo real
- [Tabler Icons](https://tabler.io/icons) — ícones
- [Inter](https://fonts.google.com/specimen/Inter) + [JetBrains Mono](https://www.jetbrains.com/lp/mono/) — tipografia

---

## 📄 Licença

MIT — sinta-se livre para usar como base para o seu próprio portfolio.