import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { HomePage } from 'pages/homePage';

// Define test data for valid login scenarios
const validCredentials = [
    { username: 'user1', password: 'pass1', expectedBalance: 'R$ 5.000,00' },
    { username: 'user2', password: 'pass2', expectedBalance: 'R$ 300,00' },
    { username: 'user3', password: 'pass3', expectedBalance: '-R$ 20.000,00' },
];

test.describe('Login Tests', () => {
    
    // Data-driven valid login tests
    for (const { username, password, expectedBalance } of validCredentials) {
        test(`User ${username} logs in successfully`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const homePage = new HomePage(page);

            await loginPage.goTo();
            await loginPage.login(username, password);
            await homePage.assertHomeScreen(expectedBalance);
        });
    }

    // ✅ Test for invalid login scenario
    test('Log in with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goTo();
        await loginPage.login('user1', 'wrongpassword');
        await loginPage.assertInvalidCredentialsError();
    });

});
