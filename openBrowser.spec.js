const assert = require('assert')

describe('Open Saucedemo', () => {
    it('should open browser', async () => {
        // Buka Browser
        await browser.url('/')

        //asert untuk memastikan url sudah benar atau belum
        const currentURL = await browser.getUrl();
        const expextedURL = 'https://www.saucedemo.com/';

        await assert.strictEqual(currentURL, expextedURL, 'URL tidak sesuai. Actual : ${currenyURL}, expeted : ${expectedURL}');
    })
})