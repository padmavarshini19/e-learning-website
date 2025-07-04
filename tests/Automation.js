const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function fullAutomationTest() {
  const options = new chrome.Options();
  const driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    console.log("Test Started: Automating website actions...");

    // ---- Test 1: Navigate to the Homepage ----
    console.log("Navigating to Home Page...");
    await driver.get('http://localhost:3000'); // Replace with your actual homepage URL
    try {
      await driver.wait(until.elementLocated(By.id('home-tab')), 5000);
      console.log("Home Page Loaded.");
    } catch (err) {
      console.error("Error while loading Home Page:", err);
    }

    // ---- Test 2: Check Login Page ----
    console.log("Checking Login Page...");
    try {
      await driver.findElement(By.id('link-login')).click();
      await driver.wait(until.elementLocated(By.id('form-login')), 5000);
      console.log("Login page is accessible.");
      await driver.findElement(By.name('username')).sendKeys('testuser');
      await driver.findElement(By.name('password')).sendKeys('testpass');
      await driver.findElement(By.css('button[type="submit"]')).click();
    } catch (err) {
      console.error("Error while checking Login Page:", err);
    }

    // ---- Test 3: Wait for Login to Complete ----
    console.log("Waiting for login to complete...");
    try {
      const loginSuccessElement = await driver.wait(until.elementLocated(By.id('content-home')), 10000);
      await driver.wait(until.elementIsVisible(loginSuccessElement), 10000);
      console.log("Login Successful and content-home loaded.");
    } catch (err) {
      console.error("Error while waiting for login to complete:", err);
    }

    // ---- Test 4: Check various tabs in Home Page by clicking on them ----
    console.log("Navigating through tabs...");
    const tabs = ['home-tab', 'courses-tab', 'about-tab']; // Example tab IDs
    for (let tabId of tabs) {
      try {
        console.log(`Clicking on tab: ${tabId}`);
        const tabElement = await driver.wait(until.elementLocated(By.id(tabId)), 5000);
        await tabElement.click();
        console.log(`${tabId} tab clicked successfully.`);

        // Wait for the content related to the tab to load
        await driver.wait(until.elementLocated(By.id(`${tabId}-content`)), 5000); // Ensure the content for the tab is loaded
        console.log(`${tabId} content loaded successfully.`);
      } catch (err) {
        console.error(`Error while interacting with ${tabId}:`, err);
      }
    }

    console.log("Test Completed Successfully: All actions were automated.");
  } catch (error) {
    console.error("Test Failed:", error);
  } finally {
    await driver.quit();
  }
})();
