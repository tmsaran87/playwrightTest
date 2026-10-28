import { test, expect } from '../fixtures/test.fixture';

const standardUser = process.env.SAUCE_USERNAME ?? 'standard_user';
const password = process.env.SAUCE_PASSWORD ?? 'secret_sauce';

test.describe('Login', () => {
  test('standard user can log in @smoke', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login(standardUser, password);
    await inventoryPage.expectLoaded();
  });

  test('invalid password displays a helpful error @regression', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login(standardUser, 'invalid_password');
    await loginPage.expectLoginError('Username and password do not match');
  });

  test('locked out user cannot log in @regression', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', password);
    await loginPage.expectLoginError('Sorry, this user has been locked out');
  });

  test('empty credentials are rejected @regression', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toContainText('Username is required');
  });
});