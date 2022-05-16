const wdio = require("webdriverio");
const assert = require("assert");
const opts = require("./config");

async function main() {
  const client = await wdio.remote(opts);

  setTimeout(async () => {
    const field = await client.$("//android.widget.Button[@text='OK']");
    await field.click();
  }, 2000);

  setTimeout(async () => {
    const password = await client.$("id:com.rgnet.rgnet1:id/etPassword");
    await password.setValue("botxyz321  @Realgaming.com");

    // login to the system
    // const login_btn = await client.$("id:com.rgnet.rgnet1:id/btnLogin")
    // await login_btn.click()

    const signup_btn = await client.$("id:com.rgnet.rgnet1:id/tvSignUp");
    await signup_btn.click();

    const emailAddress = await client.$("id:com.rgnet.rgnet1:id/etEmail");
    await emailAddress.setValue("botxyz321@Realgaming.com");

    const value = await emailAddress.getText();

    const btn_continue = await client.$("id:com.rgnet.rgnet1:id/btnContinue");
    await btn_continue.click();

    setTimeout(async () => {
      // second page
      const userName = await client.$("id:com.rgnet.rgnet1:id/etUserName");
      await userName.waitForDisplayed({ timeout: 500000 });
      await userName.setValue("botxyz321");

      // password
      const etPassword = await client.$("id:com.rgnet.rgnet1:id/etPassword");
      await etPassword.setValue("botxyz321@Realgaming.com.yon21");

      const etConfirmPassword = await client.$(
        "id:com.rgnet.rgnet1:id/etConfirmPassword"
      );
      await etConfirmPassword.setValue("botxyz321@Realgaming.com.yon21");

      //phone number
      const phone_number_edt = await client.$(
        "id:com.rgnet.rgnet1:id/phone_number_edt"
      );

      await phone_number_edt.setValue("7864206154");

      await btn_continue.click();

      // Third Page

      //first name
      const etFirstName = await client.$("id:com.rgnet.rgnet1:id/etFirstName");
      await etFirstName.waitForDisplayed({ timeout: 5000 });
      await etFirstName.setValue("Yon");

      // last name

      const etLastName = await client.$("id:com.rgnet.rgnet1:id/etLastName");
      await etLastName.setValue("Alem");

      const etAddress = await client.$("id:com.rgnet.rgnet1:id/etAddress");
      await etAddress.setValue("Compton City");

      const etCity = await client.$("id:com.rgnet.rgnet1:id/etCity");
      await etCity.setValue("Newyork");

      const spState = await client.$("id:com.rgnet.rgnet1:id/spState");
      await spState.touchAction([
        "press",
        { action: "moveTo", x: 100, y: 300 },
        "release",
      ]);

      const etZipCode = await client.$("id:com.rgnet.rgnet1:id/etZipCode");
      await etZipCode.setValue("89031");

      const text1 = await client.$("id:android:id/text1");
      await text1.touchAction([
        "press",
        { action: "moveTo", x: 100, y: 300 },
        "release",
      ]);

      const etDriverLicenseNumber = await client.$(
        "id:com.rgnet.rgnet1:id/etDriverLicenseNumber"
      );
      await etDriverLicenseNumber.waitForDisplayed({ timeout: 500000 });
      await etDriverLicenseNumber.setValue("0002100220");

      await btn_continue.click();
      // fourth page
      setTimeout(async () => {
        await btn_continue.click();

        setTimeout(async () => {
          const etMonth = await client.$("id:com.rgnet.rgnet1:id/etMonth");
          await etMonth.waitForDisplayed({ timeout: 500000 });
          await etMonth.setValue("08");

          const etDay = await client.$("id:com.rgnet.rgnet1:id/etDay");
          await etDay.setValue("18");

          const etYear = await client.$("id:com.rgnet.rgnet1:id/etYear");
          await etYear.setValue("1998");

          const etSocial1 = await client.$("id:com.rgnet.rgnet1:id/etSocial1");
          await etSocial1.setValue("139");

          const etSocial2 = await client.$("id:com.rgnet.rgnet1:id/etSocial2");
          await etSocial2.setValue("55");

          const etSocial3 = await client.$("id:com.rgnet.rgnet1:id/etSocial3");
          await etSocial3.setValue("3334");

          // const text1 = await client.$("id:android:id/text1");
          // await text1.setValue("United States");
          await btn_continue.click();

          setTimeout(async () => {
            // click continue button
            const etAnswer1 = await client.$(
              "id:com.rgnet.rgnet1:id/etAnswer1"
            );
            await etAnswer1.setValue("Atalay");

            const etAnswer2 = await client.$(
              "id:com.rgnet.rgnet1:id/etAnswer2"
            );
            await etAnswer2.setValue("United States");

            await btn_continue.click();

            setTimeout(async () => {
              const play_button = await client.$(
                "//android.widget.Button[@text='Start Playing']"
              );
              await play_button.waitForDisplayed({ timeout: 300000 });
              await play_button.click();
            }, 10000);
          }, 10000);
        }, 20000);
      }, 10000);
    }, 6000);
    // assert.strictEqual(value, "botxyz21@Realgaming.com");
  }, 2000);
  // await client.deleteSession();
}

main();
//   etEmail
