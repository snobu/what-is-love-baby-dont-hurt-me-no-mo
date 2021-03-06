const puppeteer = require("puppeteer");

describe('open github.com', () => {
  var browser, page;
  var url = 'https://github.com'
  beforeEach (async () => {
    browser = await puppeteer.launch({
        headless: true,
        executablePath: 'google-chrome-unstable',
        // There should be a better way to avoid this hack,
        // other than running privileged
        args: ['--no-sandbox']
    });
    page = await browser.newPage();
  })
  afterEach (() => {
    browser.close()
  })
  test('Title == GitHub', async () => {
    await page.goto(url);
    const title = await page.title();
    expect(title).toContain("GitHub");
  });
})
