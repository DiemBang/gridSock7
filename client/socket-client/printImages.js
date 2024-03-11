import { chameleonImg, fishImg } from "../../server/imageArrays.js";

export { createGrid, printImage, getRandomImage, randomImage };

// Creates array from all start images
let imgs = [chameleonImg, fishImg];

// Shuffle between images to show at start of game
function getRandomImage(imgs) {
  // creates random number < length of array of images and returns random image
  const randomIndex = Math.floor(Math.random() * imgs.length);
  return imgs[randomIndex];
}
const randomImage = getRandomImage(imgs);

// NOTE: change name of id when names have been updated
// Creates a new grid to display chosen image in
function createGrid() {
  console.log("createGrid körs!");
  const gridContainerPrintImg = document.getElementById("gridContainer");
  gridContainerPrintImg.innerHTML = "";

  // assigns variable randomImg the value that was randomised in getRandomImage
  let randomImg = getRandomImage(imgs);

  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gridContainerPrintImg.appendChild(cell);
      console.log("Nu kör vi i looopen");
    }
  }
  printImage(randomImg);
}

// Changes color on background of cells to print image from array
function printImage(img) {
  console.log("PRINTAR!");
  //console.log(chameleonImg);
  const cells = document.querySelectorAll(".cell");
  for (let y = 0; y < img.length; y++) {
    for (let x = 0; x < img[y].length; x++) {
      const color = img[y][x];
      cells[y * 15 + x].style.backgroundColor = color;
    }
  }
}

// createGrid();
// printImage(chameleonImg);
