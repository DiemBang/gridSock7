import { io } from "socket.io-client";
import { displayGrid, printUpdatedGrid } from "./displayGrid.js";
import { loginUser } from "./loginUser.js";
import "./fourPlayersConnected.js";
import { chatList, sendBtn, sendMessage } from "./chatElements.js";
import { showResultPage } from "./resultPage.js";
import { viewGalleryBtn } from "./resultPage.js";
import { getAndPrintGallery } from "./gallery.js";

export const socket = io("https://multiplayergame-si78l.ondigitalocean.app/");

export { imageFromGame };

let userName = document.getElementById("userName");
let chatSection = document.getElementById("chatSection");

// Variable that contains the array from the image painted by the players
let imageFromGame;

sendBtn.addEventListener("click", () => {
  console.log("send chat", sendMessage.value);
  socket.emit("chat", {
    name: userName.value,
    message: sendMessage.value,
  });
  sendMessage.value = "";
});

socket.on("chat", (arg) => {
  console.log("socket", arg);
  updateChat(arg);
});

function updateChat(chat) {
  let li = document.createElement("li");

  li.innerHTML = `
    <div class="chat-name">${chat.name}</div>&nbsp;[${chat.timestamp}]<br>${chat.message}
  `;

  // Adds class to messages for styling of own/others messages
  if (chat.name === userName.value) {
    li.classList.add("own-msg");
  } else {
    li.classList.add("other-user-msg");
  }

  chatList.appendChild(li);
}

loginUser();

//Receive updated grid from backend
socket.on("grid", (gridUpdate) => {
  imageFromGame = gridUpdate;
  console.log("Array from game:", imageFromGame);
  //add function to print updated grid
  printUpdatedGrid(gridUpdate);
});



