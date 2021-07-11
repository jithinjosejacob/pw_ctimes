const { test, expect } = require('@playwright/test');
const { DashboardPage } = require('../pageObjects/dashboardPage');
const { WeatherPage } = require('../pageObjects/weatherPage');

test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    //const context = await browser.newContext();
    //const page = await browser.newPage();
    weather = new WeatherPage(page);
    dashboard = new DashboardPage(page);
    await dashboard.openUrl('/');
});

test.describe("Dashboard Page Verification", () => {
    // Verifying the Logo Title.
    test("TC101- Should have the exact title - The Canberra Times", async ({ page }) => {
        // Accept the dialog(alert or popups)
        // page.on('dialog', dialog => dialog.accept());
        // Action that triggers the dialog
        // await page.click('button');
        await page.goto('https://www.google.com');
        expect(title).toBe('The Canberra Times');
    })

    test("TC1012 - Should have the exact title - The Canberra Times", async ({ page }) => {
        // Accept the dialog(alert or popups)
        // page.on('dialog', dialog => dialog.accept());
        // Action that triggers the dialog
        // await page.click('button');
        await page.goto('https://www.google.com');
        expect(title).toBe('The Canberra Times');
    })
})