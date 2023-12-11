class HomeScreen {

    get #enterNextButton(){ return $('id:button_skip')}


    get #enterStoreAddress(){
        return $('id:button_login_store')
    }

    async goToNext(){ await this.#enterNextButton.click()}

    async goToLogin(){
        await this.#enterStoreAddress.click()
    }
}

module.exports = new HomeScreen()