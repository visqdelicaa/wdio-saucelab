//const Page = require('./page');

class inventoryPage {
    get inventoryPageUrl(){
        return 'https://www.saucedemo.com/inventory.html'

    }

    async assertInventoryUrl() {
        await expect(browser).toHaveUrl(this.inventoryPageUrl)
    }


}

module.exports = new inventoryPage();