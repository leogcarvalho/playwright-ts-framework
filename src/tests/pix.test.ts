import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from 'pages/homePage';
import { PixPage } from 'pages/pixPage';
import { SuccessPage } from 'pages/successPage';

test('Transfer via Pix', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const pixPage = new PixPage(page);
    const successPage = new SuccessPage(page);

    // Open application
    await loginPage.goTo();

    // Fill correct credentials and click to connect
    await loginPage.login('user1', 'pass1');

    // Assert Home screen is displayed
    await homePage.assertHomeScreen('5.000,00');

    // Access Pix option in the Home menu
    await homePage.clickByText('Fazer Pix');

    // Transfer Pix: Amount 1000
    await pixPage.transferViaPix('33312301289', '1000');

    // Assert Success screen is displayed
    await successPage.assertSuccessScreen();

    // Click back to home
    await successPage.clickBackToHome();

    // Assert it was back to home screen
    await homePage.assertHomeScreen('4.000,00')
});

test('Try transfer via Pix above limit', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const pixPage = new PixPage(page);

    // Open application
    await loginPage.goTo();

    // Fill correct credentials and click to connect
    await loginPage.login('user1', 'pass1');

    // Assert Home screen is displayed
    await homePage.assertHomeScreen('5.000,00');

    // Access Pix option in the Home menu
    await homePage.clickByText('Fazer Pix');

    // Transfer Pix: Amount 1000
    await pixPage.transferViaPix('33312301289', '4000');

    // Assert Success screen is displayed
    await pixPage.assertAboveLimitError("R$ 3.000,00")
});
