//glue code for steps
Given('I open the web app url', () => {            
  cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login');
}); 
Then( 'I verify title of web page as {string}', title => {    
  cy.title().should('include', title); 
});
