import { Game, AUTO, Types } from "phaser";

let cursors: Types.Input.Keyboard.CursorKeys;
let player: Types.Physics.Arcade.ImageWithDynamicBody;

const config: Types.Core.GameConfig = {
  type: AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#000",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload() {
      this.load.image("block", "space-ship.png");

      // this.load.setBaseURL('https://labs.phaser.io');

      // this.load.image('sky', 'assets/skies/space3.png');
      // this.load.image('logo', 'assets/sprites/phaser3-logo.png');
      // this.load.image('red', 'assets/particles/red.png');
    },

    create() {
      cursors = this.input.keyboard.createCursorKeys();

      player = this.physics.add.image(400, 300, "block");

      player.setCollideWorldBounds(true);
      // this.add.image(400, 300, 'sky');

      // const particles = this.add.particles('red');

      // const emitter = particles.createEmitter({
      //     speed: 100,
      //     scale: { start: 1, end: 0 },
      //     blendMode: 'ADD'
      // });

      // const logo = this.physics.add.image(400, 100, 'logo');

      // logo.setVelocity(100, 200);
      // logo.setBounce(1, 1);
      // logo.setCollideWorldBounds(true);

      // emitter.startFollow(logo);
    },

    update() {
      player.setVelocity(0);

      if (cursors.left.isDown) {
        player.setVelocityX(-300);
      } else if (cursors.right.isDown) {
        player.setVelocityX(300);
      }

      if (cursors.up.isDown) {
        player.setVelocityY(-300);
      } else if (cursors.down.isDown) {
        player.setVelocityY(300);
      }
    },
  },
};

new Game(config);
