import { Locator, Page } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly loginHeader: Locator;
  private readonly emailField: Locator;
  private readonly passwordField: Locator;
  private readonly loginButton: Locator;
  private readonly rememberMeCheckbox: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginHeader = this.page.getByText('Login Form', { exact: true });
    this.emailField = this.page.locator('#username');
    this.passwordField = this.page.locator('#password');
    this.loginButton = this.page.locator('#log-in');
    this.rememberMeCheckbox = this.page.locator('.form-check-input');
    this.errorMessage = this.page.locator('#errorMsg');
  }

  async goTo(): Promise<void> {
    await this.page.goto('https://demo.applitools.com',
      { 
        waitUntil: 'domcontentloaded' 
    });
  }

  async getUrl(): Promise<string> {
    return this.page.url();
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailField.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordField.fill(password);
  }

  async clickLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async login(email: string, password: string): Promise<void> {
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async getErrorMessage(): Promise<string> {
    return (await this.errorMessage.textContent()) || '';
  }
}