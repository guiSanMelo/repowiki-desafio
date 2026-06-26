# RepoWiki

Projeto frontend em React para exibição de repositórios (interface de treino).

## Descrição

Este repositório contém uma aplicação frontend simples construída com React (create-react-app). O objetivo é servir como uma interface para listar/exibir repositórios, com componentes reutilizáveis (`Button`, `Input`, `ItemsRepo`) e uma página principal em `pages/App.js`.

## Estrutura do projeto

- `public/` — arquivos estáticos e `index.html` públicos.
- `build/` — artefatos gerados após o `build`.
- `src/` — código fonte da aplicação:
  - `index.js` — entrada da aplicação.
  - `pages/App.js` — componente principal da app.
  - `components/` — componentes reutilizáveis:
    - `Button/` — botão estilizado.
    - `Input/` — componente de entrada.
    - `ItemsRepo/` — componente que renderiza itens de repositório.
  - `service/api.js` — abstração para chamadas à API.

## Dependências principais

Veja em `package.json` as dependências utilizadas, entre elas:

- `react`, `react-dom`, `react-scripts`
- `styled-components`
- bibliotecas de teste: `@testing-library/*`

## Scripts úteis

Utilize os scripts definidos em `package.json`:

- `npm start` — inicia o modo de desenvolvimento.
- `npm run build` — gera a versão de produção em `build/`.
- `npm run eject` — ejeta a configuração do create-react-app.

## Como rodar localmente

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm start
```

O app ficará disponível em `http://localhost:3000` por padrão.

## Notas para desenvolvedores

- A estilização usa `styled-components` (ver arquivos `styles.js` adjacentes a cada componente).
- `service/api.js` é o lugar para configurar base URL e funções de chamada à API.
- Componentize quando necessário e mantenha estilos isolados em `styles.js`.

## Contribuição

Pull requests são bem-vindos. Abra issues para discutir mudanças maiores.
