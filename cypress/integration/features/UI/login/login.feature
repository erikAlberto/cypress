Feature: Login into application

    In order to verify the login functionality

    @smoke @login
    Scenario: Verify that the user is able to login by entering valid credentials
        Given I open the web app url
        When I fill the required fields
        Then I verify that user name is displayed in the page
