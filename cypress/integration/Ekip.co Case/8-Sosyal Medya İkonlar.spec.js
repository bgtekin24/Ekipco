describe ('8-SM ikonlarına tıklandığında ilgili sosyal medya sayfasına götürmelidir.', function () {

    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    }); 
    it ('Twitter linki doğru sayfaya götürmelidir', () => {
     // cy.get('body > app-root > layout-1 > div > footer > div > div > a:nth-child(2)').should('have.attr', 'href').and('include', 'https://twitter.com/')
      cy.get('[href="http://www.instagram.com"] > .mr-1 > .bi').should('be.visible')
      cy.get('[href="http://www.twitter.com"] > .mr-1 > .bi > path').should('be.visible')
      cy.get('[href="http://www.facebook.com"] > .mr-1 > .bi > path').should('be.visible')
    })
    
  })