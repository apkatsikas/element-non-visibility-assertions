import { test, expect } from '@playwright/test';
import path from 'path';

const htmlPath = path.join(__dirname, '..', 'index.html');

test('demonstrate issue with asserting for non visibility', async ({ page }) => {
  await page.goto(htmlPath);
  await expect(page.getByText('early')).toBeVisible();
  
  // Un-comment this line to see the failure
  // await page.waitForTimeout(300);
  await expect(page.getByText('late')).not.toBeVisible();
});
