import { WizardBulletGroup } from "./wizard-bullet-group";
export class MainScene extends Phaser.Scene {
  wizardBulletGroup: WizardBulletGroup;
  fireButton: Phaser.Input.Keyboard.Key;
  cursors: Phaser.Types.Input.Keyboard.CursorKeys;
  player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

  preload() {
    this.load.image("wizard-dude", "wizard-dude.svg");
    this.load.image("wizard-bullet", "wizard-bullet.svg");
  }

  create() {
    this.wizardBulletGroup = new WizardBulletGroup(this);

    this.fireButton = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );

    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = this.physics.add.image(
      this.cameras.main.width / 2,
      this.cameras.main.height - 90,
      "wizard-dude"
    );

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
