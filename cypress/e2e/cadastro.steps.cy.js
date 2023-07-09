/// <reference types="cypress" />

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import '../support/commands.js'
import 'cypress-xpath';


describe('Validar cadastro de usuário', () => {
  beforeEach(() => {
    cy.visit('https://tinnova-teste-qa.vercel.app/');
  });

  it('que estou logado no sistema da Tinnova', () => {
    cy.get('.sc-eCYdqJ.fTMVGV').should('exist');
    cy.get('.sc-eCYdqJ.fTMVGV').should('exist');
  });

   it('clico no botão adicionar e preencho todos os campos', () => {
    cy.get('.sc-bczRLJ').should('exist');
    cy.get('.sc-bczRLJ').click();
    cy.get('[style="width: 15%; justify-content: flex-start;"] > p').should('exist');
    cy.get('.sc-hKMtZM > :nth-child(3)').click();
    cy.get('.sc-crXcEl.YNbPM').should('exist').contains('Nome completo');
    cy.get('.sc-crXcEl.YNbPM').should('exist').contains('E-mail');
    cy.get('input[name="name"].sc-iqcoie.jJJLOb').should('exist');
    cy.get('input[name="name"].sc-iqcoie.jJJLOb').click();

    cy.get('input[name="name"]').click();
    cy.get('input[name="name"]').type('Leandro teste');
    cy.get('input[name="email"]').type('leandro@teste.com');
    cy.get('input[name="cpf"]').type('69586955588');
    cy.get('input[name="phone"]').type('11975664435');

    cy.get('.sc-bczRLJ').click();
   });

  //it('preencho todos os dados corretamente', () => {
    
    // cy.get('input[name="name"].sc-iqcoie.jJJLOb').should('exist');
    // cy.get('input[name="name"].sc-iqcoie.jJJLOb').click();

    // cy.get('input[name="name"]').click();
    // cy.get('input[name="name"]').type('Leandro teste');
    // cy.get('input[name="email"]').type('leandro@teste.com');
    // cy.get('input[name="cpf"]').type('69586955588');
    // cy.get('input[name="phone"]').type('11975664435');
        
  //   it('o sistema retorna para a lista de cadastros exibindo o novo cadastro', () => {
  //  // cy.get('.sc-eCYdqJ.fTMVGV').should('exist');
  // });
    // it('clico no botão adicionar', () => {
  //   cy.get('.sc-eCYdqJ.fTMVGV').should('exist');
  // });
    // it('clico no botão adicionar', () => {
  //   cy.get('.sc-eCYdqJ.fTMVGV').should('exist');
  // });
    // it('clico no botão adicionar', () => {
  //   cy.get('.sc-eCYdqJ.fTMVGV').should('exist');
  // });
});



// Scenario: Validar cadastro de usuário
//   Given que estou logado no sistema da Tinnova
//   And clico no botão adicionar
//   When preencho todos os dados corretamente
//   Then o sistema retorna para a lista de cadastros exibindo o novo cadastro