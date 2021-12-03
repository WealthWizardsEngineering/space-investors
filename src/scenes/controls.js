import { Menu } from "./utils.js";
export default class InputName extends Menu {
  constructor() {
    super("controls");
  }
  preload() {
    this.load.image("sky2", "https://labs.phaser.io/assets/skies/space2.png");
    this.load.image("button", "primary-button.png");
    this.load.image("control-diagram", "controls.png");
  }
  create() {
    this.diagram = this.add
      .sprite(400, 300, "control-diagram")
      .setInteractive();

    this.backButton = this.add.sprite(400, 300, "button").setInteractive();
    this.backButton.setScale(3, 3);
    this.centerButton(this.backButton, -2.5);
    this.centerButton(this.diagram, 1);

    this.backButtonText = this.add.text(400, 300, "Back", {
      fontSize: "32px",
      fill: "#fff",
    });

    this.centerButtonText(this.backButtonText, this.backButton);

    this.backButton.on(
      "pointerdown",
      function(pointer) {
        this.scene.start("homescreen");
      }.bind(this)
    );
  }
}
