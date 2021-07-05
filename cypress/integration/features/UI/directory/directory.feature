Feature: Personal directory 

    As a web user, I want search people according to criteria so that get basic information.

    @regression
    Scenario Outline: Verify that the Search functionality is working according the parameters set in the available filters
        Given I open the web app url
        And I login into application as 'Admin'
        And I go to "directory"
        When I search <name> with <job title> in <location>
        Then I verify that <result> is displayed

        Examples:
        | name            | job title               | location             | result                  |
        | Charlie Carter  | All                     | All                  | Charlie Carter          |
        |                 | Database Administrator  | All                  | Database Administrator  |
        |                 | All                     | HQ - CA, USA         | HQ - CA                 |
        | Cecil Bonaparte | Software Engineer       | HQ - CA, USA         | Cecil Bonaparte         |
        |                 | Software Engineer       | Canadian Regional HQ | Software Engineer       |
