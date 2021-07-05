/* eslint-disable no-undef */
//glue code for steps
Given('I open the web app url', () => {            
  cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
}); 

Then( 'I verify title of web page as {string}', title => {    
  cy.title().should('include', title); 
});

And( 'I go to {string}', value => {
  cy.get(`#menu_${value}_viewDirectory`).click(); 
  
});

When( /^I search ([^"]*) with ([^"]*) in ([^"]*)$/, (name, job_title, location) => {
  cy.log(name)
  if (name.length != 0) {
    cy.get('#searchDirectory_emp_name_empName').type(name);
  } else {
    cy.get('#searchDirectory_job_title').select(job_title);
    cy.get('#searchDirectory_location').select(location);
  }
  cy.get('#searchBtn').click();
});

Then( /^I verify that ([^"]*) is displayed$/, result => {
  cy.get('#resultTable').find('tbody tr').should('contain', result).find('td')
});
