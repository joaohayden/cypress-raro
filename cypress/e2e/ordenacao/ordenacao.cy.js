describe("Testes de Ordenação de Produtos no SauceLabs", () => {

beforeEach(() => {
    cy.visit("https://saucedemo.com/")
    cy.loginSauce("standard")
})

it("Verificar se ao ordenar pelo maior preço, sistema retorna dados a partir do preço e nome do produto mais caro", () => {

    cy.get('[data-test="product-sort-container"]').select("hilo")

    //converte os textos em numeros e armazena em um array
    cy.get('[data-test="inventory-item-price"]').then(($precos) => {
      const precos = Array.from($precos, (el) =>
        parseFloat(el.innerText.replace("$", "")))

      // verifica se o array está ordenado do maior para o menor
      for (let i = 0; i < precos.length - 1; i++) {
        expect(precos[i]).to.be.gte(precos[i + 1])
      }

      const precoMaisCaro = precos[0]

      cy.get('[data-test="inventory-item-name"]').first().then(($nome) => {
        const produtoMaisCaro = $nome.text()
        cy.log(`O produto mais caro é: ${produtoMaisCaro} que custa $${precoMaisCaro}`)
    })
    })
})

it("Verificar se ao ordenar de Z a A, sistema retorna o primeiro produto e preço corretos", () => {
    cy.get('[data-test="product-sort-container"]').select("za")

    // pega os nomes dos produtos visíveis e cria um array com eles
    cy.get('[data-test="inventory-item-name"]').then(($nomes) => {
    const nomes = Array.from($nomes, el => el.innerText)
    
    // Verifica se o array está ordenado do Z para o A
    for(let i = 0; i < nomes.length - 1; i++) {
      expect(nomes[i].localeCompare(nomes[i + 1])).to.be.gte(0)
    }

    const primeiroProduto = nomes[0]

    // pega o preço do primeiro produto listado e mostra no log
    cy.get('[data-test="inventory-item-price"]').first().then($preco => {
      const precoPrimeiro = $preco.text()
      cy.log(`O primeiro produto é: ${primeiroProduto} que custa ${precoPrimeiro}`)
    })
})
})
})
