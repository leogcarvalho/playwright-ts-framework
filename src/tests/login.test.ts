import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from 'pages/homePage';

test('User can log in', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goTo();
    await loginPage.login('user1', 'pass1');

    // Assertions after login
    await homePage.assertHomeUrl();
    await homePage.assertHomeTitle();
});
