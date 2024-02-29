import { io } from  "socket.io-client";

const socket = io("http://localhost:3000");

let chatName = document.getElementById("chatName");
let sendMessage = document.getElementById("sendMessage");
let sendBtn = document.getElementById("sendBtn");
let chatList = document.getElementById("chatList");
let roomBtn = document.getElementById("roomBtn");

sendBtn.addEventListener("click", () => {
  console.log("send chat", sendMessage.value);
  socket.emit("chat", {
    name: chatName.value, 
    message: sendMessage.value,
    room: roomInput.value || "main",
  }); 
})

socket.on("chat", (arg) =>{
  console.log("socket", arg);
  updateChat(arg);
})

//When the user clicks on the room button the user enters the choosen room, if nothing is written in 
//the room input, then the user stays in the main room
roomBtn.addEventListener('click', () => {
  let room = roomInput.value || "main";
  socket.emit("joinRoom", room);
})

function updateChat(chat) {
  let li = document.createElement("li"); 
  li.innerText = chat.name + ' ' + '['+chat.timestamp+']' + ' ' +chat.message;
  chatList.appendChild(li);
}