import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
import { chatListContainer, chatList, messageList, sendMessage, sendBtn, messageLabel } from "./chatElements.js";
import { displayGrid } from "./displayGrid.js";

const gamePage = document.getElementById("gamePage");
const startPage = document.getElementById("startPage");
const chatSection = document.getElementById("chatSection");

document.addEventListener("DOMContentLoaded", function() {
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
  chatSection.appendChild(messageLabel);
  chatSection.appendChild(sendMessage);
  chatSection.appendChild(sendBtn);
  chatSection.appendChild(chatListContainer);
  
  displayGrid();

});

  startPage.classList.add("hidden");
  gamePage.classList.remove("hidden");

}

//eventlistener that listen for a login confirmation and 
//displays a successmessage in the console log
socket.on("loginConfirmation", (userData) => {
  const { username, userId, userColor } = userData;
  globalUserColor = userColor;
  console.log(`Successful login for user ${username} with userId ${userId} and userColor ${userColor}`);
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
*/
export { loginUser, globalUserColor }; 