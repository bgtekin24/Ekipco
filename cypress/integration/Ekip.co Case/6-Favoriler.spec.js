describe ('6-Favorilere tıklandığında favorileredeki ürünler gösterilebilir olmaldıır.', function () {

  beforeEach(() => {
    cy.visit('http://localhost:4200/');
    cy.get('#ngb-nav-2').click()
  });  
  it('Favorilerdeki ürünler gösterilmelidir ', () => {
  cy.url().should('eq', 'http://localhost:4200/shopping/favorites') 
  });
})