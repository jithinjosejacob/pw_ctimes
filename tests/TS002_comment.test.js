const { test, expect } = require('@playwright/test');
const { CommentPage } = require('../pageObjects/commentPage');

test.beforeAll(async ({browser}) => {
    // Go to the starting url before each test.
    const context = await browser.newContext();
    const page = await context.newPage();
    comment = new CommentPage(page);
    await comment.openUrl('/');
});

test.describe("Comment Page Verification", () => {

    // Verifying h2 header in comment page
    test("TC201- Should have the exact h2 header", async () => {
        await comment.checkElementVisibility('Comment', 'header', 'h2');
    })

})