import { Page, Locator, expect } from '@playwright/test';
import { Config } from '../config';
import { Texts } from '../helpers/texts';

export class BasePage {
  config = new Config();
  texts = new Texts();

  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goTo(url: string = this.config.baseURL) {
    await this.page.goto(url);
  }

  getLocator(selector: string): Locator {
    return this.page.locator(selector);
  }

  async clickElement(selector: string) {
    const element = this.getLocator(selector);
    await element.waitFor({ state: 'visible' });
    await element.click();
  }

  async clickByText(text: string) {
    const element = this.page.locator(`text=${text}`);
    await element.waitFor({ state: 'visible' });
    await element.click();
  }  

  async fillField(element: string, text: string) {
    await this.page.fill(element, text)
  }

  async assertElementText(element: string, expectedText: string, contains: boolean = false) {
    const locator = this.getLocator(element);
    if (contains) {
      await expect(locator).toContainText(expectedText);
    } else {
      await expect(locator).toHaveText(expectedText);
    }
  }

  async assertUrl(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
  }

  async assertElementVisible(element: string) { 
    const locator = this.getLocator(element);
    await expect(locator).toBeVisible();
  }
}
