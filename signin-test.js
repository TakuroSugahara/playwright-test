sample {chromium} = require('playwright');
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
  console.log('Done.');
  // await page.close();
});

it('should work', async () => {
  const signinURL = 'https://qa.risily.com/signin';
  const email = 'takuro.sugahara+abc@resily.com';
  const password = 'roku1004';

  await page.goto(signinURL);
  await page.type('[name=email]', email);
  await page.type('[name=password]', password);
  await page.keyboard.press('Enter');

  await page.waitForNavigation({waitUntil: 'networkidle'});
  console.log(await page.title());
  expect(await page.title()).toBe('菅原 拓朗');
});
