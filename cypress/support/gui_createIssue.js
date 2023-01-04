Cypress.Commands.add('gui_createIssue', issue=>{
    cy.visit(`/${Cypress.env('user_name')}/${issue.project.name}/issues/new`)

    cy.get('.qa-issuable-form-title').type(issue.title)
    cy.get('.qa-issuable-form-description').type(issue.description)
    cy.contains('Submit issue').click()
})