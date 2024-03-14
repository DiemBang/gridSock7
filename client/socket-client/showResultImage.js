import { imageFromGame } from "./main.js";

// Creates a new grid to display chosen image in
export function createResultGrid() {
    const showResult = document.getElementById("showResult");
    const resultImage = document.createElement("div");
    resultImage.classList.add("result-image");
    showResult.appendChild(resultImage);
    resultImage.innerHTML = "";
    console.log("Create result grid");
    // assigns variable randomImg the value that was randomised in getRandomImage
    // let randomImg = getRandomImage(imgs);
  
    for (let y = 0; y < 15; y++) {
      for (let x = 0; x < 15; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell-result");
        resultImage.appendChild(cell);
      }
    }
    //
    printResultImage(imageFromGame);
  }
  
  // Changes color on background of cells to print image from array
  // Can also be used to print images in gallery
  function printResultImage(img) {
    console.log("PRINTAR!");
  
    const cells = document.querySelectorAll(".cell-result");
    for (let y = 0; y < img.length; y++) {
      for (let x = 0; x < img[y].length; x++) {
        const color = img[y][x];
        cells[y * 15 + x].style.backgroundColor = color;
      }
    }
  }