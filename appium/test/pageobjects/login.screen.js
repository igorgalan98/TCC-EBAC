const { $ } = require('@wdio/globals')

class LoginScreen {
    get #setValueAdress(){ return $('android.widget.EditText')}
    get #continue(){ return $('id:bottom_button')}
    get #setEmail(){ return $('android.widget.EditText')}
    get #continueEmail(){ return $('id:login_continue_button')}
    get #setPassword(){ return $('android.widget.EditText')}
    get #continuePassword(){ return $('id:bottom_button')}



    async continueAdressCredential (url){ await this.#setValueAdress.setValue(url)}
    async continue (){ await this.#continue.click()}
    async continueWithEmail (email){ await this.#setEmail.setValue(email)}
    async continueEmailPhase (){ await this.#continueEmail.click()}
    async continueWithPassword (password){ await this.#setPassword.setValue(password)}
    async continuePasswordPhase (){ await this.#continuePassword.click()}


}

module.exports = new LoginScreen()