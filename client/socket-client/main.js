import { io } from  "socket.io-client";

const socket = io("http://localhost:3000");

let chatName = document.getElementById("chatName");
let sendMessage = document.getElementById("sendMessage");
let sendBtn = document.getElementById("sendBtn");
let chatList = document.getElementById("chatList");

sendBtn.addEventListener("click", () => {
  console.log("send chat", sendMessage.value);
  socket.emit("chat", {name: chatName.value, message: sendMessage.value}); //arg is an object
})

socket.on("chat", (arg) =>{
  console.log("socket", arg);
  updateChat(arg);
})

function updateChat(chat) {
  let li = document.createElement("li"); 
  li.innerText = chat.name + ' ' + '['+chat.timestamp+']' + ' ' +chat.message;
  chatList.appendChild(li);
}