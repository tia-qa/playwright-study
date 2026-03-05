import { test, expect } from '@playwright/test';
//import empdata from "../testdata/addempTestData.json";
import logindata from "../testdata/logindata.json";
import { faker } from '@faker-js/faker'
import path from 'path';



//const empstatus = ['part time', 'full time', 'QA Engineer']


test.beforeEach(async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByRole('textbox', { name: 'username' }).fill(logindata.username)
    await page.getByRole('textbox', { name: 'password' }).fill(logindata.password)

    // click + wait for navigation
    await Promise.all([
        page.waitForURL(/dashboard/),
        page.getByRole('button', { name: 'Login' }).click()
    ])
    await page.getByRole('link', { name: 'PIM' }).click()
    await page.getByRole('link', { name: 'Add Employee' }).click()

    //enter first name
    await page.getByRole('textbox', { name: 'First Name' }).fill(faker.person.firstName())
    //enter last name
    await page.getByRole('textbox', { name: 'Last Name' }).fill(faker.person.lastName())
    //enter employee id
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(faker.number.int({ min: 1000, max: 9999 }).toString());

})



test('Verify add employee with mandatory fields', { tag: "@PIM" }, async ({ page }) => {

    //click on save
    await page.getByRole('button', { name: 'Save' }).click()

    const errormessage = page.getByText('Employee Id already exists', { exact: true })

    if (await errormessage.isVisible()) {
        // Handle the error case, refill employee id and save again
        await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(faker.number.int({ min: 1000, max: 9999 }).toString());
        await page.getByRole('button', { name: 'Save' }).click()
    }

    //verify personal details page
    //save and wait for navigation
    await Promise.all([
        page.waitForURL(/viewPersonalDetails/),
        page.getByRole('button', { name: 'Save' }).click()
    ]);

})

test(' Verify user can add employee with JPEG image', { tag: "@PIM" }, async ({ page }) => {

    const filePath = path.join(__dirname, '../testdata/gif5.jpeg');

    //upload
    await page.locator('input[type="file"]').setInputFiles(filePath);

    //save and wait for navigation
    await Promise.all([
        page.waitForURL(/viewPersonalDetails/),
        page.getByRole('button', { name: 'Save' }).click()
    ]);

})

test(' Verify user can add employee with PNG image', { tag: "@PIM" }, async ({ page }) => {

    const filePath = path.join(__dirname, '../testdata/png1.png');

    //upload
    await page.locator('input[type="file"]').setInputFiles(filePath);

    //save and wait for navigation
    await Promise.all([
        page.waitForURL(/viewPersonalDetails/),
        page.getByRole('button', { name: 'Save' }).click()
    ]);


})

test(' Verify user can add employee with GIF image', { tag: "@PIM" }, async ({ page }) => {

    const filePath = path.join(__dirname, '../testdata/gif2.gif');

    //upload
    await page.locator('input[type="file"]').setInputFiles(filePath);

    //save and wait for navigation
    await Promise.all([
        page.waitForURL(/viewPersonalDetails/),
        page.getByRole('button', { name: 'Save' }).click()
    ]);

});