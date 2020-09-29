const {chromium} = require('playwright');
const expect = require('expect');
let browser;
let page;
beforeAll(async () => {
  browser = await chromium.launch();
});
afterAll(async () => {
  await browser.close();
});
beforeEach(async () => {
  page = await browser.newPage();
});
afterEach(async () => {
  await page.close();
});

it('should work', async () => {
  const signinURL = 'https://sample.com/signin';
  const email = 'sample@gmail.com';
  const password = 'sample-password';
  const expectedTitle = 'sample-title';

  await page.goto(signinURL);
  await page.type('[name=email]', email);
  await page.type('[name=password]', password);
  await page.keyboard.press('Enter');

  await page.waitForNavigation({waitUntil: 'networkidle'});
  console.log(await page.title());
  expect(await page.title()).toBe(expectedTitle);
});
