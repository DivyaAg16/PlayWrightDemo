import { Page } from "@playwright/test";

export default class HomePage {


    constructor(public page: Page) {

    }

    async clickOnSpecialHotMenu() {
        await Promise.all([
            this.page.waitForLoadState('networkidle'),
            this.page.click("(//span[contains(text(),'Special')]/../..)[2]")
        ])
    }
}