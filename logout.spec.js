//const assert = require('assert')
const Page = require('../../pages/page')
const LoginPage = require('../../pages/login.page')
const inventoryPage = require('../../pages/inventory.page')


describe('Login Test', () => {
    beforeEach(async () => {
       // open browser
        Page.open('/')
    })


  it('Sukses Login dengan valid username', async () => {
         //Panggil fungsi login
        await LoginPage.login('standard_user', 'secret_sauce')
        //inventory
        await inventoryPage.assertInventoryUrl();

    })

 //it('Masuk pada Main Menu dan logout ', async () => {
            // Masuk pada main menu
  //          await LoginPage.login('standard_user', 'secret_sauce')
            //inventory
          //  await inventoryPage.assertInventoryUrl()
 //           await $('#react-burger-menu-btn').click()
           // await $('#logout_sidebar_link').click()
        
 //     })

//})  

it('Masuk pada Main Menu dan logout ', async () => {
    // Masuk pada main menu
    await LoginPage.login('standard_user', 'secret_sauce')

    // Klik tombol burger menu untuk membuka menu utama
    await $('#react-burger-menu-btn').click();

    // Klik link untuk logout
    await $('#logout_sidebar_link').click();

    // Verifikasi bahwa logout berhasil (opsional, tergantung pada kebutuhan Anda)
    // Misalnya, Anda bisa memverifikasi bahwa Anda kembali ke halaman login atau halaman lain yang sesuai
    const loginButton = await $('#login_button_container');
    expect(loginButton).toBeDisplayed();  // Memeriksa apakah tombol login muncul setelah logout
})

})


