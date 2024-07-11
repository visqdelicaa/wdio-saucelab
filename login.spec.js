const assert = require('assert')

describe('Login Test', () => {
    it('should login successfully with valid credentials', async () => {
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

    //failed
    it('should failed login with invalid username', async () => {
        // Buka Browser
        await browser.url('/')

        //masukin username
        await $('#user-name').setValue('standard_userr');
        //masukin password
        await $('#password').setValue('secret_sauce');
        //klik login
        await $('#login-button').click();
        //assert error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')

    })

    //failed
    it('should failed login with invalid password', async () => {
        // Buka Browser
        await browser.url('/')

        //masukin username
        await $('#user-name').setValue('standard_user');
        //masukin password
        await $('#password').setValue('secret_saucee');
        //klik login
        await $('#login-button').click();
        //assert error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')

    })
})