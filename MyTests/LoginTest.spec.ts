import playwrightConfig from "../playwright.config";
import {test, expect, Page, Locator, Browser} from '@playwright/test'
import { chromium, firefox } from "@playwright/test"

test('LoginTest' , async()=>{
    const browser:Browser = await chromium.launch({headless:false, channel:'chrome'});
    const page:Page = await browser.newPage();
    await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    const firstName:Locator = await page.locator("#input-firstname");
    await firstName.fill("Test");

    const lastName:Locator = await page.locator("#input-lastname");
    await lastName.fill("playwright");

    const Email:Locator = await page.locator("#input-email");
    await Email.fill("div6test123@yopmail.com");

    const telephone:Locator = await page.locator("#input-telephone");
    await telephone.fill("9876543210");

    const password:Locator = await page.locator("#input-password");
    await password.fill("test123");

    const confirmPassword:Locator = await page.locator("#input-confirm");
    await confirmPassword.fill("test123");
    
    const policy:Locator = await page.locator("[name = 'agree']");
    await policy.click();

    const continueButton:Locator = await page.locator("[type = 'submit']");
    await continueButton.click();

    // await page.screenshot({path: 'loginpage.png'});

    await expect(page.locator('h1')).toContainText('Your Account Has Been Created!');
    
    await browser.close();
});