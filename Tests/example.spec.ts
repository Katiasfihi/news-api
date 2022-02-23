import { test, expect, Page } from '@playwright/test';

test.skip('should check if the search label and the title are rendered', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const search = page.locator('xpath=//label[@data-testid="search"]')
  await expect(search).toHaveText('search:');
  const title = page.locator('xpath=//p[@data-testid="heading"]')
  await expect(title).toContainText('NEWS API CONDE NAST')
})

test.skip('should navigate to the Article page', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.click("text=By")
  await expect(page).toHaveURL(/news-article-page/)
  const title = page.locator('xpath=//h1[@data-testid="title"]')
  await expect(title).toContainText('NEWS API CONDE NAST')
})
