const opts = {
  path: "/wd/hub",
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "12",
    deviceName: "emulator-5554",
    appPackage: "com.rgnet.rgnet1",
    appActivity: "com.realgaming.realgaming1.ui.activity.SplashActivity",
    automationName: "UiAutomator2",
    autoGrantPermissions: "true",
  },
};

module.exports = opts;
