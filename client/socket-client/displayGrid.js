let gridContainer = document.getElementById("grid-container");
console.log(gridContainer);

function displayGrid() {
  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      let gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridContainer.append(gridItem);
    }
  }
}



export { displayGrid }; 