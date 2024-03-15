import { io } from "socket.io-client";
import { timer } from "./timer.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid";
import { updateCountdown } from "./timer.js";
const socket = io("https://multiplayergame-si78l.ondigitalocean.app/");

socket.on("fourPlayersConnected", () => {
  console.log("Four players connected");
  // Callback function that will start timer that counts down to game start
  // TODO: change timer to appropiate value (s) before game starts
  timer(
    10,
    () => {
      console.log("Timer finished! GAME STARTS");
      instructions.classList.add("hidden");
      // Displays start image and displays it for the number of seconds chosen in the Timeout
      createGrid();
      // TODO: change number of seconds to appropriate value
      // delays start of displaying game grid
      setTimeout(displayGrid, 10000);
    },
    updateCountdown
  );
});
