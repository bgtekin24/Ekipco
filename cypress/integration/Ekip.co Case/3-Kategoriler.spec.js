describe('3-Kategoriler', function () {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    });
      it('3-1 Elektronik Kategorisine tıkladığında ilgili kategori açılmalı ve ürünler kategoriye uygun olmalıdır', () => {
        cy.get('[ng-reflect-router-link="/shopping/products,1"]').click();
        cy.url().should('eq', 'http://localhost:4200/shopping/products/1')
        cy.contains('Elektronik')
         });
      it('3-2 Moda Kategorisine tıkladığında ilgili kategori açılmalı ve ürünler kategoriye uygun olmalıdır', () => {
        cy.get('[ng-reflect-router-link="/shopping/products,2"]').click();
        cy.url().should('eq', 'http://localhost:4200/shopping/products/2')
        cy.contains('Moda')
        
      });
      it('3-3 Kitap Kategorisine tıkladığında ilgili kategori açılmalı ve ürünler kategoriye uygun olmalıdır', () => {
        cy.get('[ng-reflect-router-link="/shopping/products,3"]').click();
        cy.url().should('eq', 'http://localhost:4200/shopping/products/3')
        cy.contains('Kitap')
      });
    });