// ************************************************************
// 🐞 Primeiramente, fiz uma análise exploratória na aplicação.
// Ao testar com o usuário "error_user", encontrei os comportamentos abaixo:
// 
// 1. Ordenação por nome e preço não funcionam corretamente.
// 2. Botão "Add to cart" funcionam apenas para alguns produtos.
// 3. O botão "Remove" na listagem de produtos não remove o item do carrinho.
// 4. O botão "Remove" na página de detalhes do produto também não funciona.
//
// ✅ Esses comportamentos foram mapeados e serão cobertos por testes automatizados para garantir que não voltem a acontecer após correções futuras.

// 🔴 Nos testes abaixo estou utilizando o user "standard". Caso queira que os testes reprovem pode usar o "error" e rodar os testes
// ************************************************************


// Para verificar os erros, troque o usuário para "error" no cy.loginSauce

describe("Validação de produtos utilizando usuário padrão", () => {

beforeEach(() => {
    cy.loginSauce("standard")
})

it("Verificar se a ordenação por nome e preço funciona corretamente para o usuário error_user", () => {
  cy.on('window:alert', (msgErro) => {
    expect(msgErro, "Erro foi encontrado na ordenação").to.not.contain("Sorting is broken!")
  })
  cy.get('[data-test="product-sort-container"]').select("hilo")
})

it("Verificar se é possível adicionar ao carrinho todos os produtos listados", () => {
cy.get('[data-test^="add-to-cart-"]').then(($botoes) => {
    const total = $botoes.length
    
  // Clica em todos os botões e verifica se viraram "Remove"
  cy.wrap($botoes).each(($btn) => {
    const dataTestAntes = $btn.attr('data-test') //pega data test atual
    const dataTestDepois = dataTestAntes.replace('add-to-cart', 'remove') //pega novo data test

    cy.wrap($btn).click() //clico em todos os botoes add disponiveis
    cy.get(`[data-test="${dataTestDepois}"]`).should('exist') //verifica se mudou p remove
  })
    
  cy.get('[data-test="shopping-cart-badge"]').should('have.text', `${total}`) //compara clicks com qtd add
  })
})


it("Verificar se o botão 'Remove' na listagem de produtos remove o item do carrinho com o usuário error_user", () => {
  cy.get('[data-test^="add-to-cart-"]').then(($botoes) => {
    const total = $botoes.length
    
  // Clica em todos os botões e verifica se viraram "Remove"
  cy.wrap($botoes).each(($btn) => {
    const dataTestAntes = $btn.attr('data-test') //pega data test atual
    const dataTestDepois = dataTestAntes.replace('add-to-cart', 'remove') //pega novo data test

  cy.wrap($btn).click() //clico em todos os botoes add disponiveis
  cy.get(`[data-test="${dataTestDepois}"]`).should('exist') //verifica se mudou p remove
  })
    
  cy.get('[data-test="shopping-cart-badge"]').should('have.text', `${total}`) //compara clicks com qtd add

  // Remove todos os produtos, um a um, e verifica se o badge vai diminuindo
  for (let i = total - 1; i >= 0; i--) {
    cy.get('[data-test^="remove-"]').first().click()
    if (i > 0) {
      cy.get('[data-test="shopping-cart-badge"]').should('have.text', `${i}`) // mostra -1 no badge
    } else {
      cy.get('[data-test="shopping-cart-badge"]').should('not.exist') // se zera, badge desaparece
    }
  }
  })
})

it.only("Verificar se o botão 'Remove' na página do produto remove o item do carrinho", () => {
  cy.get('[data-test="inventory-item-name"]').then(($produtos) => {
    
    const total = $produtos.length
    
    for (let i = 0; i < total; i++) {
      cy.get('[data-test="inventory-item-name"]').eq(i).click()
      cy.get('[data-test="add-to-cart"]').click()
      cy.get('[data-test="remove"]').should('exist')
      cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
      cy.get('[data-test="remove"]').click()
      cy.get('[data-test="add-to-cart"]').should('exist')
      cy.get('[data-test="shopping-cart-badge"]').should('not.exist')
      cy.go('back')
    }
  })
})

})
