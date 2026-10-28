import { test, expect } from '../fixtures/test.fixture';

test('inventory can be sorted by price low to high @regression', async ({ loginPage, inventoryPage, page }) => {
  await loginPage.goto();
  await loginPage.login(process.env.SAUCE_USERNAME ?? 'standard_user', process.env.SAUCE_PASSWORD ?? 'secret_sauce');
  await inventoryPage.expectLoaded();
  await inventoryPage.sortBy('lohi');

  const prices = await page.getByTestId('inventory-item-price').allTextContents();
  const numericPrices = prices.map(value => Number(value.replace('$', '')));
  expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
});

test('cart badge increments when a product is added @smoke', async ({ loginPage, inventoryPage, page }) => {
  await loginPage.goto();
  await loginPage.login(process.env.SAUCE_USERNAME ?? 'standard_user', process.env.SAUCE_PASSWORD ?? 'secret_sauce');
  await inventoryPage.addProductToCart('Sauce Labs Backpack');
  await expect(page.getByTestId('shopping-cart-badge')).toHaveText('1');
});