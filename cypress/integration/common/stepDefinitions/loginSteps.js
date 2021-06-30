When('I fill the required fields', () => {
    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').type('admin123');
    cy.get('#btnLogin').click();
}); 
Then( 'I verify that user name is displayed in the page', () => {    
    let expected_result = 'Welcome';
    cy.get('#welcome').contains(expected_result);
});