describe("Carousel", () => {
  it("Should have controls on desktop", () => {
    cy.viewport("macbook-13");

    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=carousel]").should("be.visible");

    cy.get("[data-itemid=0]").get("a").contains("LEARN").should("be.visible");

    cy.get("[data-testid=carousel-controls]").should("be.visible");

    cy.get("[data-testid=indicators]").should("not.be.visible");
  });
  it("Should have indicators on mobile", () => {
    cy.viewport("iphone-x");

    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=carousel]").should("be.visible");

    cy.get("[data-itemid=0]").should("be.visible");

    cy.get("[data-testid=carousel-controls]").should("not.be.visible");

    cy.get("[data-testid=indicators]").should("be.visible");
  });
  it("Next and previous buttons should move the carousel on desktop", () => {
    cy.viewport("macbook-13");

    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=button-next]").click();

    cy.get("[data-testid=carousel").invoke("scrollLeft").should("not.equal", 0);

    cy.get("[data-testid=button-previous]").click();

    cy.get("[data-testid=carousel]").invoke("scrollLeft").should("equal", 0);
  });
});

export {}