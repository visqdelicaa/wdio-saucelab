const assert = require('assert')

//menggunakan function
 async function login(username,password){
     // Buka Browser
     await browser.url('/')

     //masukin username
     await $('#user-name').setValue(username);
     //masukin password
     await $('#password').setValue(password);
     //klik login
     await $('#login-button').click();
     //inventory
     
 }

describe('Login Test', () => {
    it('should login successfully with valid credentials', async () => {
        // Panggil fungsi login
        await login('standard_user', 'secret_sauce')
        //inventory
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html') 

    })

    //failed
    it('should failed login with invalid username', async () => {
        // Panggil Fungsi
        await login('invalid_user', 'secret_sauce')
        //assert error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')

    })

    //failed
    it('should failed login with invalid password', async () => {
        // Panggil Fungsi
        await login('stadard_user', 'invalid_sauce')
        //assert error message
        const errorMessage = await $('//*[@data-test="error"]')
        await expect(errorMessage).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service')

    })
})