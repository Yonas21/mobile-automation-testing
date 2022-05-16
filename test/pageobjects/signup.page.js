

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    get inputUsername () {
        const emailAddress = await client.$("id:com.rgnet.rgnet1:id/etEmail"); 
        return emailAddress
    }


    get btnSubmit () {
        const signup_btn = await client.$("id:com.rgnet.rgnet1:id/tvSignUp")
       return signup_btn
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new LoginPage();
