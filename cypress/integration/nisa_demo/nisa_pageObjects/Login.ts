export class Login {

    openSignUp() {
        cy
            .get('[data-cy=login-menu]')
            .click();
        cy
            .contains('Sign up here')
            .click();


    }

    signUpForm() {
        cy
            .get('[data-cy=signup-email]')
            .type('nisa2@demo.com');
        cy
            .get('[data-cy=signup-password]')
            .type('1234');

        cy
            .get('[data-cy=signup]')
            .click();

    }

    openLogin() {
        cy
            .get('[data-cy=login-menu]')
            .click();


    }

    loginForm() {
        cy
            .get('[data-cy=login-email]')
            .type('nisa@demo.com')
        cy
            .get('[data-cy=login-password]')
            .type('1234')

        cy
            .get('[data-cy=login]')
            .click()
        cy
            .contains('User is logged in')
            .should("be.visible")

    }

    loginForm_invalid() {
        cy
            .get('[data-cy=login-email]')
            .type('nisa@demo.com')
        cy
            .get('[data-cy=login-password]')
            .type('123x')

        cy
            .get('[data-cy=login]')
            .click()

        cy
            .contains('User is logged in')
            .should("be.visible")

    }

    createBoard() {
        cy
            .get('[data-cy="create-board"]')
            .click()
        cy
            .get('[data-cy="new-board-input"]')
            .type('nisa demo')
        cy
            .contains('Save')
            .click()

    }

    ClickBoardList1() {
        cy
            .get('[data-cy="board-item"]')
            .click()

    }

    clickItemList() {
        cy
            .get('[data-cy="add-list"]')
            .click()

    }

    AddNewItemList() {
        cy
            .get('[data-cy="add-list-input"]')
            .type('item list 1')
        cy
            .get('[data-cy="save"]')
            .click()

    }

    clickNewTask() {
        cy
            .get('[data-cy="new-task"]')
            .click()

    }

    addNewTask() {
        cy
            .get('[data-cy="new-task"]')
            .click({ force: true })
        cy.get('[data-cy="task-input"]')
            .type('new task 1')
        cy
            .get('[data-cy="add-task"]')
            .click()


    }

}
