import { Menu } from "./utils";
import config from "../config";

export default class HomeScreen extends Menu {
  constructor() {
    super("homescreen");
  }
  preload() {
    this.load.image("sky2", "https://labs.phaser.io/assets/skies/space3.png");
    this.load.image("button", "/assets/ui/primary-button.png");
  }
  create() {
    this.sky = this.add.image(400, 300, "sky2");

    this.playButton = this.add.sprite(400, 300, "button").setInteractive();
    this.playButton.setScale(3, 3);
    this.centerButton(this.playButton, 1);

    this.controlButton = this.add.sprite(400, 300, "button").setInteractive();
    this.controlButton.setScale(3, 3);
    this.centerButton(this.controlButton, 0);

    this.creditButton = this.add.sprite(400, 300, "button").setInteractive();
    this.creditButton.setScale(3, 3);
    this.centerButton(this.creditButton, -1);

    this.playButtonText = this.add.text(400, 300, "Play", {
      fontSize: "32px",
      fill: "#fff",
    });

    this.controlButtonText = this.add.text(400, 300, "Controls", {
      fontSize: "32px",
      fill: "#fff",
    });

    this.creditButtonText = this.add.text(400, 300, "Credit", {
      fontSize: "32px",
      fill: "#fff",
    });

    this.centerButtonText(this.playButtonText, this.playButton);
    this.centerButtonText(this.controlButtonText, this.controlButton);
    this.centerButtonText(this.creditButtonText, this.creditButton);

    this.playButton.on(
      "pointerdown",
      function(pointer) {
        this.scene.start("inputName");
      }.bind(this)
    );

    this.controlButton.on(
      "pointerdown",
      function(pointer) {
        this.scene.start("controls");
      }.bind(this)
    );

    this.creditButton.on(
      "pointerdown",
      function(pointer) {
        this.scene.start("credits");
      }.bind(this)
    );
  }
}
