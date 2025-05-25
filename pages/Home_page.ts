import { expect, Locator, Page } from "@playwright/test";

export class Homepage {
    readonly page: Page;
    readonly myInfoLink: Locator;
    readonly jobLink: Locator;
    readonly jobDetailsTitle: Locator;
    readonly employmentStatus: Locator;


    constructor(page: Page) {
        this.page = page;
        this.myInfoLink = page.getByRole('link', {name: "My Info"});
        this.jobLink = page.getByRole('link', {name: "Job"});
        this.jobDetailsTitle = page.getByRole('heading', {name: "Job Details"});
        this.employmentStatus = page.getByText('Full-Time Permanent');
        // page.locator('.oxd-select-wrapper .oxd-select-text--active .oxd-select-text-input').nth(4);
    }

    async Job_Details() {
        await this.myInfoLink.click();
        await this.jobLink.click();
        await expect(this.jobDetailsTitle).toBeVisible();
        let estatus = await this.employmentStatus.textContent();
        console.log("Value from Employment Status is: "+ estatus);
        

    }

}