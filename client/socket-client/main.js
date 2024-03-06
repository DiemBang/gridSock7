import { io } from "socket.io-client";
import { displayGrid, printUpdatedGrid } from "./displayGrid.js";
import { loginUser } from "./loginUser.js";
import { chameleonImg, fishImg } from "../../server/imageArrays.js";

export const socket = io("http://localhost:3000");

let userName = document.getElementById("userName");
let sendMessage = document.getElementById("sendMessage");
let sendBtn = document.getElementById("sendBtn");
let chatList = document.getElementById("chatList");
let roomBtn = document.getElementById("roomBtn");

sendBtn.addEventListener("click", () => {
  console.log("send chat", sendMessage.value);
  socket.emit("chat", {
    name: userName.value,
    message: sendMessage.value,
    room: roomInput.value || "main",
  });
  sendMessage.value = "";
});

socket.on("chat", (arg) => {
  console.log("socket", arg);
  updateChat(arg);
});

//When the user clicks on the room button the user enters the choosen room, if nothing is written in
//the room input, then the user stays in the main room
roomBtn.addEventListener("click", () => {
  let room = roomInput.value || "main";
  socket.emit("joinRoom", room);
});

function updateChat(chat) {
  let li = document.createElement("li");

  li.innerHTML = `
    <div class="chat-name">${chat.name}</div>[${chat.timestamp}]<br>${chat.message}
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
  console.log("update", gridUpdate);
  //add function to print updated grid
  printUpdatedGrid(gridUpdate);
})

displayGrid();