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

  constructor() {
    super("game");
  }

  preload() {
    this.load.image("wizard-dude", "wizard-dude.svg");
    this.load.image("wizard-bullet", "wizard-bullet.svg");
    this.load.image("coin", "coin.svg");
    this.load.audio("homescreenSound", "homescreen.mp3");
    this.load.audio("bulletSound", "bullet.mp3");
  }

  create() {
    this.coins = this.physics.add.group({
      key: "coin",
      repeat: 12,
      setXY: { x: 70, y: 100, stepX: 50 },
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
  }

  fireWizardBullet() {
    return this.wizardBulletGroup.fireWizardBullet(
      this.player.x,
      this.player.y - 20
    );
  }
}
