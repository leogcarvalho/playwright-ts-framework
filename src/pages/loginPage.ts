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
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async assertInvalidCredentialsError() {
    await this.assertElementText(this.invalidCredentialsError, this.texts.invalidCredentialsErrorText)
  }
}
