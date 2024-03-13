import { compareImages, displayResult } from "./compareImages.js";
import { randomImage } from "./printImages.js";


export function showResultPage() {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove("hidden");

    const resultHeading = document.getElementById('resultHeading');
    const heading = document.createElement("h2");
    heading.textContent = "Well done!";

    const resultPageButtons = document.getElementById('resultPageButtons');
    const newGameButton = document.createElement("button");
    newGameButton.classList.add('newGameButton');
    newGameButton.textContent = "Play again!";
    newGameButton.addEventListener('click', () => {
        // new game function
    })

    const result = compareImages(randomImage);
    displayResult(result);


    resultHeading.appendChild(heading);
    resultPageButtons.appendChild(newGameButton);
}

