import { imageFromGame } from "./main.js";
import { randomImgResults } from "./resultPage.js";

export function compareImages() {
  const playerImage = imageFromGame;
  const numRows = playerImage.length;
  const numCols = playerImage[0].length;

  let correct = 0;

  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      if (playerImage[y][x] === randomImgResults[y][x]) {
        correct++;
      }
    }
  }

  const totalPixels = numRows * numCols;
  const resultInPercentage = (correct / totalPixels) * 100;

  return resultInPercentage;
}

export function displayResult(resultInPercentage) {
  const roundedResult = Math.round(resultInPercentage);
  const resultContainer = document.getElementById("showResult");
  resultContainer.innerHTML = `<h3>Your result: ${roundedResult} % </h3>`;
}
