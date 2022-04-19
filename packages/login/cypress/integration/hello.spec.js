describe('Landing', () => {

    it('checks for login message', () => {
        cy.visit('http://localhost:3001')
        cy.contains('LOGIN');
    })
})