// Master Locators and Fuctions are placed in Base Page.
var assert = require('assert');
var envConfig = require(`../environments/${process.env.ENV.toLowerCase()}.json`);

class BasePage {
    constructor(page) {
        this.page = page;
    }

    // Locators
    // Hyperlink having a specific text.
    anchorLink(textContent) { return `//a[normalize-space(text())='${textContent}']` }

    // Header having a specific text( headerType - h1,h2,h3 and textDetails - specific text).
    headerText(headerType, textDetails) { return `//${headerType}[contains(text(),${textDetails})]` }


    // Functions
    // Open a specific url.
    openUrl(path) {
        return this.page.goto(`${envConfig.url}${path}`, { waitUntil: 'domcontentloaded' });
    }

    /* Verifying whether an element is visible in UI
       Element Type(type) - could be anchor or header
       ElementText - text of element
       headerType is optional ,and needs to be provided if element type is header.
    */
    async checkElementVisibility(elementText, type, headerType) {
        try {
            if (type === 'anchor') {
                await this.page.waitForSelector(this.anchorLink(elementText));
            }
            else if (type === 'header') {
                await this.page.waitForSelector(this.headerText(headerType, elementText));
                // Setting up a sleep of 3 seconds.
                //await this.page.waitForTimeout(3000);
            }
        }
        catch {
            assert.fail(`Element - ${elementText} not visible after default timeout`);
        }
    }


}

module.exports = { BasePage };