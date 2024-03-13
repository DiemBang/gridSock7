import { io } from "socket.io-client";
import { compareImages, displayResult } from "./compareImages.js";
import { randomImg } from "./printImages.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid.js";

const socket = io("http://localhost:3000");

const gridContainer = document.getElementById("gridContainer");
const resultContainer = document.getElementById("resultContainer");

export function showResultPage() {

  
  gridContainer.style.display = "none";

  const countDown = document.getElementById("countdown");
  countDown.classList.add("hidden");

  
  resultContainer.classList.remove("hidden");
  resultContainer.style.display = "flex";

  const resultHeading = document.getElementById("resultHeading");
  resultHeading.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = "Well done!";

  const resultPageButtons = document.getElementById("resultPageButtons");
  resultPageButtons.innerHTML = "";
  const newGameButton = document.createElement("button");
  newGameButton.classList.add("newGameButton");
  newGameButton.textContent = "Play again!";
  newGameButton.addEventListener("click", () => {
    console.log("clicked on Start New Game");
    socket.emit("startNewGame");
  });

 const result = compareImages(randomImg);
    displayResult(result);


  const imageBtns = document.createElement("div");

  const saveImgBtn = document.createElement("saveImgBtn");
  saveImgBtn.classList.add("save-img-btn");
  saveImgBtn.textContent = "Save image";
  saveImgBtn.addEventListener("click", () => {
    console.log("image is saved");
  });

  const viewGalleryBtn = document.createElement("viewGalleryBtn");
  viewGalleryBtn.classList.add("view-gallery-btn");
  viewGalleryBtn.textContent = "View gallery";
  viewGalleryBtn.addEventListener("click", () => {
    console.log("view gallery");
  });

  resultHeading.appendChild(heading);
  resultPageButtons.appendChild(newGameButton);
  resultContainer.appendChild(imageBtns);
  imageBtns.appendChild(saveImgBtn);
  imageBtns.appendChild(viewGalleryBtn);    
}

// all four players are receiving this and starting a new game
socket.on("startNewGame", () => {
    resultContainer.style.display = "none";
    createGrid();
    // getRandomImage(imgs);
    setTimeout(displayGrid, 3000);
    gridContainer.style.display = "inline-grid";
    // countDown.classList.remove('hidden');
})

