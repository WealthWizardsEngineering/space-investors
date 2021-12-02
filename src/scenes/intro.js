import { Scene } from "phaser";

export default class Intro extends Scene {
  constructor() {
    super("intro");
  }
  preload() {
    this.load.image("sky", "https://labs.phaser.io/assets/skies/space2.png");
  }

  create() {
    console.log("Loading scene was created");
    this.sky = this.add.image(400, 300, "sky");

    setTimeout(() => {
      console.log("fired");
      this.scene.start("homescreen");
    }, 5000);
  }
}
