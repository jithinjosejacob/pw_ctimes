const { chromium, webkit, firefox, devices } = require('@playwright/test');
const Pixel2 = devices["Pixel 2 XL"];
const iPhone11 = devices["iPhone 11 Pro"];

class CreatePage {

    async initialisePage() {
        let browserAgent = process.env.USERAGENT || 'chromium';
        let browserType;
        let context;
        // Determine the browser required.
        if (browserAgent === "iOS") {
            browserType = "webkit";
        } else if (browserAgent === "Android") {
            browserType = "chromium";
        } else {
            browserType = browserAgent;
        }
        const browser = await { chromium, webkit, firefox }[browserType].launch({ headless: process.env.HEADLESS === "true" ? true : false });
        // Determine the context required.
        if (browserAgent === "iOS") {
            context = await browser.newContext({ ...iPhone11 });
        } else if (browserAgent === "Android") {
            context = await browser.newContext({ ...Pixel2 });
        } else {
            context = await browser.newContext();
        }
        // Create a page instance and return it.
        const page = await context.newPage();
        return page;
    }
}
module.exports = new CreatePage;