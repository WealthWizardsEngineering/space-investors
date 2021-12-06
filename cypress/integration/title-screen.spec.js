describe("Title Screen", () => {
  beforeEach(() => cy.visit("/"));

  it("load the title screen", () => {
    cy.get("canvas")
      .should("be.visible")
      .and("have.css", "width", "800px")
      .and("have.css", "height", "600px");

    cy.get("canvas")
      .wait(500)
      .toMatchImageSnapshot();
  });

  it("allow you to start the game", () => {
    cy.get("canvas")
      .wait(400)
      .click(400, 200);

    cy.get("canvas")
      .wait(500)
      .toMatchImageSnapshot();
  });

  it("allow you to access the controls screen", () => {
    cy.get("canvas")
      .wait(400)
      .click(400, 300);

    cy.get("canvas")
      .wait(500)
      .toMatchImageSnapshot();
  });

  it("allow you to access the credit screen", () => {
    cy.get("canvas")
      .wait(400)
      .click(400, 400);

    cy.get("canvas")
      .wait(500)
      .toMatchImageSnapshot();
  });
});
