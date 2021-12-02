describe("Space investors", () => {
  beforeEach(() => cy.visit("http://127.0.0.1:8080"));

  it("should load the game", () => {
    cy.get("canvas")
      .should("be.visible")
      .and("have.css", "width", "800px")
      .and("have.css", "height", "600px");
  });
  it("should have functioning movement controls", () => {
    cy.get("canvas").trigger("keydown", {
      keyCode: 39,
    });
    cy.wait(1000);
    cy.get("canvas").trigger("keydown", {
      keyCode: 37,
    });
  });
});
