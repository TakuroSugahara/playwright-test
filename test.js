const playwright = require('playwright');

(async () => {
  const browser = await playwright['chromium'].launch({
    headless: false,
    // devtools: true,
  });

  const context = await browser.newContext();

  const page = await context.newPage();

  await page.goto('https://www.google.com/');

  await page.type('[name=q]', 'playwright');
  await page.keyboard.press('Enter', {delay: 2000});

  await page.screenshot({path: `./sample-screenshot.png`});

  await browser.close();
})();
