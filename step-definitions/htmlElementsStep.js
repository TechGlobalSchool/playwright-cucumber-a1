const { Given, When, Then} = require("@cucumber/cucumber");
const { expect } = require('@playwright/test');
const TGHtmlElementsPage = require("../pages/TGHtmlElementsPage");

const tgHtmlElementsPage = new TGHtmlElementsPage()

Given(/^user navigates to "([^"]*)"$/, async function(url) {
  await page.goto(url);
});

When(/^user clicks on the "([^"]*)" card$/, async function(card) {
	await page.locator('#card-1').click()
});

Then(/^user should see "([^"]*)" page heading$/, async function(heading) {
	const head = page.locator('#main_heading')  
  await expect(head).toHaveText(heading)
});

Then(/^the URL should contain "([^"]*)"$/, async function(url) {
	await expect(page).toHaveURL('https://www.techglobal-training.com/frontend/html-elements')
});


When(/^user clicks on the "([^"]*)" button$/,  async function(buttons) {
	await tgHtmlElementsPage.clickButtonByText(buttons)
});


Then(/^the text under it should be "([^"]*)"$/,  async function(message) {
	const $message = page.locator(tgHtmlElementsPage.locators.buttonMessage)
  await expect($message).toHaveText(message)
});



