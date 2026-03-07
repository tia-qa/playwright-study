const { test, expect, request } = require ('@playwright/test');
//import { test, expect, request } from '@playwright/test';

let token;

test.beforeEach( ()=>{

})

test.beforeAll( async()=>
{
    const apiContext = await request.newContext()
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
        {
            data: LoginPayLoad
        })
    expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json()
    const token = loginResponseJson.token
    console.log(token)

})

test('Client login using API', async ({page})=>
{

    page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    })

    await page.goto("https://rahulshettyacademy.com/client")

})