

class loginLocator {
    constructor() {
        this.loginBtn = '[id="customernav"]';
        this.loginNameInput = '[id="loginFrm_loginname"]';
        this.passwordInput = '[id="loginFrm_password"]';
        this.submitLoginBtn = '[title="Login"]';
        this.welcomeTextMessage = '[class="menu-text"]'
        this.badLoginAlert = '[class="alert-error"]';
       
    }
}

export default class login {
    constructor() {
        this.locators = new loginLocator();
    }

    getLoginBtn() {
        return cy.get(this.locators.loginBtn);
    }

    getLoginNameInput() {
        return cy.get(this.locators.loginNameInput);
    }


   getPasswordInput(){
        return cy.get(this.locators.passwordInput);
   }

   getSubmitLoginBtn(){
        return cy.get(this.locators.submitLoginBtn);
   }

   getWelcomeTextMessage(){
    return cy.get(this.locators.welcomeTextMessage);
}

   getBadLoginAlert(){
    return cy.get(this.locators.badLoginAlert);
   }
  

}

