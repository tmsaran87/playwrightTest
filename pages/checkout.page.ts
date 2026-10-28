import { type Page, expect } from '@playwright/test';

export class CheckoutPage {
  constructor(private readonly page: Page) {}

  async enterCustomerDetails(firstName: string, lastName: string, postalCode: string): Promise<void> {
    await this.page.getByTestId('firstName').fill(firstName);
    await this.page.getByTestId('lastName').fill(lastName);
    await this.page.getByTestId('postalCode').fill(postalCode);
    await this.page.getByTestId('continue').click();
  }

  async expectOverview(): Promise<void> {
    await expect(this.page.getByTestId('title')).toHaveText('Checkout: Overview');
  }

  async finishOrder(): Promise<void> {
    await this.page.getByTestId('finish').click();
    await expect(this.page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
  }
}