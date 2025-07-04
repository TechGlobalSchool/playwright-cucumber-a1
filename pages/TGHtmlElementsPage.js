const locators = Object.freeze({
  heading: "#main_heading",
  buttons: "#register_button, #signin_button",
  buttonMessage: ".is-block",
  appleCheckbox: "#checkbox_1",
  microsoftCheckbox: "#checkbox_2",
  teslaCheckbox: "#checkbox_3",
});

class TGHtmlElementsPage {
  locators = locators;

  async clickButtonByText(buttonText) {
    await page.locator(locators.buttons).getByText(buttonText).click();
  }

  /**
   * 
   * @param {'Apple' | 'Microsoft' | 'Tesla '} label - Option that user wants to select 
   * 
   * @returns 
   */
  getCheckboxByLabel(label) {
    const checkboxes = {
      Apple: locators.appleCheckbox,
      Microsoft: locators.microsoftCheckbox,
      Tesla: locators.teslaCheckbox
    }

    if(!(label in checkboxes)) {
      throw new Error(`${label} not found`)
    }

    return page.locator(checkboxes[label])
  }
}

module.exports = TGHtmlElementsPage;
