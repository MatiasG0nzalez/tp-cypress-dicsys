

import  loginPage  from '../../pages/login';


describe("Logueo de pagina automationtetstore", () => {
  beforeEach(() => {

    cy.visit("https://automationteststore.com/");

  });

  it("logueo valido", () => {
   
    const login = new loginPage();

    login.getLoginBtn().click();
    
    login.getLoginNameInput().type("MatiasGTest");

    login.getPasswordInput().type("1234");

    login.getSubmitLoginBtn().click();
    
    login.getWelcomeTextMessage().should('contain', 'Welcome')

   

  });

  it("logueo invalido", () => {

    const login = new loginPage();
    
    login.getLoginBtn().click();
    
    login.getLoginNameInput().type("Matias");

    login.getPasswordInput().type("123");

    login.getSubmitLoginBtn().click();

    cy.get('.alert').should('be.visible')
    cy.get('.alert').should('contain', 'Error: Incorrect login or password provided.')

  });

});
