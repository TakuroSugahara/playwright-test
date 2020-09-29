const playwright = require('playwright');

(async () => {
  const browser = await playwright['chromium'].launch({
    headless: false,
    // devtools: true,
  });

  const context = await browser.newContext();
  const page = await context.newPage();

  const signinURL = 'https://sample.com/signin';
  const email = 'username@gmail.com';
  const password = 'password';

  await page.goto(signinURL);
  await page.type('[name=email]', email);
  await page.type('[name=password]', password);
  await page.keyboard.press('Enter');

  // ページの読み込みが完了するまで待つことができる
  await page.waitForNavigation({waitUntil: 'networkidle'});
  // ページのタイトルにログイン後の期待するものが表示されるか確認できる
  console.log(await page.title());

  await browser.close();
})();
