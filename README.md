Puppeteer with headless Chrome in a container.

A twitter quest has been launched to deuglify how we boot this up &mdash;

```javascript
    browser = await puppeteer.launch({
        headless: true,
        executablePath: 'google-chrome-unstable',
        // There should be a better way to avoid this hack,
        // other than running privileged
        args: ['--no-sandbox']
    });
```
