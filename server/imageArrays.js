const chameleonImg = [
  ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"],
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
  ["red", "red", "red", "red", "red", "red", "red", "black", "black", "black", "black", "black", "black", "black", "black"],
];

const fishImg = [
  ["blue", "blue", "white", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "black", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "black", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "white", "blue", "blue", "blue", "blue", "red", "black", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "white", "blue", "red", "white", "red", "white", "blue", "black", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "red", "white", "red", "white", "red", "blue", "black", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "red", "black", "red", "white", "red", "white", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "red", "white", "red", "white", "red", "black", "red", "white", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "red", "white", "red", "white", "red", "white", "red", "black", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "red", "white", "red", "white", "red", "white", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "red", "white", "red", "white", "red", "black", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "red", "white", "red", "white", "red", "white", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "red", "white", "red", "black", "red", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
];

const penguinImg = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
const robotImg = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
const cupcakeImg = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], []];

// TODO: add all image arrays to export
// TODO: add all image arrays to import in printImages.js
export { chameleonImg, fishImg };
