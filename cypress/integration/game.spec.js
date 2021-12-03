describe("Game", () => {
  beforeEach(() => cy.visit("/"));

  it.only("should start the game and allow the player to move", () => {
    cy.get("canvas")
      .wait(400)
      .click(400, 200);

    cy.get('input[name="name"]').type("Test User{enter}");

    cy.get("canvas")
      .wait(200)
      .click(400, 400, { force: true });

    cy.get("canvas")
      .wait(200)
      .trigger("keydown", {
        keyCode: 39,
      });

    cy.get("canvas")
      .wait(400)
      .trigger("keydown", {
        keyCode: 37,
      });

      cy.get("canvas")
        .wait(1500)
        .toMatchImageSnapshot();
  });
});
