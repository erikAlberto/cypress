Feature: Login into application

    As a User, I want to log in to the application so that to use the system's functionalities.

    @smoke @login
    Scenario: Verify that the user is able to login by entering valid credentials
        Given I open the web app url
        When I login into application as 'Admin'
        Then I verify that user name is displayed in the page
