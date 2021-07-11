// playwright.config.js

const { devices } = require('@playwright/test');

module.exports = {
  timeout: 25000,
  workers: 5,
  reporter: [["dot"], ['experimental-allure-playwright']],
  use:{
    video: 'on',
    screenshot: 'on',
  },
  projects: [
    {
      // Desktop Chromium
      name: 'DesktopChromium',
      use: {
        browserName: 'chromium',
        headless: false,
        // Test against Chrome channel.
        channel: 'chrome',
        // Testing options:
        // video: 'on',
        // screenshot: 'on',
      },
    },

     // Desktop Safari
    //  {
    //    name: 'DesktopSafari',
    //    use: {
    //      browserName: 'webkit',
    //      //executablePath: 'C:\\Program Files (x86)\\Safari.exe',
    //      headless:false,
    //      viewport: { width: 1200, height: 750 },
    //    }
    //  },

    //  //"Pixel 4" tests use Chromium browser.
    //  {
    //    name: 'Pixel4',
    //    use: {
    //      browserName: 'chromium',
    //      headless:false,
    //      ...devices['Pixel 4'],
    //    },
    //  },

     // "iPhone 11" tests use WebKit browser.
    //  {
    //    name: 'iPhone11',
    //    use: {
    //      browserName: 'webkit',
    //      headless:false,
    //      ...devices['iPhone 11'],
    //    },
    //  },
    //  // Desktop Firefox
    //  {
    //    name: 'DesktopFirefox',
    //    use: {
    //      browserName: 'firefox',
    //      viewport: { width: 800, height: 600 },
    //      headless: false
    //     }
    //  },
  ],
};