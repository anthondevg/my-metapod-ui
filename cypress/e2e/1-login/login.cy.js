/// <reference types="cypress" />
describe("validates login", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("validates correctly missing password", () => {
    cy.get("#emailLoginForm").type("moana@admin.com");
    cy.get("#submitLogin").click();

    cy.get("form").within(() => {
      cy.get("span").first().should("have.text", "missing password");
    });
  });

  it("validates correctly missing email", () => {
    cy.get("#passwordLoginForm").type("123456{enter}");

    cy.get("form").within(() => {
      cy.get("span").first().should("have.text", "missing email");
    });
  });

  it("validates correctly invalid email", () => {
    cy.get("#emailLoginForm").type("wtfasadd@@@@.cccoooxxx");
    cy.get("#passwordLoginForm").type("123456");
    cy.get("#submitLogin").click();

    cy.get("form").within(() => {
      cy.get("span").first().should("have.text", "invalid email");
    });
  });

  it("validates correct switch between password and text input password", () => {
    cy.get("form").within(() => {
      cy.get("#passwordLoginForm").type("123456");
      cy.get("input[type=checkbox]").first().check();
    });
  });

  it("validates login", () => {
    cy.get("form").within(() => {
      cy.get("#emailLoginForm").type("moana@admin.com");
      cy.get("#passwordLoginForm").type("123456{enter}");
    });
    cy.get("#alertSuccessLogin").should("exist");
  });
});
