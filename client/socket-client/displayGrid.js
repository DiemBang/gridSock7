import { socket } from "./main.js";
import { globalUserColor } from "./loginUser.js";
import { startGameTimer } from "./countdownTimer.js";

export { displayGrid, printUpdatedGrid, gridContainer };

const gridContainer = document.getElementById("gridContainer");
const countDown = document.getElementById("countdown");

function displayGrid() {
  // Clear grid container from start image
  gridContainer.innerHTML = "";
  startGameTimer();
  countDown.classList.remove("hidden");

  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      gridItem.addEventListener("click", function () {
        addColor(x, y);
      });

      gridContainer.append(gridItem);
    }
  }
}

function addColor(x, y) {
  // Send coordinates to backend in order to update grid
  console.log("clicked " + x + " " + y);
  let color = globalUserColor;
  socket.emit("grid", {
    x: x,
    y: y,
    color: color,
  });
}

function printUpdatedGrid(gridUpdate) {
  gridContainer.innerHTML = "";
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");

      gridItem.addEventListener("click", function () {
        addColor(x, y);
      });
      let color = gridUpdate[y][x];
      gridItem.classList.add(color);

      gridContainer.append(gridItem);
    }
  }
}
