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
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "white", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "black", "blue", "blue", "blue"],
  ["blue", "white", "blue", "blue", "blue", "blue", "blue", "blue", "red", "black", "black", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "red", "red", "red", "red", "black", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "white", "blue", "blue", "red", "red", "white", "red", "white", "blue", "blue", "blue", "black", "blue"],
  ["blue", "blue", "blue", "blue", "red", "red", "white", "red", "red", "white", "red", "blue", "black", "black", "blue"],
  ["blue", "white", "blue", "red", "black", "red", "white", "red", "red", "white", "red", "red", "black", "blue", "blue"],
  ["blue", "blue", "blue", "red", "red", "red", "white", "red", "red", "white", "red", "red", "black", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "red", "red", "white", "red", "red", "white", "red", "blue", "black", "black", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "red", "red", "white", "red", "white", "blue", "blue", "blue", "black", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "red", "red", "red", "red", "black", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "red", "black", "black", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "black", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"]
]

const penguinImg =
[
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "black", "black", "black", "black", "black", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "black", "white", "white", "black", "white", "white", "black", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "black", "white", "black", "white", "white", "white", "black", "white", "black", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "black", "white", "black", "red", "red", "red", "black", "white", "black", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "black", "white", "white", "red", "red", "red", "white", "white", "black", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "black", "black", "white", "white", "white", "white", "white", "black", "black", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "black", "black", "white", "white", "white", "black", "black", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "black", "black", "white", "white", "white", "white", "white", "black", "black", "blue", "blue", "blue"],
  ["blue", "blue", "black", "black", "white", "white", "white", "white", "white", "white", "white", "black", "black", "blue", "blue"],
  ["white", "white", "black", "white", "red", "red", "white", "white", "white", "red", "red", "white", "black", "white", "white"],
  ["white", "white", "black", "red", "red", "red", "red", "white", "red", "red", "red", "red", "black", "white", "white"],
  ["white", "white", "white", "red", "red", "red", "red", "black", "red", "red", "red", "red", "white", "white", "white"],
  ["white", "white", "white", "white", "red", "red", "black", "white", "black", "red", "red", "white", "white", "white", "white"],
  ["white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white"]
]

const robotImg = [
  ["white", "white", "red", "red", "white", "white", "red", "red", "white", "red", "red", "white", "white", "red", "red"],
  ["white", "red", "red", "white", "white", "black", "black", "black", "black", "black", "white", "white", "red", "red", "white"],
  ["red", "red", "white", "white", "black", "blue", "white", "white", "blue", "blue", "black", "red", "red", "white", "white"],
  ["red", "white", "white", "black", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "black", "white", "white", "red"],
  ["white", "white", "red", "black", "blue", "black", "blue", "blue", "blue", "black", "blue", "black", "white", "red", "red"],
  ["white", "red", "red", "black", "blue", "blue", "black", "black", "black", "blue", "blue", "black", "red", "red", "white"],
  ["red", "red", "white", "black", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "black", "red", "white", "white"],
  ["red", "white", "white", "black", "black", "black", "black", "black", "black", "black", "black", "black", "white", "white", "red"],
  ["white", "white", "red", "red", "white", "black", "blue", "blue", "blue", "black", "red", "white", "white", "red", "red"],
  ["white", "red", "red", "black", "black", "black", "blue", "blue", "blue", "black", "black", "black", "red", "red", "white"],
  ["red", "red", "white", "white", "red", "black", "blue", "blue", "blue", "black", "white", "red", "red", "white", "white"],
  ["red", "white", "white", "red", "red", "black", "black", "black", "black", "black", "red", "red", "white", "white", "red"],
  ["white", "white", "red", "red", "white", "white", "black", "white", "black", "red", "red", "white", "white", "red", "red"],
  ["white", "red", "red", "white", "white", "black", "black", "white", "black", "black", "white", "white", "red", "red", "white"],
  ["red", "red", "white", "white", "red", "red", "white", "red", "red", "white", "white", "red", "red", "white", "white"]
]

const cupcakeImg = [
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "blue", "red", "blue", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "red", "white", "red", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "blue", "red", "red", "red", "blue", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "blue", "white", "white", "red", "white", "white", "blue", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "blue", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white", "blue", "blue", "blue"],
  ["blue", "blue", "blue", "white", "white", "white", "white", "white", "white", "white", "white", "white", "white", "blue", "blue"],
  ["blue", "blue", "white", "white", "white", "white", "white", "red", "red", "red", "white", "white", "white", "white", "blue"],
  ["blue", "blue", "white", "red", "red", "red", "white", "red", "red", "red", "white", "red", "white", "blue", "blue"],
  ["black", "black", "white", "red", "red", "red", "red", "red", "red", "red", "red", "red", "black", "black", "black"],
  ["black", "black", "black", "red", "red", "red", "red", "red", "red", "red", "red", "red", "black", "black", "black"],
  ["black", "black", "black", "red", "red", "red", "red", "red", "red", "red", "red", "red", "black", "black", "black"],
  ["black", "black", "black", "black", "red", "red", "red", "red", "red", "red", "red", "black", "black", "black", "black"],
  ["black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black", "black"]
]

export { chameleonImg, fishImg, cupcakeImg, robotImg, penguinImg };


// TODO: add all image arrays to export

let imgs = [chameleonImg, fishImg];

module.exports = { chameleonImg, fishImg, imgs };

