//const assert = require('assert')
const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const inventoryPage = require('../../pages/inventory.page')


describe('Login Test', () => {
    beforeEach(async () => {
        //open browser
        Page.open('/')
    })


    it('should login successfully with valid credentials', async () => {
        // Panggil fungsi login
        await LoginPage.login('standard_user', 'secret_sauce')
        //inventory
        await inventoryPage.assertInventoryUrl();

    })

    //failed
    it('should failed login with invalid username', async () => {
        // Panggil Fungsi
        await LoginPage.login('invalid_user', 'secret_sauce')
        //assert error message
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })

    //failed
    it('should failed login with invalid password', async () => {
        // Panggil Fungsi
        await LoginPage.login('stadard_user', 'invalid_sauce')
        //assert error message
        await LoginPage.assertErrorMessage('Epic sadface: Username and password do not match any user in this service');

    })
})