import { expect, Locator, Page } from "@playwright/test"; 
export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly dashboarPage: Locator;

    constructor(page: Page) {
        this.page= page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole('button', {name: "Login"});
        this.dashboarPage = page.getByRole('heading', {name: "Dashboard"});

    }

    async Login(username: string, password: string) {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
        await expect(this.dashboarPage).toBeVisible();
    }

}
export default LoginPage;