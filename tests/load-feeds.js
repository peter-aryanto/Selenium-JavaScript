const WebDriver = require('selenium-webdriver');

async function testOpen() {
  const driver = await new WebDriver.Builder()
    .forBrowser('MicrosoftEdge')
    .build();
  //await driver.get('https://transferprice-energysolution-bluenrg.dynamic.int.cd8.cloud/LoadFeeds');
  await driver.get('https://google.com');
}

testOpen();
