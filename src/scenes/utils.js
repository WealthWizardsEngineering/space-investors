import { Scene } from "phaser";
import config from "../config.js";

export class Menu extends Scene {
  constructor(inputName) {
    super(inputName);
  }
  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        config.width / 2,
        config.height / 2 - offset * 100,
        config.width,
        config.height
      )
    );
  }
  centerButtonText(gameText, button) {
    Phaser.Display.Align.In.Center(gameText, button);
  }
}
