import { io } from  "socket.io-client";
import { displayGrid } from "./displayGrid.js";

export const socket = io("http://localhost:3000");

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
  let userId = assignIdToUser(chat.name);
  console.log("user id is", userId);
  li.innerHTML = `
  <div class = "chat-name" id ="user${userId}">${chat.name}</div>[${chat.timestamp}]<br>${chat.message}
  `;

  // Adds class to messages for styling of own/others messages
  if (chat.name === chatName.value) {
    li.classList.add("own-msg");
  } else {
    li.classList.add("other-user-msg");
  }

  chatList.appendChild(li);
}

// create an empty list for users
// if new user, add new user to list
// if existing user, get index from list and use as id
// create div with id (for CSS purpose)

let userList = [];

function assignIdToUser(user) {
  if (userList.includes(user)) {
    console.log("userList", userList);
    let userId = userList.indexOf(user);
    return userId;
  } else {
    let userListLength = userList.push(user);
    return userListLength - 1;
  }
  // use as addeventlistener for join game button - remove this when done
};

displayGrid();