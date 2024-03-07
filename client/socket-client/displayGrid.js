import { socket } from "./main.js"; 
import { globalUserColor } from "./loginUser.js";

let gridContainer = document.getElementById("grid-container");


function displayGrid() {
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
  
      gridItem.addEventListener("click", function() {
        addColor(x, y);
      });

      gridContainer.append(gridItem);
    }
  }
}

function addColor(x, y) {
  // TODO: send coordinates to backend in order to update color matrix  
  console.log("clicked " + x + " " + y);
  // To be updated when color has been assigned to user
  let color = globalUserColor;
  socket.emit("grid", {
    "x": x , "y": y, "color": color});
}

function printUpdatedGrid(gridUpdate) {
  gridContainer.innerHTML = "";
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
  
      gridItem.addEventListener("click", function() {
        addColor(x, y);
      });
      let color = gridUpdate[x][y];
      gridItem.classList.add(color);

      gridContainer.append(gridItem);
    }
  }
}
export { displayGrid, printUpdatedGrid }; 

