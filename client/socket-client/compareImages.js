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
// playerImage should changes to the array that painted by players
const playerImage = [
  ["blue", "white", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
  ["white", "white", "blue", "blue", "white", "white", "white", "white", "white", "blue", "blue", "white", "white", "white", "white"],
  ["white", "blue", "blue", "blue", "white", "white", "white", "white", "blue", "blue", "blue", "blue", "white", "white", "white"],
  ["white", "blue", "white", "white", "white", "blue", "blue", "white", "blue", "blue", "white", "white", "blue", "white", "white"],
  ["white", "blue", "white", "white", "blue", "black", "blue", "blue", "blue", "blue", "white", "black", "blue", "blue", "white"],
  ["white", "blue", "white", "blue", "blue", "blue", "blue", "black", "blue", "blue", "blue", "blue", "blue", "blue", "white"],
  ["white", "blue", "blue", "blue", "black", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "white", "white"],
  ["white", "white", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "white", "white"],
  ["white", "white", "white", "white", "blue", "blue", "blue", "blue", "blue", "white", "white", "white", "red", "red", "red"],
  ["white", "white", "white", "white", "white", "blue", "white", "white", "blue", "white", "red", "red", "red", "red", "red"],
  ["white", "white", "white", "white", "white", "blue", "blue", "red", "blue", "blue", "red", "red", "red", "red", "red"],
  ["white", "white", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red", "red", "black", "black"],
  ["white", "white", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red", "black", "black", "black"],
  ["red", "red", "red", "red", "red", "red", "red", "red", "red", "black", "black", "black", "black", "black", "black"],
  ["red", "red", "red", "red", "red", "red", "black", "black", "black", "black", "black", "black", "black", "black", "black"],
];

const result = compareImages(playerImage, randomImage);
console.log(`Antal korrekta pixlar: ${result}`);