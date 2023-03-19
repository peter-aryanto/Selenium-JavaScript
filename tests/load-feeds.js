const { Builder, By } = require('selenium-webdriver');

async function testOpen() {
  const driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .build();
  await driver.get('https://transferprice-energysolution-bluenrg.dynamic.int.cd8.cloud/LoadFeeds');

  const buttons = await driver.findElements(By.className('icm-plus2'));
  await buttons[0].click();
}

testOpen();
