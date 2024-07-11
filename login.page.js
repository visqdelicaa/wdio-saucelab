//const Page = require('./page')

class LoginPage {
    //Definisi lcator dari elemen
    get usernameInput(){
        return $('#user-name'); // lacator username
    }

    get passwordInput(){
        return $('#password'); // lacator password
    }

    get loginButton (){
       return $('#login-button') //locator login button 
    }

    get errorMsg(){
        return $('//*[@data-test="error"]'); //lacator erroe message
    }

    // Definisi action yang dilakukan pada elemen tersebut

    async login(username,password){
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async assertErrorMessage(expectedErrorMessage){
        await expect(this.errorMsg).toHaveTextContaining(expectedErrorMessage);
    }

    async getErrorMessage(){
        return this.errorMsg.getText();
    }
}

module.exports = new LoginPage()
