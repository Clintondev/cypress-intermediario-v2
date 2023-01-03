describe('logout', ()=> {
    beforeEach(()=>{
        cy.login()
        cy.visit('/')
    })

    it('sucessfully',()=>{
        cy.logout()

        cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
})