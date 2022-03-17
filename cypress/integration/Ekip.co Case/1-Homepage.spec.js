/// <reference types="cypress" />
import './2-Slider.spec.js'
import './3-Kategoriler.spec.js'
import './4-Tüm Ürünler.spec.js'
import './5-Ürün Favori Ekleme.spec.js'
import './6-Favoriler.spec.js'
import './7-Ürünler.spec.js'
import './8-Sosyal Medya İkonlar.spec.js'

const { expect } = require("chai");

describe('1-Homepage', function () {
    beforeEach(() => {
      cy.visit('http://localhost:4200/');
    });
  
    it ('1-1 Home Page should contain all related elements', () => {
      cy.url().should('eq', 'http://localhost:4200/shopping/home')
      cy.contains('Ürünler').should('be.visible')
      cy.contains('Anasayfa').should('be.visible')
      cy.contains('Favoriler').should('be.visible')
      cy.get('#slide-ngb-slide-0 > a > .picsum-img-wrapper > img').should('be.visible')
      cy.get('.carousel-control-next-icon').click()
      cy.get('#slide-ngb-slide-1 > a > .picsum-img-wrapper > img').should('be.visible')
      cy.get('.carousel-control-next-icon').click()
      cy.get('#slide-ngb-slide-2 > a > .picsum-img-wrapper > img').should('exist')
      cy.contains('Kategoriler').should('be.visible')
      cy.contains('Elektronik').should('be.visible')
      cy.contains('Moda').should('be.visible')
      cy.contains('Kitap').should('be.visible')
      cy.get('[href="http://www.instagram.com"] > .mr-1 > .bi').should('be.visible')
      cy.get('[href="http://www.twitter.com"] > .mr-1 > .bi > path').should('be.visible')
      cy.get('[href="http://www.facebook.com"] > .mr-1 > .bi > path').should('be.visible')
    })
  });
    
    

