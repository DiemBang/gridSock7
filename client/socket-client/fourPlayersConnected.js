import { io } from "socket.io-client";
import { timer } from "./timer.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid";
import { updateCountdown } from "./timer.js";
const socket = io("https://multiplayergame-si78l.ondigitalocean.app/");

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
