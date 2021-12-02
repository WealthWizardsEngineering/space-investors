import { Menu } from "./utils.js";
export default class InputName extends Menu {
  constructor() {
    super("inputName");
  }
  preload() {
    this.load.html("form", "/assets/form.html");
    this.load.image("sky2", "https://labs.phaser.io/assets/skies/space3.png");
    this.load.image("button", "/assets/ui/primary-button.png");
    this.load.image("greyButton", "/assets/ui/grey-button.png");
  }
  create() {
    // this.sky = this.add.image(400, 300, "sky2");

    this.nameInput = this.add.dom(640, 360).createFromCache("form");
    this.centerButton(this.nameInput, 0);

    this.message = this.add
      .text(640, 250, "Hello, --", {
        color: "#FFFFFF",
        fontSize: 60,
        fontStyle: "bold",
      })
      .setOrigin(0.5);
    this.centerButton(this.message, 1);

    this.returnKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER
    );

    this.nameExists = false;

    this.returnKey.on("down", (event) => {
      let name = this.nameInput.getChildByName("name");
      if (name.value != "") {
        this.message.setText("Hello, " + name.value);
        name.value = "";
        this.confirmButton.setTexture("button");
        return (this.nameExists = true);
      }
    });

    this.confirmButton = this.add
      .sprite(400, 300, "greyButton")
      .setInteractive();
    this.confirmButton.setScale(3, 3);
    this.centerButton(this.confirmButton, -1);

    this.confirmButtonText = this.add.text(400, 300, "Confirm", {
      fontSize: "32px",
      fill: "#fff",
    });

    this.centerButtonText(this.confirmButtonText, this.confirmButton);

    this.confirmButton.on(
      "pointerdown",
      function (pointer) {
        if (this.nameExists) {
          this.scene.start("credits");
        }
      }.bind(this)
    );
  }
}
