import { expect, test } from '@playwright/test';

test('home links to getting started docs', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Wash UI', level: 1 })).toBeVisible();
	await page.getByRole('link', { name: 'Get started' }).click();
	await expect(page).toHaveURL(/\/docs\/getting-started/);
	await expect(page.getByRole('heading', { name: 'Getting started', level: 1 })).toBeVisible();
});
