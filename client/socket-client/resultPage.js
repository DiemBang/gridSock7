import { compareImages, displayResult } from "./compareImages.js";
import { randomImg } from "./printImages.js";
import { createGrid } from "./printImages.js";
import { displayGrid } from "./displayGrid.js";


export function showResultPage() {

    const gridContainer = document.getElementById('gridContainer');
    gridContainer.style.display = "none";

    const countDown = document.getElementById('countdown');
    countDown.classList.add('hidden');


    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove("hidden");
    resultContainer.style.display = "flex";

    const resultHeading = document.getElementById('resultHeading');
    resultHeading.innerHTML = "";
    const heading = document.createElement("h2");
    heading.textContent = "Well done!";

    const resultPageButtons = document.getElementById('resultPageButtons');
    resultPageButtons.innerHTML = ""; 
    const newGameButton = document.createElement("button");
    newGameButton.classList.add('newGameButton');
    newGameButton.textContent = "Play again!";
    newGameButton.addEventListener('click', () => {
        resultContainer.style.display = "none";
        createGrid();
        // getRandomImage(imgs);
        setTimeout(displayGrid, 3000);
        gridContainer.style.display = "inline-grid";
        // countDown.classList.remove('hidden');
    })

    const result = compareImages(randomImg);
    displayResult(result);


    resultHeading.appendChild(heading);
    resultPageButtons.appendChild(newGameButton);
}

