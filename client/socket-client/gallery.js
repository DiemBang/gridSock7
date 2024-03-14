// Funktionen för att hämta bilder från databasen + printa dem på sidan i en varsin grid
function getAndPrintGallery() {
  const galleryPage = document.getElementById("galleryPage");
  const gamePage = document.getElementById("gamePage");
  const galleryHeading = document.createElement("h2");

  galleryPage.classList.remove("hidden");
  gamePage.classList.add("hidden");
  galleryHeading.innerText = "Gallery";
  galleryPage.appendChild(galleryHeading);

  fetch("http://localhost:3000/images")
    .then(res => res.json())
    .then(data => {
      console.log("Fetched images", data);

      // Loopa igenom varje bild och skapa och printa grid för varje bild
      data.forEach(img => {
        console.log("Image from db", img.grid);

        const gridForGalleryImgs = document.createElement("div");
        gridForGalleryImgs.classList.add("image-container");
        galleryPage.appendChild(gridForGalleryImgs);

        for (let y = 0; y < 15; y++) {
          for (let x = 0; x < 15; x++) {
            const cell = document.createElement("div");
            cell.classList.add("cell-gallery");
            gridForGalleryImgs.appendChild(cell);

            const color = img.grid[y][x];
            cell.style.backgroundColor = color;
          }
        }
      });
    })
    .catch(error => console.log("Error fetching images", error));
}

export { getAndPrintGallery };
