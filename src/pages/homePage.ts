import { Page } from 'playwright';
import { BasePage } from './basePage';

export class HomePage extends BasePage{
    private title = '//div/h1';

    constructor(page: Page) {
    super(page);
    }

    async assertHomeUrl(expectedTitle: string = this.config.homePageUrl) {
        await this.assertUrl(this.page, this.config.homePageUrl)
    }    

    async assertHomeTitle(expectedTitle: string = this.texts.homeTitleText) {
        await this.assertElementText(this.title, this.texts.homeTitleText)
    }
}
