Prerequisities
1) Nodejs should be installed

Environment variables

1) ENV = DEV, values -{DEV, UAT, PROD}
2) USERAGENT - chromium , values- {chromium, iOS, Android}
3) HEADLESS - false ,values-{true,false}

Steps

1) Clone repo to local

2) Run npm ci

3) Run npx playwright test

Debugging output in mac - DEBUG=pw:api npx playwright test