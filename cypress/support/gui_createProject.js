Cypress.Commands.add('gui_createProject', project =>{
    cy.visit('/projects/new')

    cy.get('#project_name').type(project.name)
    cy.get('#project_description').type(project.description)
    cy.get('.qa-initialize-with-readme-checkbox').check()
    cy.contains('Create project').click()
})