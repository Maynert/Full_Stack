describe('Testing aplplication', () => {

    it('check content in the page', () => {
        cy.visit('http://localhost:3005')
        cy.get('#title').should(($p) => {
            expect($p.first()).to.contain('Hello World')
        }).log()
    })
}) 