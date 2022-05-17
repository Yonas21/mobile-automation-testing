const wdio = require("webdriverio");
const opts = require("./config");
const open = require("./utils/open_app");

async function main() {
  const client = await wdio.remote(opts);

  setTimeout(async () => {
    const btnOk = await client.$("id:com.rgnet.rgnet1:id/btnOk");
    const isDisplayed = await btnOk.isDisplayed();
    if (isDisplayed) {
      await btnOk.click();
    }

    setTimeout(async () => {
      const emailAddress = await client.$("id:com.rgnet.rgnet1:id/etEmail");
      await emailAddress.setValue("botxyz321@Realgaming.com");

      const etPassword = await client.$("id:com.rgnet.rgnet1:id/etPassword");
      await etPassword.setValue("botxyz321@Realgaming.com.yon21");

      const btnLogin = await client.$("id:com.rgnet.rgnet1:id/btnLogin");
      await btnLogin.click();

      setTimeout(() => {
        console.log("Login Hasbeen Started...");
      }, 1000);
    }, 2000);
  }, 2000);
}
main();
