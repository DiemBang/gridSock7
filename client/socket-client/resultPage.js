import { compareImages, displayResult } from "./compareImages.js";
import { randomImage } from "./printImages.js";


export function showResultPage() {
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.classList.remove("hidden");

    // const heading = document.createElement("h2");
    // heading.textContent = "Well done!";

    const newGameButton = document.createElement("button");
    newGameButton.classList.add('newGameButton');
    newGameButton.textContent = "New Game";
    newGameButton.addEventListener('click', () => {
        // new game function
    })

    const result = compareImages(randomImage);
    displayResult(result);

    resultContainer.append(newGameButton);
}
