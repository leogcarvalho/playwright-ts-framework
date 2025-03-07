# Playwright Test Automation Framework with TypeScript

This project demonstrates how to set up Playwright for end-to-end testing with TypeScript, using Page Object Model (POM) and other best practices. It provides a structured approach for automating browser interactions in a scalable and maintainable way.

## 📦 Project Setup

### Prerequisites

To run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/)
- [Playwright](https://playwright.dev/)
- [TypeScript](https://www.typescriptlang.org/)

### Install Dependencies

1. Clone this repository:
   ```bash
   git clone https://github.com/leogcarvalho/playwright-ts-framework.git
   cd playwright-ts-framework

2. Install the necessary dependencies:
    ```bash
    npm install

3. Install Playwright browsers:
    ```bash
    npx playwright install

## 🛠️ Project Structure
This project follows the Page Object Model (POM) design pattern for maintainability. Here's an overview of the project structure:
    ```bash
    src/
    ├── config/
    │   └── Config.ts          # Configuration and singleton for project settings
    ├── helpers/
    │   └── BrowserHelper.ts   # Helper methods for browser initialization and tear-down
    ├── pages/
    │   └── BasePage.ts       # Base class for all pages
    │   └── LoginPage.ts      # Login page with actions
    ├── tests/
    │   └── login.test.ts     # Example test for login functionality
    tsconfig.json             # TypeScript configuration
    package.json              # Project dependencies

## 🔧 Usage

### Running the Tests
To run the tests, use the following command:
    ```bash
    npx playwright test
This will run all the tests located in the tests/ folder.

### Running a Specific Test File
You can run a specific test file by using the -g flag followed by the name of the test file:
    ```bash
    npx playwright test tests/login.test.ts

### Running in Headless Mode
By default, tests run in headless mode. If you'd like to watch the browser actions, you can disable headless mode by modifying the playwright.config.ts file or passing the --headed flag:
    ```bash
    npx playwright test --headed



