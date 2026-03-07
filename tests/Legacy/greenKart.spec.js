import { test, expect } from '@playwright/test';

test('Verify totals match', async ({ page }) => {

  //Launch URL
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
//   await page.getByRole('img', { name: 'Brocolli - 1 Kg' }).click();
    // page.getByRole('img', { name: /Brocolli - 1 Kg/i })
   let firstItem = page.locator('div.products').locator('div').nth(0)
   console.log(firstItem)
 

});
