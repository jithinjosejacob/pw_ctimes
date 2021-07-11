const { test, expect } = require('@playwright/test');

test('basic test', async ({ context }) => {
  const page = await context.newPage();
  await page.goto('https://www.canberratimes.com.au/');
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    await page.click(`a.hide-on-mobile`, { force: true })
  ])
  const newUrl = await newPage.url();
  const oldUrl = await page.url();
  console.log(oldUrl);
  console.log(newUrl);
  expect (newUrl).toBe('https://www.canberratimes.com.au/life-style/puzzles/');
});