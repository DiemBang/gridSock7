import { socket } from "./main.js"; 

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
  socket.emit("main", {
    "x": x , "y": y});
}

export { displayGrid }; 

