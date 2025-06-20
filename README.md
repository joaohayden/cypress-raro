# 🚀 Automação de Testes em Cypress - SauceDemo

Este repositório contém os testes funcionais em [Cypress](https://www.cypress.io/) da prova técnica para vaga de QA na Raro Labs. Foi utilizada a aplicação [SauceDemo](https://www.saucedemo.com/). Os testes são feitos em ambiente web, **sem acesso ao código-fonte da aplicação**.

---

## 📌 Índice

1. [⚙️ Pré-requisitos](#%EF%B8%8F-pré-requisitos)  
2. [📥 Instalação e Configuração](#-instalação-e-configuração)  
3. [📂 Estrutura do Projeto](#-estrutura-do-projeto)  
4. [🧪 Testes Automatizados](#-testes-automatizados)  
5. [🔐 Configuração do Cypress.env.json](#-configuração-do-cypressenvjson)  
6. [🚀 Como Rodar os Testes](#-como-rodar-os-testes)  

---

## ⚙️ Pré-requisitos

Antes de tudo, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- npm (vem com o Node.js)

---

## 📥 Instalação e Configuração

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/joaohayden/cypress-raro.git
cd cypress-raro
npm install
```

---

## 📂 Estrutura do Projeto

```bash
cypress/
├── e2e/
│   ├── login/
│   │   └── login.cy.js              # Testes de login
│   ├── ordenacao/
│   │   └── ordenacao.cy.js          # Testes de ordenação de produtos
│   └── validar-produtos/
│       └── validarProdutos.cy.js    # Testes de funcionalidades com produtos
├── support/
│   ├── commands.js                  # Comandos customizados como login
│   └── e2e.js                       # Arquivo de suporte geral
cypress.env.json                     # Dados sensíveis (usuários e senhas)
.gitignore
package.json
README.md
```

---

## 🧪 Testes Automatizados

Os testes atualmente cobrem:

✅ Login (usuário válido, inválido e tipos específicos)

✅ Ordenação de produtos por nome e preço

✅ Validação de botões "Add to cart" e "Remove"

✅ Verificação do carrinho (quantidade, inclusão e remoção)

✅ Comportamentos esperados e falhas com usuários problemáticos (error_user, etc)

---

## 🔐 Configuração do `cypress.env.json`

Esse arquivo armazena os dados sensíveis (como usuários e senhas de teste) fora do código-fonte dos testes.

### Exemplo de estrutura:

```json
{
  "users": {
    "standard": "standard_user",
    "locked": "locked_out_user",
    "problem": "problem_user",
    "performance": "performance_glitch_user",
    "error": "error_user",
    "visual": "visual_user",
    "invalid": "invalid_user"
  },
  "password": "secret_sauce"
}
```

> ⚠️ **Importante**: Esse arquivo está no `.gitignore` por segurança. Crie o seu manualmente antes de rodar os testes.

---

## 🚀 Como Rodar os Testes

![Demonstração dos testes](./assets/qa.gif)

### 🔍 Abrir interface interativa (GUI):

```bash
npx cypress open
```

### 🧪 Rodar todos os testes direto no terminal:

```bash
npx cypress run
```

### ▶️ Rodar um teste específico:

```bash
npx cypress run --spec "cypress/e2e/login/login.cy.js"
```

---

**Feito com 💻 por João Vitor Hayden Araújo**
