// Locators and Functions for Dashboard Page is placed here.
const { BasePage } = require("./basePage");

class WeatherPage extends BasePage{
    constructor(page) {
        super(page);
        this.page=page;
    }

    // Functions
    // Verifying text present inside logo.
    async getLogoTitles() {
        let value = await this.page.evaluate(() => document.querySelector('.logo-wrap a').getAttribute('title'));
        return value;
    }
}
module.exports = { WeatherPage };