const { Given, When, Then } = require("@wdio/cucumber-framework");

// scenario 1

Given("I am on the IMDB homepage", async () => {
  await browser.url("https://imdb.com");
  browser.maximizeWindow();
});

When(
  /^I enter the text "([^"]*)" in the "([^"]*)" field$/,
  async (search_text, input_id) => {
    await $(input_id).setValue(search_text);
    expect(await $(input_id).getValue()).toBe(search_text);
  }
);

When("I hit the return key", async () => {
  await browser.keys("\uE007");
});

When("I click on the first movie search result", async () => {
  await $("a[href*='ref_=fn_al_tt_1']").click();
});

When("I click on the trailer play button", async () => {
  await $("a[href*='/video/vi3903767321?playlistId=tt2382320']").click();
});

Then("The trailer for no time to die is displayed", async () => {
  await expect($(".jw-state-playing")).toExist();
});

// scenario 2

When("I open menulist", async () => {
  await $("#imdbHeader-navDrawerOpen--desktop").click();
});

When("Click on coming soon", async () => {
  await $("*=Coming Soon").click();
});

Then("List of trailers that are coming soon should be displayed", async () => {
  await expect(browser).toHaveUrl(
    "https://www.imdb.com/movies-coming-soon/?ref_=nv_mv_cs"
  );
});

// scenario 3

When("Click on Latest Trailers", async () => {
  await $("*=Latest Trailers").click();
});

When("I click on the trailer play button1", async () => {
  await $("a[href*='ref_=vi_tr_tr_vp_0']").click();
});

Then(
  "The highest trending trailer among the latest trailers should be played",
  async () => {
    await expect($(".jw-state-playing")).toExist();
  }
);
