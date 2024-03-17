import { io } from "socket.io-client";
import { timer } from "./timer.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid";
import { updateCountdown } from "./timer.js";
const socket = io("http://localhost:3000");

socket.on("fourPlayersConnected", (randomImg) => {
  timer(
    10,
    () => {
      instructions.classList.add("hidden");
      createGrid(randomImg);
      setTimeout(displayGrid, 20000);
    },
    updateCountdown
  );
});
