import { io } from "socket.io-client";
import { timer } from "./timer.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid";
import { updateCountdown } from "./timer.js";
const socket = io("http://localhost:3000");

socket.on("fourPlayersConnected", (randomImg) => {
  console.log("Four players connected");
  // Callback function that will start timer that counts down to game start
  // Timer starts when four players are connected
  // and the remaining seconds to game starts shows below the instructions

  timer(
    10,
    () => {
      instructions.classList.add("hidden");

      // Displays start image and displays it for the number of seconds chosen in the Timeout below
      createGrid(randomImg);

      // delays start of displaying game grid
      setTimeout(displayGrid, 20000);
    },
    updateCountdown
  );
});
