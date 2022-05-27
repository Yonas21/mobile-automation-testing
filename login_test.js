const wdio = require("webdriverio");
const opts = require("./config");

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
      await emailAddress.setValue("botxyz242@Realgaming.com");

      const etPassword = await client.$("id:com.rgnet.rgnet1:id/etPassword");
      await etPassword.setValue("botxyz242@Realgaming.com.yon21");

      const btnLogin = await client.$("id:com.rgnet.rgnet1:id/btnLogin");
      await btnLogin.click();

      setTimeout(async () => {
        const btnOk = await client.$("id:com.rgnet.rgnet1:id/btnOk");
        await btnOk.waitForDisplayed({ timeout: 200000 });
        const isExisting = await btnOk.isExisting();
        if (isExisting) {
          await btnOk.click();
        }
        // const btnOk = await client.$("id:com.rgnet.rgnet1:id/btnOk");
        // await btnOk.waitForDisplayed({ timeout: 80000 });
        // const isDisplayed = await btnOk.isDisplayed();
        // console.log("is displayed ---->", isDisplayed);
        // if (isDisplayed) {
        //   await btnOk.click();
        // }
        const btnAddFunds = await client.$(
          "id:com.rgnet.rgnet1:id/btnAddFunds"
        );
        await btnAddFunds.waitForDisplayed({ timeout: 40000 });
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

        const paymentOptions = await client.$(
          "//android.widget.LinearLayout[@text='Other Payment Method']"
        );
        await paymentOptions.waitForDisplayed({ timeout: 300000 });
        await paymentOptions.click();

        const btnAmount = await client.$("id:com.rgnet.rgnet1:id/btnAmount");
        await btnAmount.click();

        // android:id/button1 / continue
        const continue_btn = await client.$("id:android:id/button1");
        continue_btn.click();
        // android:id/button2 / edit

        // next page

        setTimeout(async () => {
          // com.rgnet.rgnet1:id/etCardNumber
          const etCardNumber = await client.$(
            "id:com.rgnet.rgnet1:id/etCardNumber"
          );
          await etCardNumber.setValue("5555-5555-5555-4444");

          // com.rgnet.rgnet1:id/etExpireDate
          const etExpireDate = await client.$(
            "id:com.rgnet.rgnet1:id/etExpireDate"
          );
          await etExpireDate.setValue("04/20");

          // com.rgnet.rgnet1:id/etCVC
          const etCVC = await client.$("id:com.rgnet.rgnet1:id/etCVC");
          await etCVC.setValue("420");

          // com.rgnet.rgnet1:id/btnSubmit
          const btnSubmit = await client.$("id:com.rgnet.rgnet1:id/btnSubmit");
          await btnSubmit.click();

          setTimeout(async () => {
            const btnSubmit = await client.$("id:android:id/button1");
            await btnSubmit.click();
          }, 20000);
        }, 6000);

        // add funding
      }, 2000);
    }, 2000);
  }, 2000);
}
main();
