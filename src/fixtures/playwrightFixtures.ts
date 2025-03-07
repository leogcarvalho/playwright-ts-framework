import { test as base } from '@playwright/test';
import { BrowserHelper } from '../helpers/browserHelper';

export const test = base.extend<{ browserHelper: BrowserHelper }>({
  browserHelper: async ({}, use) => {
    const helper = new BrowserHelper();
    await helper.init();
    await use(helper);  // Makes helper available in tests
    await helper.close();  // Automatically closes browser after each test
  },
});
