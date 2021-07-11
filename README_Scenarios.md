1) Jest setup
2) MultiTab and Multi Context
3) Screenshots, logs
4) Popup Handlings
5) Reports
6) Explanation


1) Jest - Not Required

Mocha- Test Runner, Used Chai as Assertion

Jest - Own Test Runner and Assertion

Playwright - Now from 1.12 Playwright has its own Test Runner and Assertion

Show packages in 1.13 version

2) Explanation of Browser, Context(Multi Context here) and Pages

3) Explanation of config file in new test Runner

4) Cmd for logs - Debugging output in mac - DEBUG=pw:api npx playwright test

5) Screenshots - Show  TS003 - TS003 should fail for screenshots and videos
if page fixture is set in test, then only screenshot will work
npx playwright test TS003_popup.test.js

if pageobject has to be followed, then refer first test in here - TS001_dashboard.test.js

6) Report -

rm -rf allure-results/
set chromium and run npx playwright test
allure serve

7) Popup - Samples in TS003_popup.test.js

8) MultiTab - npx playwright test TS004_multi.test.js