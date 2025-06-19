# 🚀 Automação de Testes em Cypress - SauceDemo

Este repositório contém os testes automatizados utilizando o [Cypress](https://www.cypress.io/) para a aplicação [SauceDemo](https://www.saucedemo.com/). Os testes são feitos em ambiente web, sem acesso ao código-fonte.

## 📌 Índice

1. [⚙️ Pré-requisitos](#pré-requisitos)  
2. [📥 Instalação e Configuração](#instalação-e-configuração)  
3. [📂 Estrutura do Projeto](#estrutura-do-projeto)  
4. [🧪 Testes](#testes)  

---

## ⚙️ Pré-requisitos

- Node.js instalado (recomendo versão LTS atual)  
- npm instalado (vem junto com Node.js)  

---

## 📥 Instalação e Configuração

No diretório do projeto, execute os comandos abaixo para instalar e iniciar os testes:

```bash
npm install
npx cypress open
```

---

## 📂 Estrutura do Projeto

```bash
cypress/
├── e2e/
│   ├── login/
│   ├── ordenacao/
│   └── validar-produtos/
├── support/
│   ├── commands.js
│   └── e2e.js
cypress.env.json
.gitignore
package.json
README.md
```
---

## 🧪 Testes

Os testes automatizados cobrem:

* Login (sucesso e falhas)
* Ordenação de produtos (preço e nome)
* Validação de erros com usuário `error_user`

---

**Feito por João Vitor Hayden Araújo**
