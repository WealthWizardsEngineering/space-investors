import { AUTO } from "phaser";
import HomeScreen from "./scenes/homescreen";
import Intro from "./scenes/intro";
import InputName from "./scenes/inputName";
import Controls from "./scenes/controls";
import { MainScene } from "./scenes/main-scene";

const width: number = 800;
const height: number = 600;

interface config {
  type: number;
  width: number;
  height: number;
  backgroundColor: string;
  physics: {
    default: string;
    arcade: any;
  };
  dom: {
    createContainer: boolean;
  };
  scene: Array<any>;
  parent: string;
}

const config: config = {
  type: AUTO,
  width: width,
  height: height,
  backgroundColor: "#45E0FF",
  parent: "game",
  physics: {
    default: "arcade",
    arcade: {
      // gravity: { y: 200 },
    },
  },
  dom: {
    createContainer: true,
  },
  scene: [HomeScreen, Intro, InputName, Controls, MainScene],
};

export default config;
