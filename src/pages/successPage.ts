import { Page } from 'playwright';
import { BasePage } from './basePage';

export class SuccessPage extends BasePage{
    private title = '//div[@class="success-message"]/h1';
    private subtitle = '//div[@class="success-message"]/p';
    private backHomeBtn = '#backHomeBtn';

    constructor(page: Page) {
        super(page);
    }

    async assertSuccessUrl() {
        await this.assertUrl(this.config.successPageUrl);
    }  

    async assertSuccessTitleAndSubtitle() {
        await this.assertElementText(this.title, this.texts.successPageTitle);
        await this.assertElementText(this.subtitle, this.texts.successPageSubtitle);
    }

    async assertSuccessScreen() { 
        await this.assertSuccessUrl();
        await this.assertSuccessTitleAndSubtitle();
        await this.assertElementVisible(this.backHomeBtn);
    }

    async clickBackToHome() {
        await this.clickElement(this.backHomeBtn)
    }
}