module.exports = {
  'Demo google' : function (browser) {
    browser
      .url('http://google.com')
      .waitForElementVisible('body', 2000)
      .end();
  }
};
