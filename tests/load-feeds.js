const { Builder, By } = require('selenium-webdriver');

async function testOpen() {
  const driver = await new Builder()
    .forBrowser('MicrosoftEdge')
    .build();
  await driver.get('https://transferprice-energysolution-bluenrg.dynamic.int.cd8.cloud/LoadFeeds');

  /*
  const buttons = await driver.findElements(By.className('icm-plus2'));
  await buttons[0].click();
  */

  await driver.executeAsyncScript(
      "const expectedId = '45313';"
      + "const idLinks = Array.from(document.getElementsByTagName('a'));"
      + "const topIdLink = idLinks.filter((l) => l.innerText == expectedId);"
      + "topIdLink[0].click();"
      // BACKUP plan right below also works!
      //+ "if (topIdLink[0].innerText == expectedId) navigateEdit('LoadFeed', expectedId);"
    );
}

testOpen();
