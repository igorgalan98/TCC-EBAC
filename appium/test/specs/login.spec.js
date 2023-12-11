const homeScreen = require("../pageobjects/home.screen")
const loginScreen = require("../pageobjects/login.screen")
const myStoreScreen = require("../pageobjects/myStore.screen")

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let email = 'lojaebacqe@gmail.com'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Acces Admin Panel', () => {
    it('should login with valid credentials', async () => {
        await homeScreen.goToNext()
        await homeScreen.goToLogin()
        await loginScreen.continueAdressCredential(urlLoja)
        await loginScreen.continue()
        await loginScreen.continueWithEmail(email)
        await loginScreen.continueEmailPhase()
        await loginScreen.continueWithPassword(password)
        await loginScreen.continuePasswordPhase()

        expect (await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect (await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')


    });
})