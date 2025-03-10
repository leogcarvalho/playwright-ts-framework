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

  async waitForElementVisible(elementOrSelector: string | Locator, timeout: number = 5000): Promise<void> {
    const element = typeof elementOrSelector === "string" 
      ? this.getLocator(elementOrSelector) 
      : elementOrSelector;
    await element.waitFor({ state: "visible", timeout });
  }

  async clickElement(selector: string, waitDisappear: boolean = false, retry: boolean = false, timeout: number = 3000) {
    const element = this.getLocator(selector);
    await this.waitForElementVisible(element);
    await element.click();
    if (waitDisappear) {
      try {
          await element.waitFor({ state: 'detached', timeout });
      } catch (error) {
          if (retry) {
              console.warn("Element did not disappear, retrying click...");
              await element.click();
              await element.waitFor({ state: 'detached', timeout });
          } else {
              throw new Error("Element did not disappear within the timeout.");
          }
      }
  }
  }

  async clickByText(text: string) {
    const element = this.page.locator(`text=${text}`);
    await this.waitForElementVisible(element);
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
