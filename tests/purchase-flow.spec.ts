import { test, expect } from '../fixtures/test.fixture';

const username = process.env.SAUCE_USERNAME ?? 'standard_user';
const password = process.env.SAUCE_PASSWORD ?? 'secret_sauce';

test('customer can purchase a product end to end @smoke @regression', async ({
  loginPage, inventoryPage, cartPage, checkoutPage, page
}) => {
  await loginPage.goto();
  await loginPage.login(username, password);
  await inventoryPage.expectLoaded();

  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await inventoryPage.openCart();
  await cartPage.expectLoaded();
  await cartPage.expectProductInCart('Sauce Labs Backpack');

  await cartPage.checkout();
  await checkoutPage.enterCustomerDetails('Test', 'Customer', '75068');
  await checkoutPage.expectOverview();
  await expect(page.getByTestId('inventory-item')).toContainText('Sauce Labs Backpack');
  await checkoutPage.finishOrder();
});