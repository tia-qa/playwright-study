import { test, expect } from '@playwright/test';
//import empdata from 'latest/testdata/addempTestData.json';
//import empstatus from  "latest/testdata/addempTestData.json";
import empdata from "../testdata/addempTestData.json";
import logindata from  "../testdata/logindata.json";

//const empstatus = ['part time', 'full time', 'QA Engineer']


test('Verify admin can create employment status', async ({ page }) => {
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

    //click on employment status
    await page.getByRole('menuitem', { name: 'Employment Status' }).click()
    //verify employment status is displayed
    await expect(page.getByRole('heading', { name: 'Employment Status' })).toBeVisible()
    //click on Add 
    await page.getByRole('button', { name: 'Add' }).click()

    //employment status name
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(empdata.employment);
    //click on save
    await page.getByRole('button', { name: 'Save' }).click()

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus')

    await expect(page.getByText(empdata.employment, { exact: true })).toBeVisible()
    console.log('yaay')

    //close browser
    await page.close()

})