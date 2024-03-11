import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
import {
  chatListContainer,
  chatList,
  messageList,
  sendMessage,
  sendBtn,
  messageLabel,
  onlineUsersHeading,
  onlineUsersList,
} from "./chatElements.js";
import { displayGrid } from "./displayGrid.js";

const gamePage = document.getElementById("gamePage");
const startPage = document.getElementById("startPage");
const chatSection = document.getElementById("chatSection");
const chatContainer = document.getElementById("chatContainer");

document.addEventListener("DOMContentLoaded", function () {
  startPage.classList.remove("hidden");

  joinGameBtn.addEventListener("click", loginUser);
});

let globalUserColor;

function loginUser() {
  const joinGameBtn = document.getElementById("joinGameBtn");
  const userName = document.getElementById("userName");

  joinGameBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const username = userName.value;

    if (username) {
      console.log("username", username);
      socket.emit("login", { username });
    }

    chatList.appendChild(messageList);
    chatListContainer.appendChild(chatList);
    onlineUsersHeading.appendChild(onlineUsersList);
    chatSection.appendChild(onlineUsersHeading);
    chatSection.appendChild(onlineUsersList);
    chatSection.appendChild(messageLabel);
    chatSection.appendChild(sendMessage);
    chatSection.appendChild(sendBtn);
    chatSection.appendChild(chatListContainer);

    displayGrid();

    startPage.classList.add("hidden");
    gamePage.classList.remove("hidden");
  });
}

socket.on("updateOnlineUsers", (onlineUsers) => {
  updateOnlineUsersList(onlineUsers);
});

function updateOnlineUsersList(onlineUsers) {

  onlineUsersList.innerHTML = "";
  
  onlineUsers.forEach((user) => {
    let userExists = false;

    for (let i = 0; i < onlineUsersList.children.length; i++) {
      if (onlineUsersList.children[i].innerHTML === user) {
        userExists = true;
        break;
      }
    }

    if (!userExists) {
      let newUserItem = document.createElement("li");
      newUserItem.innerHTML = user.userName;
      onlineUsersList.appendChild(newUserItem);
      newUserItem.classList.add("new-user-item");
    }
  });

  console.log("Online users updated list", onlineUsersList.innerHTML);
}

//eventlistener that listen for a login confirmation and
//displays a successmessage in the console log
socket.on("loginConfirmation", (userData) => {
  const { username, userId, userColor, socketId } = userData;
  globalUserColor = userColor;

  console.log(`Successful login for user ${username} with userId ${userId} and userColor ${userColor} and socketId ${socketId}`);

});

/*
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
};



  /*const usersOnlineDiv = document.getElementById("onlineUsers");
  const usersOnlineContainer = document.createElement("div");
  const onlineUsersHeading = document.createElement("h2");
  const onlineUsersList = document.createElement("li");
  onlineUsersList.className = "user-online";
  onlineUsersHeading.textContent = "Online users"

  
  usersOnlineContainer.appendChild(onlineUsersHeading);
  usersOnlineContainer.appendChild(onlineUsersList);
  usersOnlineDiv.appendChild(usersOnlineContainer);
  chatContainer.appendChild(usersOnlineDiv);*/

export { loginUser, globalUserColor };
