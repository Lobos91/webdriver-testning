const { Given, When, Then } = require('@wdio/cucumber-framework');


// -------------------- Scenario 1 -------------------//
//               Logging into an account
// ---------------------------------------------------//


Given(/^I am on the IMDB homepage I am not logged in to my account$/, async () => {
	await browser.url(`https://imdb.com/`);
});

When(/^I click the Sign In button$/, async () => {
	await $('#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div._3x17Igk9XRXcaKrcG3_MXQ.navbar__user.UserMenu-sc-1poz515-0.lkfvZn > a').click();
});

When(/^I click the Sign in with IMDB button$/, async () => {
	await $('#signin-options > div > div:nth-child(2) > a:nth-child(1)').click();
});

When(/^I enter my email "([^"]*)"$/, async (args1) => {
    await $('#ap_email').click();
    await $('#ap_email').setValue(args1);
    expect($('#ap_email')).toHaveValue(args1);
});

When(/^I enter my password "([^"]*)"$/, async (args1) => {
    await $('#ap_password').click();
    await $('#ap_password').setValue(args1);
    expect($('#ap_password')).toHaveValue(args1);
});

When(/^I click Sign-In$/, async () => {
	await $('#signInSubmit').click();
});

Then(/^I should be signed in$/, async () => {
	await expect(browser).toHaveUrlContaining(`?ref_=login`);
});


// -------------------- Scenario 2 -------------------//
//                 Seeing my watchlist
// ---------------------------------------------------//


Given(/^I am on the IMDB homepage and I am logged in to my account$/, async () => {
	await expect(browser).toHaveUrlContaining(`?ref_=login`);
});

When(/^I click on my account$/, async () => {
	await $('#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div._3x17Igk9XRXcaKrcG3_MXQ.navbar__user.UserMenu-sc-1poz515-0.lkfvZn > div > label.ipc-button.ipc-button--single-padding.ipc-button--center-align-content.ipc-button--default-height.ipc-button--core-baseAlt.ipc-button--theme-baseAlt.ipc-button--on-textPrimary.ipc-text-button.navbar__flyout__text-button-after-mobile.navbar__user-menu-toggle__button').click();
});

When(/^I click Your Watchlist$/, async () => {
	await $('#navUserMenu-contents > ul > a:nth-child(4)').click();
});

Then(/^I should see my watchlist$/, async () => {
	await expect(browser).toHaveUrlContaining(`/user/ur146424550/watchlist`);
});


// -------------------- Scenario 2 -------------------//
//              Adding a bio to my profile
// ---------------------------------------------------//


Given(/^I am on the IMDB website and I am logged into an account$/, async () => {
	await expect(browser).toHaveUrlContaining("https://www.imdb.com");
    await expect($('#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div._3x17Igk9XRXcaKrcG3_MXQ.navbar__user.UserMenu-sc-1poz515-0.eIWOUD > div > label.ipc-button.ipc-button--single-padding.ipc-button--center-align-content.ipc-button--default-height.ipc-button--core-baseAlt.ipc-button--theme-baseAlt.ipc-button--on-textPrimary.ipc-text-button.navbar__flyout__text-button-after-mobile.navbar__user-menu-toggle__button > div > span')).toBeDisplayed();

});

When(/^I click on my account in the header$/, async () => {
	await $('#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > div._3x17Igk9XRXcaKrcG3_MXQ.navbar__user.UserMenu-sc-1poz515-0.eIWOUD > div > label.ipc-button.ipc-button--single-padding.ipc-button--center-align-content.ipc-button--default-height.ipc-button--core-baseAlt.ipc-button--theme-baseAlt.ipc-button--on-textPrimary.ipc-text-button.navbar__flyout__text-button-after-mobile.navbar__user-menu-toggle__button').click();
});

When(/^I click Account Settings$/, async () => {
	await $('#navUserMenu-contents > ul > a:nth-child(7)').click();
});

When(/^I click Edit Profile$/, async () => {
	await $('#main > div > div:nth-child(1) > ul > li:nth-child(1) > a').click();
});

When(/^I enter "([^"]*)" into the bio text box$/, async (args1) => {
	await $('#main > div > div:nth-child(2) > div:nth-child(2) > textarea').click();
	await $('#main > div > div:nth-child(2) > div:nth-child(2) > textarea').setValue(args1);
    expect($('#main > div > div:nth-child(2) > div:nth-child(2) > textarea')).toHaveValue(args1);
});

When(/^I click the Save Description button$/, async () => {
	await $('#main > div > div:nth-child(2) > div:nth-child(2) > div > div.auth-button-link.auth-button--primary').click();
});

Then(/^I should return to the account page$/, () => {
	expect(browser).toHaveUrlContaining("?ref_=nv_usr_pers_1");
});
