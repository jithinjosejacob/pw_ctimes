const { test, expect } = require('@playwright/test');
const { DashboardPage } = require('../pageObjects/dashboardPage');
const { WeatherPage } = require('../pageObjects/weatherPage');

test.beforeAll(async ({ browser }) => {
    // Go to the starting url before each test.
    //const context = await browser.newContext();
    const page = await browser.newPage();
    weather = new WeatherPage(page);
    dashboard = new DashboardPage(page);
    await dashboard.openUrl('/');
});

test.describe("Dashboard Page Verification", () => {
    // Verifying the Logo Title.
    test("TC101- Should have the exact title - The Canberra Times", async () => {
        const title = await weather.getLogoTitles();
        expect(title).toBe('The Canberra Times');
    })

    // Verifying Login Hyperlink.
    test("TC102 - Login hyperlink should be visible", async () => {
        await dashboard.checkElementVisibility('Login', 'anchor');
    })

    // Verifying title.
    test("TC103- Should pass this test casw", async () => {
        const title = await weather.getLogoTitles();
        expect(title).toBe('The Canberra Times');
    })
})