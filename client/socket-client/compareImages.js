import { randomImage } from "./printImages.js";
import { imageFromGame } from "./main.js";



export function compareImages(randomImage) {
  const playerImage = imageFromGame;
  const numRows = playerImage.length;
  const numCols = playerImage[0].length;

  let correct = 0;

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      if (playerImage[y][x] === randomImage[y][x]) {
        correct++;
      }
    }
  }
    
  const totalPixels = numRows * numCols;
  const resultInPercentage = (correct / totalPixels) * 100;

  return resultInPercentage;
}


export function displayResult(resultInPercentage) {
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = `<p>Your result: ${resultInPercentage.toFixed(2)}%</p>`;
}


// const result = compareImages(randomImage);
// displayResult(result);

// console.log("resultat", result);