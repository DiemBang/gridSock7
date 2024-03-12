import { io } from "socket.io-client";

function getGallery() {
    const gallery = document.getElementById("gallery");

    gallery.classList.remove("hidden"); 
    
    fetch("http://localhost:3000/images")
    .then(res => res.json())
    .then(data => {
        console.log("Fetched images", data);
        const image = printSavedImages(data.img);
        gallery.innerHTML = image;
    })
    .catch(error => console.log("Error fetching images", error));
}


export { getGallery };
