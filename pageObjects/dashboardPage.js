// Locators and Functions for Dashboard Page is placed here.
const { BasePage } = require("./basePage");

class DashboardPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
    }

    // Functions
    // Verifying text present inside logo.
    async getLogoTitle() {
        let value = await this.page.evaluate(() => document.querySelector('.logo-wrap a').getAttribute('title'));
        return value;
    }

    async getPuzzlePage(context) {
        const [newPage] = await Promise.all([
            //context.waitForEvent('page'),
            await this.page.click(`a.hide-on-mobile`, { force: true })
        ])

        console.log(await newPage.url())
    }
}
module.exports = { DashboardPage };