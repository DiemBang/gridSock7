import { io } from "socket.io-client";
import { timer } from "./timer.js";
import { printStartImage } from "./printStartImage.js";

const socket = io("http://localhost:3000");

socket.on("fourPlayersConnected", () => {
  console.log("Four players connected");
  // Callback function that will start timer.
  // TODO: change timer to appropiate value (s) before game starts
  timer(10, () => {
    console.log("Timer finished! GAME STARTS");
    printStartImage();
  });
});
