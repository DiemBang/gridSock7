import { io } from "socket.io-client";
import { compareImages, displayResult } from "./compareImages.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid.js";
import { createResultGrid } from "./showResultImage.js";

let randomImgResults;

const viewGalleryBtn = document.createElement("viewGalleryBtn");
viewGalleryBtn.id = "viewGalleryBtn";

const socket = io("https://multiplayergame-si78l.ondigitalocean.app/");

const gridContainer = document.getElementById("gridContainer");
const resultContainer = document.getElementById("resultContainer");

export function showResultPage() {
  const gridContainer = document.getElementById("gridContainer");

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

  const result = compareImages(randomImgResults);
  displayResult(result);
  createResultGrid();

  const imgBtns = document.getElementById("imgBtns");
  imgBtns.innerHTML = "";

  const saveImgBtn = document.createElement("saveImgBtn");
  saveImgBtn.classList.add("save-img-btn");
  saveImgBtn.textContent = "Save image";
  saveImgBtn.addEventListener("click", () => {
    console.log("image is saved");
    // let inputName = document.createElement("input");
    // inputName.placeholder = "Image title";
    // let saveBtn = document.createElement("button");
    // saveBtn.innerText = "Save";

    // saveImgBtn.append(
    //     inputName,
    //     saveBtn
    //   );

    // let newImage = {
    //   name: inputName.value,
    // };

    fetch("https://multiplayergame-si78l.ondigitalocean.app/images/saveImage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("svar från server", data);

        // //EMPTY FIELD INPUTS
        // imgTitle.value = "";
      });
  });

  viewGalleryBtn.classList.add("view-gallery-btn");
  viewGalleryBtn.textContent = "View gallery";
  viewGalleryBtn.addEventListener("click", () => {
    console.log("view gallery");
  });

  resultHeading.appendChild(heading);
  resultPageButtons.appendChild(newGameButton);
  resultContainer.appendChild(imgBtns);
  imgBtns.appendChild(saveImgBtn);
  imgBtns.appendChild(viewGalleryBtn);
}

socket.on("randomImg", (randomImg) => {
  randomImgResults = randomImg;
});

// all four players are receiving this and starting a new game
socket.on("startNewGame", () => {
  resultContainer.style.display = "none";
  createGrid();
  // getRandomImage(imgs);
  setTimeout(displayGrid, 3000);
  gridContainer.style.display = "inline-grid";
  // countDown.classList.remove('hidden');
});

export { viewGalleryBtn, randomImgResults };
