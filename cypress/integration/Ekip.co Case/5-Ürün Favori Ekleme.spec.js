describe('5-Her bir ürün ayrı ayrı favorilere eklenebilir çıkarılabilir olmalıdır.', function (){
    
    it('5-Ürün favoriye eklenebilir çıkarılabilir olmalıdır ', () => {
      cy.visit('http://localhost:4200/');
      cy.get('#ngb-nav-2').click()
      
      cy.get('body').then( (body)=>{
        let b=body.find(' .card > .card-body > .d-flex > .add-favorite > .bi > path').length
        for (let a=1; a<=b;a++) {
          let z=':nth-child('+a+') > .card > .card-body > .d-flex > .add-favorite > .bi > path'  
          cy.get(z).click() }
      })
        cy.get(' .card > .card-body > .d-flex > .add-favorite > .bi > path').should('have.length', 0)
        
        cy.get('#ngb-nav-1').click()
        cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite > .bi').click()
        cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite > .bi').click()
        cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .d-flex > .add-favorite > .bi').click()
        cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite > .bi').click()
        cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite > .bi').click()
        cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite > .bi').click()
        cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite > .bi').click()
        cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .d-flex > .add-favorite > .bi').click()
        
        cy.get('#ngb-nav-2').click()
        cy.get('.card > .card-body > .d-flex > .add-favorite > .bi > path').should('have.length', 8)
    
  })
})