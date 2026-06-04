# 🗂️ Portfolio — Julio Cesar Lopes

> Site de apresentação pessoal com design dark, sidebar de navegação, seção de projetos do GitHub e stats em tempo real via API.

🔗 [Ver]([https://julio-lopes.github.io/portfolio](https://julio-lopes.github.io/))

---

## ✨ Funcionalidades

- Layout split sidebar — navegação fixa à esquerda, conteúdo à direita
- Stats de repositórios e linguagens buscados em tempo real via **GitHub API**
- Seção de projetos com cards linkados diretamente aos repositórios
- Navegação ativa sincronizada com scroll via **IntersectionObserver**
- Scroll suave entre seções
- Design responsivo para mobile
- Zero dependências — HTML, CSS e JS puros com ES Modules

---

## 🗂️ Estrutura do projeto

```
portfolio/
├── index.html                  # Entrada da aplicação
├── style.css                   # Estilos globais
├── main.js                     # Orquestra e monta os componentes
└── components/
    ├── sidebar.js              # Logo, navegação e contato
    ├── sobre.js                # Resumo profissional e skills
    ├── experiencia.js          # Histórico de empregos e formação
    ├── projetos.js             # Stats do GitHub + grid de repos ← edite aqui
    ├── certificacoes.js        # Certificações Oracle
    └── contato.js              # Links de contato
```

---

## 🚀 Rodando localmente

O projeto usa **ES Modules** (`type="module"`), por isso precisa de um servidor HTTP local — não abre direto como arquivo.

**Opção 1 — VS Code:**
Instale a extensão [Live Server (Ritwick Dey)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), clique com botão direito em `index.html` → **Open with Live Server**.

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

## ➕ Como adicionar um repositório

Abra `components/projetos.js` e adicione um objeto ao array `repos`:

```js
{
  nome:  'nome-do-repo',
  desc:  'Descrição curta do projeto.',
  lang:  'TypeScript',
  cor:   '#3178c6',   // cor da linguagem (veja tabela abaixo)
  stars: 0,
  url:   'https://github.com/Julio-Lopes/nome-do-repo',
  tags:  ['React', 'Next.js'],
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

## 🌐 Deploy no GitHub Pages

1. Crie um repositório público no GitHub
2. Suba os arquivos:
```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/Julio-Lopes/REPO.git
git push -u origin main
```
3. Acesse **Settings → Pages → Source → main → / (root) → Save**
4. Aguarde 1~2 minutos — a URL aparece na mesma página

---

## 🛠️ Tecnologias

- HTML5, CSS3, JavaScript (ES2022)
- ES Modules (sem bundler)
- [GitHub REST API](https://docs.github.com/en/rest) — stats em tempo real
- [Tabler Icons](https://tabler.io/icons) — ícones
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) + [Inter](https://fonts.google.com/specimen/Inter) — tipografia

---

## 📄 Licença

MIT — sinta-se livre para usar como base para o seu próprio portfolio.
