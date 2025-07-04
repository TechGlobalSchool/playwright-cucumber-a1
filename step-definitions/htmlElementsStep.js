const { Given, When, Then} = require("@cucumber/cucumber");
const { expect } = require('@playwright/test');
const TGHtmlElementsPage = require("../pages/TGHtmlElementsPage");

const tgHtmlElementsPage = new TGHtmlElementsPage()

Given(/^user navigates to "([^"]*)"$/, async function(url) {
  await page.goto(url);
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


When(/^user selects the "([^"]*)" checkbox$/, async function(label) {
	const checkbox = tgHtmlElementsPage.getCheckboxByLabel(label)
  await checkbox.check()
});


Then(/^user deselects the "([^"]*)" checkbox$/, async function(label) {
  const checkbox = tgHtmlElementsPage.getCheckboxByLabel(label)
  await checkbox.uncheck()
});


Then(/^the "([^"]*)" checkbox should not be checked$/, async function(label) {
  const checkbox = tgHtmlElementsPage.getCheckboxByLabel(label)
  await expect(checkbox).not.toBeChecked()
});


When(/^user selects the "([^"]*)" and "([^"]*)" checkboxes$/, async function(label1, label2) {
  await tgHtmlElementsPage.getCheckboxByLabel(label1).check()
  await tgHtmlElementsPage.getCheckboxByLabel(label2).check()
});


Then(/^both "([^"]*)" and "([^"]*)" checkboxes should be checked$/, async function(label1, label2) {
	const checkbox1 = tgHtmlElementsPage.getCheckboxByLabel(label1)
	const checkbox2 = tgHtmlElementsPage.getCheckboxByLabel(label2)

  await expect(checkbox1).toBeChecked()
  await expect(checkbox2).toBeChecked()
});


Then(/^the "([^"]*)" checkbox remains unchecked$/, async function(label) {
  const checkbox = tgHtmlElementsPage.getCheckboxByLabel(label)
  await expect(checkbox).not.toBeChecked()
});








