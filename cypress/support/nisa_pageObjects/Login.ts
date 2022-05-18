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

    }

}
