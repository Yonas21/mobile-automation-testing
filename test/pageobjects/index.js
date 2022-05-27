const opts = require("../../config");
const wdio = require("webdriverio");
/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */

/**
 * Opens a sub page of the page
 * @param path path of the sub page (e.g. /path/to/page.html)
 */

class Elements {
  //   constructor(client) {
  //     client = wdio.remote(opts);
  //   }
  get SignUpButtons() {
    return client.$("id:com.rgnet.rgnet1:id/tvSignUp");
  }
}

module.exports = new Elements();
