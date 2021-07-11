// Locators and Functions for Comment Page is placed here.
const { BasePage } = require("./basePage");

class CommentPage extends BasePage{
    constructor(page) {
        super(page);
        this.page=page;
    }
    // Functions
    // Send SMS Function- Dummy Function.
    sendSms() {
        console.log("SMS");
    }
}
module.exports = { CommentPage };