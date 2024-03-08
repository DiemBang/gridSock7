import { createGrid, printImage } from "./printImages";
import { displayGrid } from "./displayGrid";

export { printStartImage };

/**
 * Function: print image at start of game
 */

function printStartImage() {
  createGrid();
  // TODO: change number of seconds to appropriate value
  setTimeout(displayGrid, 3000);
}
