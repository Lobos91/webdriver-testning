Feature: Account Managment
    "I want to log in to my account, see my watchlist and manage said account"

    Scenario: Logging into the account

        Given I am on the IMDB homepage I am not logged in to my account
        When I click the Sign In button
        And I click the Sign in with IMDB button
        And I enter my email "yozitaje@maildim.com"
        And I enter my password "abc54321"
        And I click Sign-In
        Then I should be signed in
    
    Scenario: Seeing my watchlist

        Given I am on the IMDB homepage and I am logged into my account
        When I click on my account
        And I click Your Watchlist
        Then I should see my watchlist

    Scenario: Adding a bio to my profile

        Given I am on the IMDB website and I am logged into an account
        When I click on my account in the header
        And I click Account Settings
        And I click Edit Profile
        And I enter "This is me!" into the bio text box
        And I click the Save Description button
        Then I should return to the account page