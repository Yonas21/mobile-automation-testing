const wdio = require("webdriverio");
const opts = require("./config");

async function main() {
  let generated = Math.floor(100 + Math.random() * 900);
  const client = await wdio.remote(opts);

  setTimeout(async () => {
    const field = await client.$("//android.widget.Button[@text='OK']");
    await field.click();
  }, 2000);

  setTimeout(async () => {
    const signup_btn = await client.$("id:com.rgnet.rgnet1:id/tvSignUp");
    await signup_btn.click();

    const emailAddress = await client.$("id:com.rgnet.rgnet1:id/etEmail");
    await emailAddress.waitForDisplayed({ timeout: 5000 });
    await emailAddress.setValue(`bot${generated}@Realgaming.com`);

    const btn_continue = await client.$("id:com.rgnet.rgnet1:id/btnContinue");
    await btn_continue.click();

    setTimeout(async () => {
      // second page
      const userName = await client.$("id:com.rgnet.rgnet1:id/etUserName");
      await userName.waitForDisplayed({ timeout: 500000 });
      await userName.setValue(`bot${generated}`);

      // password
      const etPassword = await client.$("id:com.rgnet.rgnet1:id/etPassword");
      await etPassword.setValue(`bot${generated}@Realgaming.com.yon21`);

      const etConfirmPassword = await client.$(
        "id:com.rgnet.rgnet1:id/etConfirmPassword"
      );
      await etConfirmPassword.setValue(`bot${generated}@Realgaming.com.yon21`);
      await client.pressKeyCode(66);
      //phone number
      const phone_number_edt = await client.$(
        "id:com.rgnet.rgnet1:id/phone_number_edt"
      );

      await phone_number_edt.setValue("7864206154");

      await btn_continue.click();

      //first name
      const etFirstName = await client.$("id:com.rgnet.rgnet1:id/etFirstName");
      await etFirstName.waitForDisplayed({ timeout: 5000 });
      await etFirstName.touchAction([
        { action: "longPress", x: 53, y: 0 },
        { action: "moveTo", x: 200, y: 500 },
        "release",
      ]);
      await etFirstName.setValue("test");
      await client.pressKeyCode(66);

      // last name

      const etLastName = await client.$("id:com.rgnet.rgnet1:id/etLastName");
      await etLastName.setValue("poker");
      await client.pressKeyCode(66);

      const etAddress = await client.$("id:com.rgnet.rgnet1:id/etAddress");
      await etAddress.setValue("Compton City");
      await client.pressKeyCode(66);

      const etCity = await client.$("id:com.rgnet.rgnet1:id/etCity");
      await etCity.setValue("Newyork");
      await client.pressKeyCode(66);
      // client.pressKeyCode(66);
      // await etCity.addValue("NewYork" + "\n");

      const spState = await client.$("id:android:id/text1");
      await spState.touchAction([
        "press",
        { action: "moveTo", x: 100, y: 300 },
        "release",
      ]);
      await client.pressKeyCode(66);

      const etZipCode = await client.$("id:com.rgnet.rgnet1:id/etZipCode");
      await etZipCode.setValue("89031");
      await client.pressKeyCode(66);

      const text1 = await client.$("id:android:id/text1");
      await text1.touchAction([
        "press",
        { action: "moveTo", x: 200, y: 500 },
        "release",
      ]);
      await client.pressKeyCode(66);

      const etDriverLicenseNumber = await client.$(
        "id:com.rgnet.rgnet1:id/etDriverLicenseNumber"
      );
      await etDriverLicenseNumber.waitForDisplayed({ timeout: 500000 });
      await etDriverLicenseNumber.setValue("0002100220");

      await btn_continue.click();
      // fourth page
      await btn_continue.waitForDisplayed({ timeout: 1000 });
      await btn_continue.click();

      let lastSSN = Math.floor(1000 + Math.random() * 9000);
      const etMonth = await client.$("id:com.rgnet.rgnet1:id/etMonth");
      await etMonth.waitForDisplayed({ timeout: 500000 });
      await etMonth.setValue("08");

      const etDay = await client.$("id:com.rgnet.rgnet1:id/etDay");
      await etDay.setValue("18");

      const etYear = await client.$("id:com.rgnet.rgnet1:id/etYear");
      await etYear.setValue("1995");

      const etSocial1 = await client.$("id:com.rgnet.rgnet1:id/etSocial1");
      await etSocial1.setValue("066");
      await client.pressKeyCode(66);

      const etSocial2 = await client.$("id:com.rgnet.rgnet1:id/etSocial2");
      await etSocial2.setValue("86");

      const etSocial3 = await client.$("id:com.rgnet.rgnet1:id/etSocial3");
      await etSocial3.setValue(`${lastSSN}`);

      // const text1 = await client.$("id:android:id/text1");
      // await text1.setValue("United States");
      await btn_continue.click();

      // click continue button
      const etAnswer1 = await client.$("id:com.rgnet.rgnet1:id/etAnswer1");
      await etAnswer1.setValue("Atalay");

      const etAnswer2 = await client.$("id:com.rgnet.rgnet1:id/etAnswer2");
      await etAnswer2.setValue("United States");

      await btn_continue.click();

      setTimeout(async () => {
        const play_button = await client.$(
          "//android.widget.Button[@text='Start Playing']"
        );
        await play_button.waitForDisplayed({ timeout: 300000 });
        await play_button.click();

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
            const emailAddress = await client.$(
              "id:com.rgnet.rgnet1:id/etEmail"
            );
            await emailAddress.setValue(`bot${generated}@Realgaming.com`);

            const etPassword = await client.$(
              "id:com.rgnet.rgnet1:id/etPassword"
            );
            await etPassword.setValue(`bot${generated}@Realgaming.com.yon21`);

            const btnLogin = await client.$("id:com.rgnet.rgnet1:id/btnLogin");
            await btnLogin.click();

            setTimeout(async () => {
              // const btnOk = await client.$("id:com.rgnet.rgnet1:id/btnOk");
              // await btnOk.waitForDisplayed({ timeout: 200000 });
              // const isExisting = await btnOk.isExisting();
              // if (isExisting) {
              //   await btnOk.click();
              // }
              setTimeout(async () => {
                // const btnOk = await client.$("id:com.rgnet.rgnet1:id/btnOk");
                // await btnOk.waitForDisplayed({ timeout: 200000 });
                // const isExisting = await btnOk.isExisting();
                // if (isExisting) {
                //   await btnOk.click();
                // }
                const btnAddFunds = await client.$(
                  "id:com.rgnet.rgnet1:id/btnAddFunds"
                );
                await btnAddFunds.waitForDisplayed({ timeout: 200000 });
                await btnAddFunds.click();

                //check it
                setTimeout(async () => {
                  const tvAmountToAdd = await client.$(
                    "id:com.rgnet.rgnet1:id/tvAmountToAdd"
                  );
                  const amountCoordinates = await tvAmountToAdd.getLocation();
                  console.log("amount coordinates", amountCoordinates);

                  // await tvAmountToAdd.touchAction([
                  //   "longPress",
                  //   {
                  //     action: "moveTo",
                  //     x: amountCoordinates.x,
                  //     y: amountCoordinates.y,
                  //   },
                  //   "release",
                  // ]);

                  const tvPaymentMethod = await client.$(
                    "id:com.rgnet.rgnet1:id/tvPaymentMethod"
                  );

                  await tvPaymentMethod.touchAction(["tap"]);

                  const paymentOptions = await client.$(
                    "//android.widget.TextView[@text='Other Payment Method']"
                  );
                  await paymentOptions.waitForDisplayed({ timeout: 3000 });
                  await paymentOptions.click();

                  const masterCardOption = await client.$(
                    "//android.widget.TextView[@text='Visa & Mastercard']"
                  );
                  await masterCardOption.waitForDisplayed({ timeout: 3000 });
                  await masterCardOption.click();

                  const etCardNumber = await client.$(
                    "id:com.rgnet.rgnet1:id/etCardNumber"
                  );
                  await etCardNumber.waitForDisplayed({ timeout: 3000 });
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
                  const btnSubmit = await client.$(
                    "id:com.rgnet.rgnet1:id/btnSubmit"
                  );
                  await btnSubmit.click();

                  const btnAmount = await client.$(
                    "id:com.rgnet.rgnet1:id/btnAmount"
                  );
                  await btnAmount.waitForDisplayed({ timeout: 100000 });
                  await btnAmount.click();

                  setTimeout(async () => {
                    const btnSubmit = await client.$("id:android:id/button1");
                    await btnSubmit.click();

                    await btnSubmit.waitForDisplayed({ timeout: 200000 });
                    await btnSubmit.click();
                  }, 20000);
                }, 2000);
              }, 6000);

              // add funding
            }, 20000);
          }, 600);
        }, 6000);
      }, 6000);
    }, 6000);
    // assert.strictEqual(value, "bot21@Realgaming.com");
  }, 2000);
  // await client.deleteSession();
}

main();
//   etEmail
