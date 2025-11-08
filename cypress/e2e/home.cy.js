describe("Home Page", () => { it("visits the home page", () => { cy.visit("/"); cy.contains("Welcome to Nuxt"); }); });
