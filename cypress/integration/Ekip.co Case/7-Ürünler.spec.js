describe ('7-Tek bir ürüne tıklandığında o ürünün adı fiyatı ve görseli bulunmalıdır.', function () {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
      cy.get('#ngb-nav-1').click()       }); 
    
      it ('Ürünler sayfasından 1. Ürün bilgilerini göstermelidir', () => {
        let abc = function () {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/1')
        cy.contains('13 inç MacBook Pro')
        cy.contains('17499₺')
        cy.contains('Apple M1 çip')
        cy.go('back')   }
   for (var a=0; a<4; a++) {
    if      (a==1) { cy.get(':nth-child(2) > :nth-child(1) > .card > .card-img-top').click()
    abc ()    } 
    else if (a==2) { cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .card-title').click()
    abc ()     }
    else if (a==3) { cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .card-text').click()
    abc ()     }
    else if (a==4) { cy.get(':nth-child(2) > :nth-child(1) > .card > .card-body > .d-flex > .lead').click()
    abc ()     }
   } })
    it ('Ürünler sayfasından 2. Ürün bilgilerini göstermelidir', () => {
    let abc2 = function () {
    cy.url().should('eq', 'http://localhost:4200/shopping/product/2')
    cy.contains('64GB iPad')
    cy.contains('4799₺')
    cy.contains('True Tone')
    cy.go('back')
  }
   for (var a=0; a<4; a++) {
    if      (a==1) { cy.get(':nth-child(2) > :nth-child(2) > .card > .card-img-top').click()
    abc2 ()  } 
    else if (a==2) { cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .card-title').click()
    abc2 ()     }
    else if (a==3) { cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .card-text').click()
    abc2 ()    }
    else if (a==4) { cy.get(':nth-child(2) > :nth-child(2) > .card > .card-body > .d-flex > .lead').click()
    abc2 ()   }
   }
})
it ('Ürünler sayfasından 3. Ürün bilgilerini göstermelidir', () => {            
    let abc3 = function () {
    cy.url().should('eq', 'http://localhost:4200/shopping/product/3')
    cy.contains('iPhone 13 Pro')
    cy.contains('19999₺')
    cy.contains('Yepyeni Pro kamera sistemi')
    cy.go('back')       }

   for (var a=0; a<4; a++) {
    if      (a==1) { cy.get(':nth-child(2) > :nth-child(3) > .card > .card-img-top').click()
    abc3 ()  } 
    else if (a==2) { cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .card-title').click()
    abc3 ()     }
    else if (a==3) { cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .card-text').click()
    abc3 ()    }
    else if (a==4) { cy.get(':nth-child(2) > :nth-child(3) > .card > .card-body > .d-flex > .lead').click()
    abc3 ()   }
   }
})
it ('Ürünler sayfasından 4. Ürün bilgilerini göstermelidir', () => {         
        let abc4 = function () {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/4')
        cy.contains('Regular - Tar')
        cy.contains('105₺')
        cy.contains('Kaft\'ın en sade hali')
        cy.go('back') }
   for (var a=0; a<4; a++) {
    if      (a==1) { cy.get(':nth-child(4) > :nth-child(1) > .card > .card-img-top').click()
    abc4 ()  } 
    else if (a==2) { cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .card-title').click()
    abc4 ()     }
    else if (a==3) { cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .card-text').click()
    abc4 ()    }
    else if (a==4) { cy.get(':nth-child(4) > :nth-child(1) > .card > .card-body > .d-flex > .lead').click()
    abc4 ()   }
   }
})
it ('Ürünler sayfasından 5. Ürün bilgilerini göstermelidir', () => {         
        let abc5 = function () {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/5')
        cy.contains('Relax - Off White')
        cy.contains('125₺')
        cy.contains('Regular kalıp tişört')
        cy.go('back') }
   for (var a=0; a<4; a++) {
    if      (a==1) { cy.get(':nth-child(4) > :nth-child(2) > .card > .card-img-top').click()
    abc5 ()  } 
    else if (a==2) { cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .card-title').click()
    abc5 ()     }
    else if (a==3) { cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .card-text').click()
    abc5 ()    }
    else if (a==4) { cy.get(':nth-child(4) > :nth-child(2) > .card > .card-body > .d-flex > .lead').click()
    abc5 ()   }
   }
})
it ('Ürünler sayfasından 6. Ürün bilgilerini göstermelidir', () => {         
        let abc6 = function () {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/6')
        cy.contains('Kendine İyi Davran Güzel')
        cy.contains('15.6₺')
        cy.contains('Sen kendin için bir şey')
        cy.go('back') }
   for (var a=0; a<4; a++) {
    if      (a==1) { cy.get(':nth-child(6) > :nth-child(1) > .card > .card-img-top').click()
    abc6 ()  } 
    else if (a==2) { cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .card-title').click()
    abc6 ()     }
    else if (a==3) { cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .card-text').click()
    abc6 ()    }
    else if (a==4) { cy.get(':nth-child(6) > :nth-child(1) > .card > .card-body > .d-flex > .lead').click()
    abc6 ()   }
   }
})
it ('Ürünler sayfasından 7. Ürün bilgilerini göstermelidir', () => {         
        let abc7 = function () {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/7')
        cy.contains('Ne İçin Varsan Onun İçin')
        cy.contains('16.8₺')
        cy.contains('Tolstoy Demirden')
        cy.go('back') }
   for (var a=0; a<4; a++) {
    if      (a==1) { cy.get(':nth-child(6) > :nth-child(2) > .card > .card-img-top').click()
    abc7 ()  } 
    else if (a==2) { cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .card-title').click()
    abc7 ()     }
    else if (a==3) { cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .card-text').click()
    abc7 ()    }
    else if (a==4) { cy.get(':nth-child(6) > :nth-child(2) > .card > .card-body > .d-flex > .lead').click()
    abc7 ()   }
   }
})
it ('Ürünler sayfasından 8. Ürün bilgilerini göstermelidir', () => { 
        let abc8 = function () {
        cy.url().should('eq', 'http://localhost:4200/shopping/product/8')
        cy.contains('Bilinmeyen Bir Kadının')
        cy.contains('3.9₺')
        cy.contains('Bilinmeyen Bir Kadının Mektubu (Brief einer Unbekannten)')
        cy.go('back') }
   for (var a=0; a<4; a++) {
    if      (a==1) { cy.get(':nth-child(6) > :nth-child(3) > .card > .card-img-top').click()
    abc8 ()  } 
    else if (a==2) { cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .card-title').click()
    abc8 ()     }
    else if (a==3) { cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .card-text').click()
    abc8 ()    }
    else if (a==4) { cy.get(':nth-child(6) > :nth-child(3) > .card > .card-body > .d-flex > .lead').click()
    abc8 ()   }
   }
}) 
}) 
