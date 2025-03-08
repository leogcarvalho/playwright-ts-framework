import { Page } from 'playwright';
import { BasePage } from './basePage';

export class HomePage extends BasePage{
    private title = '//div/h1';
    private currentBalance = '#balance';
    private viewStatementBtn = '#viewStatementBtn';
    private makePixBtn = '#makePixBtn';
    private payBillsBtn = '#payBillsBtn';
    private loansBtn = '#loansBtn';
    private exitBtn = 'a[href="login.html"]'; 

    constructor(page: Page) {
    super(page);
    }

    async assertHomeUrl() {
        await this.assertUrl(this.page, this.config.homePageUrl);
    }    

    async assertHomeTitle() {
        await this.assertElementText(this.title, this.texts.homeTitleText);
    }

    async assertCurrentBalance(expectedBalance: string) {
        await this.assertElementText(this.currentBalance, expectedBalance, true)
    }

    async assertHomeScreen(expectedBalance: string) { 
        await this.assertHomeUrl();
        await this.assertHomeTitle();
        await this.assertCurrentBalance(expectedBalance);
        await this.assertElementVisible(this.viewStatementBtn);
        await this.assertElementVisible(this.makePixBtn);
        await this.assertElementVisible(this.payBillsBtn);
        await this.assertElementVisible(this.loansBtn);
        await this.assertElementVisible(this.exitBtn);
    }
}
