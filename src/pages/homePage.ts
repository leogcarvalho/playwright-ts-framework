import { Page } from 'playwright';
import { BasePage } from './basePage';

export class HomePage extends BasePage{
    private title = this.page.locator('h1');

    constructor(page: Page) {
    super(page);
    }

    async assertHomeUrl(expectedTitle: string = this.config.homePageUrl) {
        await this.assertions.assertUrl(this.page, this.config.homePageUrl)
    }    

    async assertHomeTitle(expectedTitle: string = this.texts.homeTitleText) {
        await this.assertions.assertElementText(this.title, this.texts.homeTitleText)
    }
}
