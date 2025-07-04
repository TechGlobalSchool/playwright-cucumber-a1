const locators = Object.freeze({
  username: '#username',
  password: '#password',
  loginButton: '#login_btn',
  errorMessage: '#error_message',
  successMessage: '#success_lgn'
})

class TGLoginPage {
  locators = locators


  async login(username, password) {
    await page.locator(locators.username).fill(username)
    await page.locator(locators.password).fill(password)
  }

  async clickLoginButton() {
    await page.locator(locators.loginButton).click()
  }
}


module.exports = TGLoginPage