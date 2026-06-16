import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('navigates from Services to Explore Our Client Work and verifies Client Work text', async ({ page }) => {
