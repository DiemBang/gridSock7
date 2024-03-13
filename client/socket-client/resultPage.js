import { compareImages, displayResult } from "./compareImages.js";
import { randomImage } from "./printImages.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid.js";

export function showResultPage() {
  const gridContainer = document.getElementById("gridContainer");
  gridContainer.style.display = "none";

  const countDown = document.getElementById("countdown");
  countDown.classList.add("hidden");

  const resultContainer = document.getElementById("resultContainer");
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
    resultContainer.style.display = "none";
    createGrid();
    // getRandomImage(imgs);
    setTimeout(displayGrid, 3000);
    gridContainer.style.display = "inline-grid";
    // countDown.classList.remove('hidden');
  });

  const result = compareImages(randomImage);
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

