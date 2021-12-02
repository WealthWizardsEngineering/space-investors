import "phaser";

import { MainScene } from "./main-scene";

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#000",
  physics: {
    default: "arcade",
  },
  scene: MainScene,
});
