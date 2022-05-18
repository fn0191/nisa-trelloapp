import { Login } from '../../support/nisa_pageObjects/Login'

const login = new Login;
beforeEach(() => {
    cy.visit('/')
  })

it('signup test', () => {
   // cy.visit('/')
    login.openSignUp();
    login.signUpForm();
    
})

it.only('login test', () => {
  //  cy.visit('/')
    login.openLogin();
    login.loginForm();
    
})