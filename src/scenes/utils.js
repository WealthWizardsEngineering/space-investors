import { Scene } from "phaser";
import config from "../config.js";

const width = 800;
const height = 600;

export class Menu extends Scene {
  constructor(inputName) {
    super(inputName);
  }
  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(width / 2, height / 2 - offset * 100, width, height)
    );
  }
  centerButtonText(gameText, button) {
    Phaser.Display.Align.In.Center(gameText, button);
  }
}
