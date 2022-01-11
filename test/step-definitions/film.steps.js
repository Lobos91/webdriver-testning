const { Given, When, Then } = require("@wdio/cucumber-framework");


// -------------------- Scenario 1 -------------------//
//              Add movie to wishlist
// ---------------------------------------------------//

Given('I am on a movie page on IMDB', async () => {
  await browser.url(`https://www.imdb.com/title/tt1160419/?ref_=hm_tpks_tt_t_4_pd_tp1_cp`);
});

When('I click on the arrow next to Add to wishlist', async () => {
  await $('.ipc-split-button__iconBtn').click()
});

When(/^A prompt with a text "(.*)" is displayed$/, async (text) => {
  await expect($('.ipc-prompt-header__text-block')).toHaveTextContaining(text);
});

Then('I close the prompt', async () => {
  await $('.ipc-promptable-base__close').click()
  await expect(browser).toHaveUrlContaining("https://www.imdb.com/title/tt1160419/?ref_=hm_tpks_tt_t_4_pd_tp1_cp");
})

// -------------------- Scenario 2 -------------------//
//              Play trailer on movie page
// ---------------------------------------------------//

Given(/^I am on a movie page$/, async () => {
  await expect(browser).toHaveUrlContaining("https://www.imdb.com/title/tt1160419/?ref_=hm_tpks_tt_t_4_pd_tp1_cp");
});

When('I click on the trailer displayed at the top', async () => {
  await $(".Slatestyles__SlateOverlay-sc-1t1hgxj-2").click();
});

Then('Trailer starts playing', async () => {
  await expect($(".jw-state-playing")).toExist();
});


// -------------------- Scenario 3 -------------------//
//     Go back to movie page and view all reviews
// ---------------------------------------------------//


Given(/^On a movie trailer page$/, async () => {
  //await expect(browser).toHaveUrlContaining("https://www.imdb.com/video/vi3986080537?playlistId=tt1160419&ref_=tt_");
  await expect(browser).toHaveUrlContaining("/video/vi3986080537?playlistId=tt1160419");
});

When('I click on back button', async () => {
  await browser.back()
});

When('I return to the movie page', async () => {
  await expect(browser).toHaveUrlContaining("https://www.imdb.com/title/tt1160419/?ref_=hm_tpks_tt_t_4_pd_tp1_cp");
});

When('I click on user reviews', async () => {
  await $(`//*[@id="__next"]/main/div/section[1]/div/section/div/div[1]/section[9]/div[1]/a[1]`).click()
});

Then('I see all reviews', async () => {
  await expect($('.header')).toHaveTextContaining("User Reviews");
});


