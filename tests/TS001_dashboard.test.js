const { test, expect} = require('@playwright/test');
const { DashboardPage } = require('../pageObjects/dashboardPage');

test.beforeAll(async ({browser}) => {
    // Go to the starting url before each test.
    const context = await browser.newContext();
    const page = await context.newPage();
    dashboard = new DashboardPage(page);
    await dashboard.openUrl('/');
});

test.describe("Dashboard Page Verification", () => {
    // Verifying the Logo Title.
    test("TC101- Should have the exact title - The Canberra Times", async () => {
        const title = await dashboard.getLogoTitle();
        expect(title).toBe('The Canberra Times');
        //await dashboard.takeScreenshot('TC001.png');
    })

    // Verifying Login Hyperlink.
    test("TC102 - Login hyperlink should be visible", async () => {
        await dashboard.checkElementVisibility('Login','anchor');
    })

    // Verifying Subscribe Hyperlink.
    test("TC103 - Subscribe hyperlink should be visible", async () => {
        await dashboard.checkElementVisibility('Subscribe','anchor');
    })

})