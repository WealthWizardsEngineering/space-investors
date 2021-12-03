import { WizardBullet } from "./wizard-bullet";

export class WizardBulletGroup extends Phaser.Physics.Arcade.Group {
  delay: number;
  lastFireTime: number;

  constructor(scene: Phaser.Scene) {
    super(scene.physics.world, scene);

    this.createMultiple({
      classType: WizardBullet,
      frameQuantity: 1,
      active: false,
      visible: false,
      key: "bullet",
    });

    this.delay = 200;
    this.lastFireTime = 0;
  }

  fireWizardBullet(x: number, y: number) {
    const bullet = this.getFirstDead(false);
    const timeElapsedSinceLastFire = Date.now() - this.lastFireTime;
    if (bullet && timeElapsedSinceLastFire > this.delay) {
      this.lastFireTime = Date.now();
      bullet.fire(x, y);
      return bullet;
    }
  }
}
