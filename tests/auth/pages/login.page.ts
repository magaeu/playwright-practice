import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
   private readonly emailField: Locator;
   private readonly passwordField: Locator;
   private readonly loginButton: Locator;
   private readonly cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailField = this.page.locator('#customerId');
    this.passwordField = this.page.locator('#password');
    this.loginButton = this.page.locator('button=(type="submit")');
    this.cancelButton = this.page.locator('#cancelBtns');
  }

  async goTo() {
    await this.page.goto('/login.html');
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