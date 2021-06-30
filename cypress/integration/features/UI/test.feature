@UI
Feature: Navigate to Web application and verifiying title

    In order to verify the navigation to the web app
    
    @smoke
    Scenario: Perform Navigation
        Given I open the web app url
        Then I verify title of web page as 'OrangeHRM'
