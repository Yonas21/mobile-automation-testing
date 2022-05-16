const opts = require("../config/index");
const wdio = require("webdriverio");
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

/**
 * Opens a sub page of the page
 * @param path path of the sub page (e.g. /path/to/page.html)
 */

module.exports = async () => {
  const client = await wdio.remote(opts);
  const field = await client.$("//android.widget.Button[@text='OK']");
  await field.click();
};
