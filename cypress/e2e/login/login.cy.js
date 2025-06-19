function verifyErrorMessage(expectedText) {
  cy.get('[data-test="error"]')
    .should('be.visible')
    .and('have.text', expectedText)
}

describe('Testes de Login', () => {

beforeEach(() => {
    cy.visit('https://saucedemo.com/')
})

//para evitar que dados sejam expostos no teste e no git, movi os casos de teste de login para o arquivo cypress/support/commands.js. As senhas e usuários são armazenados em cypress.env.json

it('Verificar login realizado com sucesso utilizando usuário e senha válidos', () => {
    cy.loginSauce('standard')   
    
    //valida se estou na home utilizando url e o titulo
    cy.url().should('include', '/inventory.html')
    cy.get('[data-test="title"]').should('have.text', 'Products')
})

// Para o requisito "Deve validar as mensagens de erros", cada teste abaixo está realizando essa validação de forma específica.

it('Verificar erro ao tentar realizar login com usuário não cadastrado', () => {
    cy.loginSauce('invalid')
    verifyErrorMessage('Epic sadface: Username and password do not match any user in this service')
})

it('Verificar erro ao tentar realizar login com senha inválida', () => {
    cy.get('[data-test="username"]').type(Cypress.env('users').standard)
    cy.get('[data-test="password"]').type('invalidPassword')
    cy.get('[data-test="login-button"]').click()
    verifyErrorMessage('Epic sadface: Username and password do not match any user in this service')

})

it('Verificar obrigatoriedade dos campos de usuário e senha na tela de login', () => {
    cy.get('[data-test="login-button"]').click()
    verifyErrorMessage('Epic sadface: Username is required')

    cy.reload()

    cy.get('[data-test="username"]').type(Cypress.env('users').standard)
    cy.get('[data-test="login-button"]').click()
    verifyErrorMessage('Epic sadface: Password is required')

})
})