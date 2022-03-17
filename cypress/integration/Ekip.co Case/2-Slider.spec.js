describe('2-Homepage sliders-Anayasayfada sliderları değiştirilebilmelidir', function () {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    });

  it('Siliderlerin kontrol edilmesi', () => {  
    for (let c=0; c<3; c++) {
      if(c!=2) {
        let loc='#slide-ngb-slide-'+c+' > a > .picsum-img-wrapper > img'
        cy.get(loc).should('be.visible')
        cy.get('.carousel-control-next-icon').click()
      } else {console.log('3.Sliderda ilave düzenleme yapılması gerekiyor. Parent css display property için')
      }
    }
  });    
});