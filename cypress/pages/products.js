

class productsLocators {
    constructor() {
      
        this.skincarProductsBtn = '[href="https\:\/\/automationteststore\.com\/index\.php\?rt\=product\/category\&path\=43"]';
        this.testProductBtn = '[title="Absolue Eye Precious Cells"]';
        this.productQuantityInput = '[id="product_quantity"]'
        this.addToCartBtn = '[class="cart"]';
        this.checkoutCartBtn = '[id="cart_checkout1"]';
        this.checkotBuyBtn = '[id="checkout_btn"]';
        this.succesOrderText = '[class="maintext"]';
        this.continueBtn = '[title="Continue"]';

    }
}

export default class products {
    constructor() {
        this.locators = new productsLocators();
    }

    getSkincareProductsBtn(){
        return cy.get(this.locators.skincarProductsBtn);
    }
    
    getTestProductBtn(){
        return cy.get(this.locators.testProductBtn);
    }

    getAddToCartBtn(){
        return cy.get(this.locators.addToCartBtn);
    }

    getCheckoutCartBtn(){
        return cy.get(this.locators.checkoutCartBtn);
    }
    
    getCheckoutBuyBtn(){
        return cy.get(this.locators.checkotBuyBtn);
    }
  
    getSuccesOrderText(){
        return cy.get(this.locators.succesOrderText);
    }

    getContinueBtn(){
        return cy.get(this.locators.continueBtn);
    }

    getProductQuantityInput(){
        return cy.get(this.locators.productQuantityInput);
    }
}

