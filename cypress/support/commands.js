const {users, password} = Cypress.env()

//login via UI
Cypress.Commands.add('loginSauce',(userType) => {
    cy.visit('https://saucedemo.com/')
    cy.get('[data-test="username"]').type(users[userType])
    cy.get('[data-test="password"]').type(password)
    cy.get('[data-test="login-button"]').click()
})
