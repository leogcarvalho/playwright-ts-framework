import { Browser, BrowserContext, Page, chromium } from 'playwright';

export class BrowserHelper {
  browser: Browser;
  context: BrowserContext;
  page: Page;

  constructor() {
    this.browser = chromium.launch() as unknown as Browser;  // Type casting as necessary
    this.context = {} as BrowserContext;  // Initialize as empty objects
    this.page = {} as Page;  // Initialize as empty object
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.browser.close();
  }
}