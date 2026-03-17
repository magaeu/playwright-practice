import { Locator, Page } from "@playwright/test";

export class LoginPage {
   readonly emailField: Locator;
   readonly passwordField: Locator;
   readonly loginButton: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.emailField = page.locator('id=input-email');
    this.passwordField = page.locator('id=input-password');
    this.loginButton = page.locator('input:has-text("Login")');
  }

  async goTo() {
    await this.page.goto('/index.php?route=account/login');
  }

  async fillEmail(email: string) {
    await this.emailField.fill(email);
  }


  async fillPassword(password: string) {
    await this.passwordField.fill(password);
  }


  async clickLogin() {
    await this.loginButton.click();
  }

  async login(email: string, password: string) {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }
}