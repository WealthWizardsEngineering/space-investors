import { WizardBullet } from "./wizard-bullet";

export class WizardBulletGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      classType: WizardBullet,
      frameQuantity: 1,
      active: false,
      visible: false,
      key: "bullet",
    });
  }

  fireWizardBullet(x: number, y: number) {
    const bullet = this.getFirstDead(false);
    if (bullet) {
      bullet.fire(x, y);
      return bullet;
    }
  }
}
