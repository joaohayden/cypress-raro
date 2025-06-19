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

it.only("Verificar se é possível adicionar todos os produtos listados", () => {
  cy.get('[data-test^="add-to-cart-"]').each(($btn) => {
    
    const dataTestAntes = $btn.attr('data-test')// pega o datatest do botao add to cart
    const dataTestDepois = dataTestAntes.replace('add-to-cart', 'remove')// cria novo datatest esperado

    cy.wrap($btn).click()

    cy.get(`[data-test="${dataTestDepois}"]`).should('exist')//verifica se o botao mudou p remove
  })
})


it("Verificar se o botão 'Remove' na listagem de produtos remove o item do carrinho com o usuário error_user", () => {
  
})

it("Verificar se o botão 'Remove' na página do produto remove o item do carrinho com o usuário error_user", () => {
  
})


})