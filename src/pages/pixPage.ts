import { Page } from 'playwright';
import { BasePage } from './basePage';

export class PixPage extends BasePage{
    private title = '//header/h1';
    private subtitle = '//header/h2';
    private pixLimit = '#pix-limit-message';
    private pixKey = '#pix-key';
    private pixAmount = '#pix-amount';
    private transferPixBtn = '//button[@type="submit"]';
    private backToHomeBtn = '//a[@class="button" and @href="home.html"]';
    private pixLimitMessage = '#pix-limit-message';
    private aboveLimitError = '#error-message';

    constructor(page: Page) {
        super(page);
    }

    async assertPixUrl() {
        await this.assertUrl(this.config.pixPageUrl);
    }   

    async assertPixTitleAndSubtitle() {
        await this.assertElementText(this.title, this.texts.pixPageTitle);
        await this.assertElementText(this.subtitle, this.texts.pixPageSubtitle);
    }

    async assertPixLimit(expectedLimit: string) {
        await this.assertElementText(this.pixLimitMessage, expectedLimit, true)
    }

    async assertPixScreen(pixLimit: string) { 
        await this.assertPixUrl();
        await this.assertPixTitleAndSubtitle();
        await this.assertPixLimit(pixLimit);
        await this.assertElementVisible(this.pixKey);
        await this.assertElementVisible(this.pixAmount);
        await this.assertElementVisible(this.transferPixBtn);
        await this.assertElementVisible(this.backToHomeBtn);
        await this.assertElementVisible(this.pixLimitMessage);
    }

    async transferViaPix(pixKey: string, amount: string) {
        await this.fillField(this.pixKey, pixKey);
        await this.fillField(this.pixAmount, amount);
        await this.clickElement(this.transferPixBtn)
    }

    async assertAboveLimitError(pixLimit: string) {
        await this.assertElementText(this.aboveLimitError, this.texts.pixAboveLimitError.replace("{limit}", pixLimit))
    }

}
