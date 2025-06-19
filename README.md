# 🚀 Automação de Testes em Cypress - SauceDemo

Este repositório contém testes automatizados com [Cypress](https://www.cypress.io/) para a aplicação [SauceDemo](https://www.saucedemo.com/). Os testes são feitos em ambiente web, **sem acesso ao código-fonte da aplicação**.

---

## 📌 Índice

1. [⚙️ Pré-requisitos](#Pré-requisitos)  
2. [📥 Instalação e Configuração](#Instalação-e-Configuração)  
3. [📂 Estrutura do Projeto](#Estrutura-do-Projeto)  
4. [🧪 Testes Automatizados](#Testes-Automatizados)  
5. [🔐 Configuração do Cypress.env.json](#Configuração-do-Cypressenvjson)  
6. [🚀 Como Rodar os Testes](#Como-Rodar-os-Testes)  

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
│   │   └── login.cy.js
│   ├── ordenacao/
│   └── validar-produtos/
├── support/
│   ├── commands.js        # Comandos customizados como login
│   └── e2e.js             # Importa os comandos para os testes
cypress.env.json           # Dados sensíveis (usuários e senhas)
.gitignore
package.json
README.md
```

---

## 🧪 Testes Automatizados

Os testes atualmente cobrem:

✅ Login (usuário válido, inválido e outros tipos)

✅ Ordenação de produtos por nome e preço

✅ Validações específicas com usuários problemáticos (`error_user`, etc)

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
