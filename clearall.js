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

  const elementHandle = await page.$('.gLFyf');
  await elementHandle.click();
  await elementHandle.focus();
  await elementHandle.click({clickCount: 3});
  await elementHandle.press('Backspace');

  await page.type('[name=q]', 'hoge hoge', {delay: 500});

  await page.keyboard.press('Enter', {delay: 2000});

  await browser.close();
})();
