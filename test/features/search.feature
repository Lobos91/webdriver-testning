 Feature: Search IMDB All
     "As a user I want to search IMDB for all kinds of results, that want to find."

     Scenario: Get search suggestions in the suggestions box
        Given I am on IMDBs Home Page
        When I enter the search term "How I" in the "#suggestion-search" search field
        Then I see a listbox containing the text "How I"

    Scenario: Get no results in the suggestions box
        Given I am on IMDBs Home Page
        When I enter the search term "Gibberishsearchterm" in the "#suggestion-search" search field
        Then I see a listbox containing the text "No results found."

    Scenario: Get more results on a seperate Results page
        Given I am on IMDBs Home Page
        When I enter the search term "Arcane" in the "#suggestion-search" search field
        And I hit the Return key
        Then I should land on the result page
