import { defineConfig, devices } from '@playwright/test';
import { dot } from 'node:test/reporters';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // testDir: './MyTests',
  testMatch: ["pomtest/addToCart.test.ts"],
   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
  ["dot"],["allure-playwright"],
  ["json", {outputFile: "jsonReports/jsonReport.json"}],
  ['junit', { outputFile: 'test-results/results.xml' }],
  ['html', { outputFolder: 'playwright-report', open: 'never' }]
],
workers: process.env.CI ? 1 : undefined,
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: true,
    screenshot: "only-on-failure",
    video: "on",
    trace: "on"
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
