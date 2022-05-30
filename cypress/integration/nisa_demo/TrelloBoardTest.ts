import { Login } from '../../integration/nisa_demo/nisa_pageObjects/Login'

const login = new Login;
beforeEach(() => {
    cy.visit('/')
  })

it('Signup test', () => {
   // cy.visit('/')
    login.openSignUp();
    login.signUpForm();
    
})

it('Login test', () => {
  //  cy.visit('/')
    login.openLogin();
    login.loginForm();
    
})

it('Create Board test', () => {
  login.openLogin();
  login.loginForm();
  cy.wait(4000)
  login.createBoard();
})

it('Add List test', () => {
  login.openLogin();
  login.loginForm();
  cy.wait(4000)
  login.ClickBoardList1()
  login.clickItemList()
  login.AddNewItemList()
})

it.only('Add Task test', () => {
  login.openLogin();
  login.loginForm();
  cy.wait(4000)
  login.ClickBoardList1()
  login.clickNewTask()
  login.addNewTask()
})

it.only('Login invalid test', () => {
  //  cy.visit('/')
    login.openLogin();
    login.loginForm_invalid();
    
})