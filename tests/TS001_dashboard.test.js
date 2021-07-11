const { test, expect} = require('@playwright/test');
const { DashboardPage } = require('../pageObjects/dashboardPage');
const LaunchPage = require('../utils/launchPage');

test.beforeAll(async () => {
    // Go to the starting url before each test.
    dashboard = new DashboardPage(await LaunchPage.initialisePage());
    await dashboard.openUrl('/');
});

test.describe("Dashboard Page Verification", () => {

    // Verifying the Logo Title.
    test("TC101- Should have the exact title - The Canberra Times", async () => {
        const title = await dashboard.getLogoTitle();
        expect(title).toBe('The Canberra Times');
    })

    // Verifying Login Hyperlink.
    test("TC102 - Login hyperlink should be visible", async () => {
        await dashboard.checkElementVisibility('Boss','anchor');
    })

    // Verifying Subscribe Hyperlink.
    test("TC103 - Subscribe hyperlink should be visible", async () => {
        await dashboard.checkElementVisibility('Subscribe','anchor');
    })

})