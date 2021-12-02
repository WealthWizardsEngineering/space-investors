import { WizardBulletGroup } from "./wizard-bullet-group";
export class MainScene extends Phaser.Scene {
  wizardBulletGroup: WizardBulletGroup;
  fireButton: Phaser.Input.Keyboard.Key;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  coin: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

  preload() {
    this.load.image("wizard-dude", "wizard-dude.svg");
    this.load.image("wizard-bullet", "wizard-bullet.svg");
    this.load.image("coin", "coin.svg");
  }

  create() {
    this.add.image(300, 100, "coin").setScale(0.3);
    this.add.image(360, 100, "coin").setScale(0.3);
    this.add.image(420, 100, "coin").setScale(0.3);
    this.add.image(300, 165, "coin").setScale(0.3);
    this.add.image(360, 165, "coin").setScale(0.3);
    this.add.image(420, 165, "coin").setScale(0.3);

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
      this.fireWizardBullet();
    }
  }

  fireWizardBullet() {
    this.wizardBulletGroup.fireWizardBullet(this.player.x, this.player.y - 20);
  }
}
