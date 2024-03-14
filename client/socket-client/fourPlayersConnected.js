import { io } from "socket.io-client";
import { timer } from "./timer.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid";
import { updateCountdown } from "./timer.js";
const socket = io("http://localhost:3000");

socket.on("fourPlayersConnected", (randomImg) => {
  console.log("Four players connected");
  // Callback function that will start timer that counts down to game start
  // TODO: change timer to appropiate value (s) before game starts
  timer(
    10,
    () => {
      console.log("Timer finished! GAME STARTS");
      instructions.classList.add("hidden");
      // Displays start image and displays it for the number of seconds chosen in the Timeout
      createGrid(randomImg);

      // TODO: change number of seconds to appropriate value
      // delays start of displaying game grid
      setTimeout(displayGrid, 3000);
    },
    updateCountdown
  );
});
