import { randomImage } from "./printImages.js";


export function compareImages(playerImage, randomImage) {
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
    return correct;
}