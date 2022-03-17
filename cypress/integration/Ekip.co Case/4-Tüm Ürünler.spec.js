describe('4-Ürünler', function () {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    });
  
    it('4-1-Ürünler page should contain and list all 8 products', () => {
        cy.get('#ngb-nav-1').click()
        cy.get('products-list > :nth-child(2)').should('be.visible')
  
        cy.contains('13 inç MacBook Pro').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .d-flex > .lead').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should('be.visible')
  
        cy.contains('64GB iPad').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .d-flex > .lead').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should('be.visible')
  
        cy.contains('iPhone 13 Pro').scrollIntoView().should('be.visible')
        cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .d-flex > .lead').should('be.visible')
        cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should('be.visible')
  
        cy.get('products-list > :nth-child(3)').scrollIntoView().should('be.visible')
        cy.contains('Regular - Tar').scrollIntoView().should('be.visible')
        cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .d-flex > .lead').should('be.visible')
        cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should('be.visible')
  
        cy.contains('Relax - Off White').scrollIntoView().should('be.visible')
        cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .d-flex > .lead').should('be.visible')
        cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should('be.visible')
  
        cy.get('products-list > :nth-child(4)').scrollIntoView().should('be.visible')
        cy.contains('Kendine İyi Davran Güzel İnsan').scrollIntoView().should('be.visible')
        cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .d-flex > .lead').should('be.visible')
        cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should('be.visible')
  
        cy.contains('Ne İçin Varsan Onun İçin Yaşa - Bir Arayışın Romanı').scrollIntoView().should('be.visible')
        cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .d-flex > .lead').should('be.visible')
        cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should('be.visible')
  
        cy.contains('Bilinmeyen Bir Kadının Mektubu').scrollIntoView().should('be.visible')
        cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .d-flex > .lead').should('be.visible')
        cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .d-flex > .add-favorite > .bi > path').should('be.visible')
      });
    });
  