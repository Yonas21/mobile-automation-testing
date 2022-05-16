const opts = require("../../config");
const wdio = require('webdriverio')
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

     module.exports =async() => {
        const client = await wdio.remote(opts);
        setTimeout(async() => {
         
            const field = await client.$("//android.widget.Button[@text='OK']"); 
            await field.click()
            
          }, 2000);
          const signup_btn = await client.$("id:com.rgnet.rgnet1:id/tvSignUp")
          await signup_btn.click();
    }

