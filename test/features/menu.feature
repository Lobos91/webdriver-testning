Feature: Menu on IMDB page
    "I want to browse the website through the menu."

     Scenario: Visiting Watch Guide through menu button (Desktop)
       
         Given I am on the IMDB homepage Desktop
         When I click the Menu button
         And I click What to Watch submenu
         Then I should be at the What to Watch page
       
     Scenario: Visiting Watch Guide through menu button (Mobile)
         Given I am on the IMDB homepage Mobile
         When I click the Menu button Mobile
         And I click the Watch submenu
         And I click the What to Watch sub-submenu
         And I am at the What to Watch page
         And I click Top Picks category
         Then I should be under Top Picks panel

    Scenario: Browsing Best of 2020 page
        Given I am on the IMDB homepage Desktop
        When I click the Menu button
        And I click Best of 2021 button
        And I should be on Best of 2021 page
        And I proceed to best of 2020 submenu 
        Then I should be on best of 2020 page