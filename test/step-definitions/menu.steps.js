const { Given, When, Then } = require('@wdio/cucumber-framework');

//-------------------- Scenario 1 -------------------//
// Visiting Watch Guide through menu button (Desktop)
//---------------------------------------------------//

Given(/^I am on the IMDB homepage Desktop$/, async () => {
    await browser.url(`https://imdb.com/`);
    browser.maximizeWindow();
});

When(/^I click the Menu button$/, async () => {
    await $('//body/div[2]/nav/div/label[2]').click();
    await $('.iRO9SK-8q3D8_287dhn28').waitForDisplayed({ timeout: 1500 }); // wait for menu to fully pop-up  

});

When(/^I click What to Watch submenu$/, async () => {
    await $('#imdbHeader > div.ipc-page-content-container.ipc-page-content-container--center.navbar__inner > aside > div > div._3bRJYEaOz1BKUQYqW6yb29 > div > div.NavDynamicCategoryList__CategoryGroupContainer-sc-f186ms-0.egeBoN > div:nth-child(2) > span > div > div > ul > a:nth-child(1').click();
    
});

Then(/^I should be at the What to Watch page$/, async () => {
    elem = await $('.WatchGuides__ItemWrapper-wu7yfb-1, .iwjOBW');
    isExisting = await elem.isExisting();
    await expect(browser).toHaveUrl('https://www.imdb.com/what-to-watch/?ref_=nv_watch');
    await $('.iwjOBW').waitForDisplayed({ timeout: 2000 }); 
});


// -------------------- Scenario 2 -------------------//
// Visiting Watch Guide through menu button (Mobile)
// ---------------------------------------------------//

Given(/^I am on the IMDB homepage Mobile$/, async () => {
	await browser.url(`https://imdb.com/`);
    browser.setWindowSize(680, 790);  // mocking mobile screen resolution
});

When(/^I click the Menu button Mobile$/, async () => {
	await $('.jOOJQ0waXoTX6ZSthGtum').click();
});

When(/^I click the Watch submenu$/, async () => {
    const icon = $('.ipc-icon--video-library');
    icon.click();
    await $('.ipc-icon--video-library').waitForDisplayed({ timeout: 2000 }); 
});

When(/^I click the What to Watch sub-submenu$/, async () => {
    await $('[href="/what-to-watch/?ref_=nv_watch"]').click();
});

When(/^I am at the What to Watch page$/, async () => {
	elem = await $('.WatchGuides__ItemWrapper-wu7yfb-1, .iwjOBW');
     isExisting = await elem.isExisting();
     await $('.iwjOBW').waitForDisplayed({ timeout: 2000 }); 
});

When(/^I click Top Picks category$/, async () => {
  	await $('//body/div[2]/main/div/section/section/section/div/ul/li[3]/span').click();
    await browser.waitUntil(() => {
            return browser.getUrl().then((pageUrl) => {
            return pageUrl.indexOf('what-to-watch/top-picks') > -1
            });
          }, 4000)
});

Then(/^I should be under Top Picks panel$/, async() => {
    await expect(browser).toHaveUrl('https://www.imdb.com/what-to-watch/top-picks/?ref_=watch_wchgd_tab');
    //	await $('#dvdfvfdv').waitForDisplayed({ timeout: 60000 }); 
});



// -------------------- Scenario 3 -------------------//
// Browsing Best of 2020 page (Desktop)
// ---------------------------------------------------//

 // Given Desktop

// WHEN : I click the Menu button

When(/^I click Best of 2021 button$/,async () => {
    await $('[href="/best-of/?ref_=nv_ev_best_2021"]').waitForDisplayed({ timeout: 2000 });
	await $('[href="/best-of/?ref_=nv_ev_best_2021"]').click();
});

When(/^I should be on Best of 2021 page$/,async () => {
    await expect(browser).toHaveUrl('https://www.imdb.com/best-of/?ref_=nv_ev_best_2021');
    const pageHeader = await $('#widget-nav > div.nav-heading-frame > div > a > h1') 
   
    let currentYear = new Date().getFullYear() 
                // outputs: "Best of 2021"
    expect(await pageHeader.getText()).toHaveTextContaining(currentYear)
});


When(/^I proceed to best of 2020 submenu$/,async () => {

    await $('#widget-nav > div.nav-buttons > div.nav-wrapper > ul > li:nth-child(3) > a > span:nth-child(1)').click();
 
});

Then(/^I should be on best of 2020 page$/,async () => {
    await browser.waitUntil(() => {
        return browser.getUrl().then((pageUrl) => {
        return pageUrl.indexOf('best-of/2020/') > -1
        });
      }, 3000)

});

