import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from 'pages/homePage';

test('Successful log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    // Open application
    await loginPage.goTo();

    // Fill correct credentials and click to connect
    await loginPage.login('user1', 'pass1');

    // Assert Home screen is displayed
    await homePage.assertHomeUrl();
    await homePage.assertHomeTitle();
});

test('Log in with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    // Open application
    await loginPage.goTo();

    // Fill invalid credentials and click to connect
    await loginPage.login('user1', 'wrongpassword');

    // Assert invalid credentials error is displayed
    await loginPage.assertInvalidCredentialsError()
    
});
