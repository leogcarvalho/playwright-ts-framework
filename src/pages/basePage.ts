import { Page } from '@playwright/test';
import { Config } from '../config';
import { Texts } from '../helpers/texts';
import { Assertions } from '../helpers/assertionsHelper';

export class BasePage {
  config = new Config();
  texts = new Texts();
  assertions = new Assertions();
  
  protected page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  
  async goTo(url: string = this.config.baseURL) {
    await this.page.goto(url);
  }

}
