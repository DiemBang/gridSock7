import { io } from "socket.io-client";

export { createGrid, printImage };

const countdownToGame = document.getElementById("countdownToGame");

// Creates a new grid to display chosen image in
function createGrid(randomImg) {
  countdownToGame.classList.add("hidden");
  console.log("createGrid körs!", randomImg);
  const gridContainerPrintImg = document.getElementById("gridContainer");
  gridContainerPrintImg.innerHTML = "";

  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gridContainerPrintImg.appendChild(cell);
    }
  }

  printImage(randomImg);
  console.log("facitbild", randomImg);
}

// Changes color on background of cells to print image from array
// Can also be used to print images in gallery
function printImage(img) {
  console.log("PRINTAR!");

  const cells = document.querySelectorAll(".cell");
  for (let y = 0; y < img.length; y++) {
    for (let x = 0; x < img[y].length; x++) {
      const color = img[y][x];
      cells[y * 15 + x].style.backgroundColor = color;
    }
  }
}
