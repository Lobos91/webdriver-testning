const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I am on IMDBs Home Page$/, async() => await browser.url('https://www.imdb.com/'))

When(/^I enter the search term "([^"]*)" in the "([^"]*)" search field$/, async(search_text,input_id) => {
    await $(input_id).setValue(search_text)
    expect(await $(input_id).getValue()).toBe(search_text)
});

Then(/^I see a listbox containing the text "([^"]*)"$/, async(expected_text) => {

    await expect(await $('.imdb-header__search-menu')).toExist()
                                // toBeDisplayed()
                                // toBeExisting()
                                // toBePresent()
                                // toBeDisplayedInViewport()
    await expect(await $('.imdb-header__search-menu')).toHaveTextContaining(expected_text);
   
});

When(/^I hit the Return key$/, async () => {
    await browser.keys("\uE007")
    // await $('[data-testid="search-result--link"]').click()
});

Then(/^I should land on the result page$/, async () =>{
    await expect(await $('#main > div > h1')).toHaveText('Results for \"Arcane\"') 
    expect(browser).toHaveUrlContaining("/find?q=Arcane")
});
