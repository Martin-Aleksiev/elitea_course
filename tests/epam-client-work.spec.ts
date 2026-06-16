import { test, expect } from '@playwright/test';

test('EPAM client work navigation', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const servicesMenu = page.getByRole('link', { name: 'Services' });
  await servicesMenu.hover();
  await servicesMenu.click();

  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  await expect(page.getByText('Client Work')).toBeVisible();
});
