const locators = {
  heading: '#main_heading',
  buttons: '#register_button, #signin_button',
  buttonMessage: '.is-block'
}


class TGHtmlElementsPage {

  locators = locators

  async clickButtonByText(buttonText) {
    await page.locator(locators.buttons).getByText(buttonText).click()
  }
}

module.exports = TGHtmlElementsPage