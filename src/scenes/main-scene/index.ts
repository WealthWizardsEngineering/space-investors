import { WizardBulletGroup } from "./wizard-bullet-group";
export class MainScene extends Phaser.Scene {
  wizardBulletGroup: WizardBulletGroup;
  fireButton: Phaser.Input.Keyboard.Key;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  bullet: any;
  coins: any;
  coin: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  bulletSound: any;
  homescreenSound: any;
  background: any;
  message: Phaser.GameObjects.Text;
  count: number;

  constructor() {
    super("game");
  }

  preload() {
    this.load.image("wizard-dude", "wizard-dude.svg");
    this.load.image("wizard-bullet", "wizard-bullet.svg");
    this.load.image("coin", "coin.svg");
    this.load.audio("homescreenSound", "homescreen.mp3");
    this.load.audio("bulletSound", "bullet.mp3");
    this.load.image("background", "gameplay.png");
  }

  create() {
    this.background = this.add.sprite(400, 300, "background").setInteractive();
    this.message = this.add
      .text(400, 40, "Score: 0", {
        color: "#FFFFFF",
        fontStyle: "bold",
      })
      .setOrigin(0.5);
    this.count = 0;

    this.coins = this.physics.add.group();

    this.coins.createMultiple({
      key: "coin",
      repeat: 10,
      setXY: { x: 105, y: 100, stepX: 60 },
    });
    this.coins.createMultiple({
      key: "coin",
      repeat: 10,
      setXY: { x: 65, y: 135, stepX: 60 },
    });
    this.coins.createMultiple({
      key: "coin",
      repeat: 10,
      setXY: { x: 105, y: 170, stepX: 60 },
    });
    this.coins.createMultiple({
      key: "coin",
      repeat: 10,
      setXY: { x: 65, y: 205, stepX: 60 },
    });

    this.coins.children.iterate(function(child: any) {
      child.setScale(0.2);
    });

    this.homescreenSound = this.sound.add("homescreenSound");
    this.homescreenSound.stop();

    this.bulletSound = this.sound.add("bulletSound");
    this.wizardBulletGroup = new WizardBulletGroup(this);

    this.fireButton = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add
      .image(
        this.cameras.main.width / 2,
        this.cameras.main.height - 70,
        "wizard-dude"
      )
      .setScale(0.7);

    this.player.setCollideWorldBounds(true);
  }

  update() {
    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-300);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(300);
    }

    if (this.fireButton.isDown) {
      this.bullet = this.fireWizardBullet();
      if (!this.bullet) {
        return;
      }
      // @ts-ignore
      this.physics.add.overlap(
        this.bullet,
        this.coins,
        this.removeCoin,
        // @ts-ignore
        null,
        this
      );
      this.homescreenSound.stop();
      this.bulletSound.play();
    }
  }

  removeCoin(_: any, coin: any) {
    coin.disableBody(true, true);
    this.count++;
    this.message.setText("Score:" + this.count);
  }

  fireWizardBullet() {
    return this.wizardBulletGroup.fireWizardBullet(
      this.player.x,
      this.player.y - 20
    );
  }
}
