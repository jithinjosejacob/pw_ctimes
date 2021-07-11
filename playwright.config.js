// playwright.config.js

module.exports = {
   // Timout for the tests
   timeout: 30000,

   // Two retries for each test
   retries: 1,

   // Limit the number of workers on CI, use default locally
   workers: 1
};