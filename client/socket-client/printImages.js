// TODO: add names of all images in img array
import { chameleonImg, fishImg } from "../../server/imageArrays.js";
// ÄNDRAT
import { io } from "socket.io-client";

export { createGrid, printImage };

const countdownToGame = document.getElementById("countdownToGame");
// Creates array from all start images
//ÄNDRAT - kommenterat ut, flyttat till app.js: , getRandomImage, randomImg, imgs
// let imgs = [chameleonImg, fishImg];
// let randomImg;

// Shuffle between images to show at start of game
// function getRandomImage(imgs) {
//   // creates random number from length of array of images and returns random image
//   const randomIndex = Math.floor(Math.random() * imgs.length);
//   return imgs[randomIndex];
// }

// Creates a new grid to display chosen image in
function createGrid(randomImg) {
  countdownToGame.classList.add("hidden");
  console.log("createGrid körs!");
  const gridContainerPrintImg = document.getElementById("gridContainer");
  gridContainerPrintImg.innerHTML = "";

  // assigns variable randomImg the value that was randomised in getRandomImage
  // let randomImg = getRandomImage(imgs);

  for (let y = 0; y < 15; y++) {
    for (let x = 0; x < 15; x++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      gridContainerPrintImg.appendChild(cell);
    }
  }
  //
  //randomImg = getRandomImage(imgs);
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
