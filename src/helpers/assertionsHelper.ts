import { expect, Locator, Page } from '@playwright/test';

export class Assertions {
    async assertElementText(element: Locator, expectedText: string) {
        await expect(element).toHaveText(expectedText);
    }

    async assertUrl(page: Page, expectedUrl: string) {
        await expect(page).toHaveURL(expectedUrl);
    }
}