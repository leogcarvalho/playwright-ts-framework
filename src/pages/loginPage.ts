import { Page } from 'playwright';
import { BasePage } from './basePage';

export class LoginPage extends BasePage{
  private usernameField = '#username';
  private passwordField = '#password';
  private loginButton = '//*[@type="submit"]';
  private invalidCredentialsError = '#error-message';

  constructor(page: Page) {
    super(page);
  }

  async login(username: string, password: string) {
    await this.fillField(this.usernameField, username);
    await this.fillField(this.passwordField, password);
    await this.clickElement(this.loginButton)
  }

  async assertInvalidCredentialsError() {
    await this.assertElementText(this.invalidCredentialsError, this.texts.invalidCredentialsErrorText)
  }
}
