import { io } from "socket.io-client";
const socket = io("https://multiplayergame-frontend-qrt3j.ondigitalocean.app");
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid.js";

const newGameGalleryBtn = document.createElement("newGameGalleryBtn");
newGameGalleryBtn.classList.add("new-game-gallery-btn");

// Funktionen för att hämta bilder från databasen + printa dem på sidan i en varsin grid
function getAndPrintGallery() {
  const galleryPage = document.getElementById("galleryPage");
  const gamePage = document.getElementById("gamePage");
  const galleryHeading = document.createElement("h2");

  newGameGalleryBtn.innerText = "Play again!";
  galleryPage.classList.remove("hidden");
  gamePage.classList.add("hidden");
  galleryHeading.innerText = "Gallery";
  galleryPage.appendChild(galleryHeading);

  fetch("https://multiplayergame-frontend-qrt3j.ondigitalocean.app/images")
    .then(res => res.json())
    .then(data => {
      console.log("Fetched images", data);

      // Loopa igenom varje bild och skapa och printa grid för varje bild
      data.forEach(img => {
        console.log("Image from db", img.grid);

        const gridForGalleryImgs = document.createElement("div");
        gridForGalleryImgs.classList.add("image-container");
        galleryPage.appendChild(gridForGalleryImgs);
        galleryPage.appendChild(newGameGalleryBtn);

        for (let y = 0; y < 15; y++) {
          for (let x = 0; x < 15; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell-gallery");
            gridForGalleryImgs.appendChild(cell);

            const color = img.grid[y][x];
            cell.style.backgroundColor = color;
          }
        }
      });
    })
    .catch(error => console.log("Error fetching images", error));
}

newGameGalleryBtn.addEventListener("click", () => {
  console.log("clicked on Start New Game");
  socket.emit("startNewGame");
});

// all four players are receiving this and starting a new game
socket.on("startNewGame", () => {
  galleryPage.classList.add("hidden");
  gamePage.classList.remove("hidden");
  createGrid();
  // getRandomImage(imgs);
  setTimeout(displayGrid, 3000);
  gridContainer.style.display = "inline-grid";
  // countDown.classList.remove('hidden');
})

export { getAndPrintGallery };
