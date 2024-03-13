export { saveImage };

// För att kunna rätta måste ju en array av bilden skapas varje gång spelet tar slut
// Sedan koppla på alternativet att spara den i databasen om spelarna vill

// Galleriet visas väl bara för den spelare som tryckt på knappen förresten?
// Och det räcker att en spelar trycker på sparaknappen för att bilden ska sparas?

function saveImage() {
  // Hur får vi tag på varje grid item? När måste vi lägga in den här funktionen för att kunna få ut färgerna?
  // .grid-item existerar bara i scopet av funktionen som skapar gridet att måla i
  const gridCells = document.querySelectorAll(".grid-item");

  // Skapar en tom array att spara bilddata i
  const imgData = [];
  // Skapar tom array för varje rad
  let row = [];

  // För varje cell i griden,
  // tilldela color värdet av färgen som är vald eller grå om ingen annan färg
  // Pusha varje color till en rad i arrayen
  gridCells.forEach((cell, index) => {
    const color = cell.style.backgroundColor || "grey"; // Här behöver vi ändra till vår defaultfärg
    row.push(color);

    // När man uppnår 15 värden, pusha raden till arrayen imgData
    // Nollställ rad-arrayen för att kunna lagra nästa rad
    if ((index + 1) % 15 === 0) {
      imgData.push(row);
      row = [];
    }
  });

  return imgData;
}

// I BACKEND

const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

// spara i databasen
async function saveImageToDatabase() {
  // hämtar bilddatan från saveImage
  const imgData = saveImage();

  try {
    // väntar in connection till databasen
    await client.connect();
    // anger vilken databas
    const database = client.db('"databasnamn');
    // anger vilken kollektion
    const collection = database.collection("kollektionsnamn");
    // sparar bild till den angivna kollektionen
    await collection.insertOne({ img: imgData });

    console.log("Image saved to database");
  } catch (error) {
    console.error("Error saving image to database:", error);
    // körs oavsett vilken av ovanstående kod som körts
  } finally {
    // stänger kopplingen till databasen
    await client.close();
  }
}
