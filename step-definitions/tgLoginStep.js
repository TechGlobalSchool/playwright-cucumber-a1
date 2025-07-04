const { Then, When } = require("@cucumber/cucumber");
const { expect } = require('@playwright/test');
const TGLoginPage = require("../pages/TGLoginPage");

const tgLoginPage = new TGLoginPage()

When(/^user enter username as "([^"]*)" and password as "([^"]*)"$/, async function(username, password) {
	// console.log(username)
	// console.log(password)
	await tgLoginPage.login(username, password)
});

When(/^user clicks Login button$/,  async function() {
	await tgLoginPage.clickLoginButton()
});

Then(/^user should see a "([^"]*)"$/,  async function(message) {
	const $errorMessage = page.locator(tgLoginPage.locators.errorMessage)
	const $successMessage = page.locator(tgLoginPage.locators.successMessage)

	message === 'You are logged in'
	? await expect($successMessage).toHaveText(message)
	: await expect($errorMessage).toHaveText(message)

	// console.log(message)
});
