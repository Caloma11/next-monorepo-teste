describe('Landing', () => {

    it('checks for welcome message', () => {
        cy.visit('http://localhost:3000')
        cy.contains('WELCOME TO WEB-APP');
    })
})