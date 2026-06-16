import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('navigates from Services to Explore Our Client Work and verifies Client Work text', async ({ page }) => {
    await page.goto('https://www.epam.com/');
    await page.getByRole('button', { name: 'Services' }).click();
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();
    await expect(page.getByText('Client Work')).toBeVisible();
  });
});
