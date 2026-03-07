import { test, expect } from '@playwright/test';
import logindata from "../../testdata/logindata.json";
//import faker from 'faker';
import { faker } from '@faker-js/faker'

test('Verify admin can add job title', async ({ page }) => {
     //launch URL
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //enter username
    await page.getByRole('textbox', { name: 'username' }).fill(logindata.username)

    //enter password
    await page.getByRole('textbox', { name: 'password' }).fill(logindata.password)

    //click on Login URL
    await page.getByRole('button', { name: 'Login' }).click()

    //verify dashboard URL
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    //click on Admin in the sidebar
    await page.getByRole('link', { name: 'Admin' }).click()

    //click on Job
    await page.getByText('Job', { exact: true }).click()

    //click on job titles
    await page.getByRole('menuitem', { name: 'Job Titles' }).click()
    //verify job titles is displayed
    await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible()
    //click on Add 
    await page.getByRole('button', { name: 'Add' }).click()

    //job title name
    const jobttitle  = faker.person.jobTitle();
    
await page.locator('input.oxd-input.oxd-input--active').first().fill(jobttitle);
    //click on save
    await page.getByRole('button', { name: 'Save' }).click()

    await expect(page.getByRole('cell', { name: jobttitle })).toBeVisible();

})