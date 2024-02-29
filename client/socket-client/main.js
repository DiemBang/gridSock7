import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

let chatName = document.getElementById("chatName");
let sendMessage = document.getElementById("sendMessage");
let sendBtn = document.getElementById("sendBtn");
let chatList = document.getElementById("chatList");

sendBtn.addEventListener("click", () => {
  //  UPDATE: only updates chat if there is a name and message typed
  if (chatName.value && sendMessage.value) {
    console.log("send chat", sendMessage.value);
    socket.emit("chat", { name: chatName.value, message: sendMessage.value }); //arg is an object
    // UPDATE: clear chat entry
    sendMessage.value = "";
  }
});

socket.on("chat", (arg) => {
  console.log("socket", arg);
  updateChat(arg);
});

function updateChat(chat) {
  let li = document.createElement("li");
  li.innerText = chat.name + " " + "[" + chat.timestamp + "]" + " " + chat.message;

  // UPDATE: add class to msgs
  if (chat.name === chatName.value) {
    li.classList.add("own-msg");
  } else {
    li.classList.add("other-user-msg");
  }
  chatList.appendChild(li);
}
