/* eslint-disable no-undef */
When('I login into application as {string}', UserTypeValue => {
  cy.fixture('credentials').as('credentials');
  cy.log('Value passed in' + UserTypeValue);

  //Use alias and identify the object which matched to the information passed from feature file
  cy.get('@credentials').then(user => {
    // Find the object corresponding to UserType passed in
    let data = user.filter(item => item.usertype == UserTypeValue);
    let value;
    cy.log('filtered data :'+data[0]);
    for(var name in data[0]) {
      value = data[0][name]
      cy.log(name,value);
    }
    cy.get('#txtUsername').type(data[0].username);
    cy.get('#txtPassword').type(data[0].password);
    cy.get('#btnLogin').click();
  });
    
});
When('I fill the required fields', () => {
  /*cy.fixture('example').then(function(data){
    this.data=data
  })*/
  cy.get('#txtUsername').type('Admin');
  cy.get('#txtPassword').type('admin123');
  cy.get('#btnLogin').click();
}); 
Then( 'I verify that user name is displayed in the page', () => {    
  let expected_result = 'Welcome';
  cy.get('#welcome').contains(expected_result);
});
