import { test, expect, Locator, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage"
import {Homepage } from "../pages/Home_page";

let login : LoginPage;
let homepage : Homepage;

test.beforeEach("Admin Login", async({ page })=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/"); 
    login = new LoginPage(page);
    homepage = new Homepage(page);
    await login.Login("Admin","admin123");

});
test.describe("Tests created for challenge", () => {
test("Verify Job Details @sanity", async({ page })=> {
    await homepage.Job_Details();
})
})
