Feature: Check trailer functions
"As a user i want to find the main trailer for a specific movie and find trailers for Movies thar are coming soon and play the most popular trailer among the latest trailers"

Scenario: Find main trailer for specific movie
    Given I am on the IMDB homepage
    When I enter the text "No time to die" in the "#suggestion-search" field
    And I hit the return key
    And  I click on the first movie search result
    And  I click on the trailer play button
    Then The trailer for no time to die is displayed

Scenario: Find trailers for Movies that are coming soon
    Given I am on the IMDB homepage
    When I open menulist
    And Click on coming soon
    Then List of trailers that are coming soon should be displayed

Scenario: Play the most popular trailer among the latest trailers
    Given I am on the IMDB homepage
    When I open menulist
    And Click on Latest Trailers
    And  I click on the trailer play button1
    Then The highest trending trailer among the latest trailers should be played
