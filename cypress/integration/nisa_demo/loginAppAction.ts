it('login app action', () => {
    cy.visit('/')
    cy.window().then(({app}) => {
        console.log('I am here : ' + app);
        app.loggedIn.active = true;
    });
})