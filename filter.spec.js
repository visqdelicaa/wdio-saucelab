const assert = require('assert')

describe('login', () => {
    it('masuk', async () => {
        // Buka Browser
        await browser.url('/')

        //masukin username
        await $('#user-name').setValue('standard_user');
        //masukin password
        await $('#password').setValue('secret_sauce');
        //klik login
        await $('#login-button').click();
        //inventory
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html') 

    })

    it ('logout', async () => {
        // Buka Browser
        await browser.url('/')

       await $('#user-name').setValue('standard_user');
        //masukin password
        await $('#password').setValue('secret_sauce');
      //  klik login
        await $('#login-button').click();
        //inventory
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html') 
        //masuk ke button menu
        await $('#react-burger-menu-btn').click();
        //masuk ke about
        await $('#logout_sidebar_link').click();
    })
})

