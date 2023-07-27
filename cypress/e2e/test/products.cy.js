import loginPage from "../../pages/login";
import productsPage from "../../pages/products";

describe("Comprar producto en la pagina automationteststore", () => {

  beforeEach(() => {
    cy.visit("https://automationteststore.com/");
  });

  it('añadir item especifico al carrito con una cantidad igual a 5', () => {

    const login = new loginPage();
    const products = new productsPage();

    login.getLoginBtn().click();

    login.getLoginNameInput().type("MatiasGTest");

    login.getPasswordInput().type("1234");

    login.getSubmitLoginBtn().click();

    products.getSkincareProductsBtn().click();

    products.getTestProductBtn().click();

    products.getProductQuantityInput().clear().type('5')

    products.getAddToCartBtn().click()


  });

  it("Añadir producto al carrito y continuar con su compra/generacion de orden", () => {

    const login = new loginPage();
    const products = new productsPage();

    login.getLoginBtn().click();

    login.getLoginNameInput().type("MatiasGTest");

    login.getPasswordInput().type("1234");

    login.getSubmitLoginBtn().click();

    products.getSkincareProductsBtn().click();

    products.getTestProductBtn().click();


    products.getAddToCartBtn().click();

    cy.get("tr:nth-of-type(2) > td:nth-of-type(2) > a").should("be.visible");

    cy.get("tr:nth-of-type(2) > td:nth-of-type(2) > a").should(
      "contain",
      "Absolue Eye Precious Cells"
    );
    
    products.getCheckoutCartBtn().click();

    products.getCheckoutBuyBtn().click();
    
    products.getSuccesOrderText().should('be.visible');
    
    products.getSuccesOrderText().should('contain', 'Your Order Has Been Processed!');

    products.getContinueBtn().click();
    


  });

  


});
