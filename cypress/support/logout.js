Cypress.Commands.add('logout', ()=>{
    cy.get('.qa-user-avatar').click()
    cy.contains('Sign out').click()
})