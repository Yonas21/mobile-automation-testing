const wdio = require('webdriverio')
const assert = require('assert')
const opts = require('./config')


  
  
  async function main () {

    const client = await wdio.remote(opts);

    setTimeout(async() => {
     
        const field = await client.$("//android.widget.Button[@text='OK']"); 
        await field.click()
        
      }, 2000);


      setTimeout(async() => {
        

        const password = await client.$("id:com.rgnet.rgnet1:id/etPassword")
        await password.setValue("yonalem21@gmail.com")

        // login to the system
        // const login_btn = await client.$("id:com.rgnet.rgnet1:id/btnLogin")
        // await login_btn.click()

        const signup_btn = await client.$("id:com.rgnet.rgnet1:id/tvSignUp")
        await signup_btn.click()


        const emailAddress = await client.$("id:com.rgnet.rgnet1:id/etEmail"); 
        await emailAddress.setValue("yonalem21@gmail.com");
        
        const value = await emailAddress.getText();

        const btn_continue = await client.$("id:com.rgnet.rgnet1:id/btnContinue")
        await btn_continue.click()

        
        assert.strictEqual(value, "yonalem21@gmail.com");
      }, 10000);
      // await client.deleteSession();
  }
  
  main();
//   etEmail