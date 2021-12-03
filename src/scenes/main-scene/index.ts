import { WizardBulletGroup } from "./wizard-bullet-group";
export class MainScene extends Phaser.Scene {
  wizardBulletGroup: WizardBulletGroup;
  fireButton: Phaser.Input.Keyboard.Key;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  coin: Phaser.GameObjects.Image;
  bullet: any;
  coins: any;

  constructor() {
    super("game");
  }

  preload() {
    this.load.image("wizard-dude", "wizard-dude.svg");
    this.load.image("wizard-bullet", "wizard-bullet.svg");
    this.load.image("coin", "coin.svg");
  }

  create() {
    this.coins = this.physics.add.group({
      key: "coin",
      repeat: 6,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.coins.children.iterate(function(child: any) {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    // this.coin = this.add.sprite(300, 100, "coin");
    // this.physics.arcade.enable([sprite, sprite2]);

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
        null,
        this
      );
    }
  }

  removeCoin(wizardBulletGroup: any, coin: any) {
    console.log("fired", typeof coin);
    console.log("coin", coin);
    console.log("disable body:", coin.disableBody);

    coin.disableBody(true, true);
  }

  fireWizardBullet() {
    return this.wizardBulletGroup.fireWizardBullet(
      this.player.x,
      this.player.y - 20
    );
  }
}
