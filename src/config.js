import { Game, AUTO } from "phaser";
import HomeScreen from "./scenes/homescreen.js";
import Intro from "./scenes/intro.js";
import InputName from "./scenes/inputName.js";

export default {
  type: AUTO,
  width: 800,
  height: 600,
  backgroundColor: "#5DACD8",
  parent: "game",
  dom: {
    createContainer: true,
  },
  scene: [HomeScreen, Intro, InputName],
};
