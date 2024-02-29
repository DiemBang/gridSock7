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

// create an empty list for users
// if new user, add new user to list
// if existing user, get index fron list and use as id
// create div with id (for CSS purpose)

let userList = [];

function assignIdToUser(user) {
  if (userList.includes(user)) {
      let userId = userList.findIndex(user);
      return userId;
  } else { 
    let userListLength = userList.push(user);
    return userListLength - 1;
  }
}
