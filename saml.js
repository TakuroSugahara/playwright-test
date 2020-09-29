const playwright = require('playwright');

myfunction: function () {
  return new Promise(function (resolve, reject) {
    (async function main() {
      const browser = await playwright['chromium'].launch({
        headless: false,
      });
      let page = await browser.newPage();
      await page.goto('https://service.ariba.com/Supplier.aw/125007078/aw?awh=r&awssk=Cd19ecPv&dard=1');//Login page URL
      await page.type('.w-txt-dsize', 'my-website-username'); //.w-txt-dsize - its the classname for username html element field
      await page.type('#Password', 'my-website-password'); // #Password -its the ID for password html element field
      await page.keyboard.press('Enter');
      await page.waitFor(5000);
      await page.goto("https://service.ariba.com/Discovery.aw/ad/aodSsoLogin"); //URL of page to redirect after Login
      await page.waitFor(10000);
    })()
  })
}
