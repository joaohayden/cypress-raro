describe('Testes de Login', () => {

//para evitar que dados sejam expostos no teste e no git, movi os casos de teste de login para o arquivo cypress/support/commands.js. As senhas e usuários são armazenados em cypress.env.json

const {users, password} = Cypress.env()

it('Verificar login realizado com sucesso utilizando usuário e senha válidos', () => {
    cy.loginSauce('standard')   
    
    //valida se estou na home utilizando o titulo
    cy.get('[data-test="title"]').should('have.text', 'Products')
})

it('Verificar erro ao tentar realizar login com usuário não cadastrado', () => {
    cy.loginSauce('invalid')
    cy.get('[data-test="error"]')
    .should('be.visible')
    .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
})

})