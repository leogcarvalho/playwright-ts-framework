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
    await element.click();
  }

  async assertElementText(element: string, expectedText: string) {
      const locator = this.getLocator(element);
      await expect(locator).toHaveText(expectedText);
  }

  async assertUrl(page: Page, expectedUrl: string) {
      await expect(page).toHaveURL(expectedUrl);
  }

}
