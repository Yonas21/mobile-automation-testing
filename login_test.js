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

    const permission_allow_foreground_only_button = await client.$(
      "id: com.android.permissioncontroller:id/permission_allow_foreground_only_button"
    );
    const progress_displayed =
      await permission_allow_foreground_only_button.isDisplayed();
    if (progress_displayed) {
      await permission_allow_foreground_only_button.click();
    }

    setTimeout(async () => {
      const emailAddress = await client.$("id:com.rgnet.rgnet1:id/etEmail");
      await emailAddress.setValue("botxyz431@Realgaming.com");

      const etPassword = await client.$("id:com.rgnet.rgnet1:id/etPassword");
      await etPassword.setValue("botxyz431@Realgaming.com.yon21");

      const btnLogin = await client.$("id:com.rgnet.rgnet1:id/btnLogin");
      await btnLogin.click();

      setTimeout(async () => {
        const btnOk = await client.$("id:com.rgnet.rgnet1:id/btnOk");
        await btnOk.waitForDisplayed({ timeout: 10000 });
        const isDisplayed = await btnOk.isDisplayed();
        if (isDisplayed) {
          await btnOk.click();
        }

        // add funding

        const btnAddFunds = await client.$(
          "id:com.rgnet.rgnet1:id/btnAddFunds"
        );
        await btnAddFunds.click();

        //check it

        const tvAmountToAdd = await client.$(
          "id:com.rgnet.rgnet1:id/tvAmountToAdd"
        );
        await tvAmountToAdd.touchAction([
          "press",
          { action: "moveTo", x: 100, y: 100 },
          "release",
        ]);

        const tvPaymentMethod = await client.$(
          "id:com.rgnet.rgnet1:id/tvPaymentMethod"
        );
        await tvPaymentMethod.touchAction([
          "press",
          { action: "moveTo", x: 100, y: 100 },
          "release",
        ]);

        const btnAmount = await client.$("id:com.rgnet.rgnet1:id/btnAmount");
        await btnAmount.click();
      }, 80000);
    }, 2000);
  }, 10000);
}
main();
