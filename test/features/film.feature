Feature: Movie page
    "As a user I want to explore the functions of a movie page"

Scenario: Add movie to wishlist

  Given I am on a movie page on IMDB
  When I click on the arrow next to Add to wishlist
  And A prompt with a text "Add to list" is displayed
  Then I close the prompt


Scenario: Play trailer on movie page

  Given I am on a movie page
  When I click on the trailer displayed at the top
  Then Trailer starts playing

Scenario: Go back to movie page and view all reviews

  Given On a movie trailer page
  When I click on back button
  And I return to the movie page
  And I click on user reviews
  Then I see all reviews
  