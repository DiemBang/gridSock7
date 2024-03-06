import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
import { chatListContainer, chatList, messageList, sendMessage, sendBtn, messageLabel } from "./chatElements.js";

const chatSection = document.getElementById("chatSection");

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
  chatSection.appendChild(chatListContainer);
  chatSection.appendChild(messageLabel);
  chatSection.appendChild(sendMessage);
  chatSection.appendChild(sendBtn);

});

}

//eventlistener that listen for a login confirmation and 
//displays a successmessage in the console log
socket.on("loginConfirmation", (userData) => {
  const { username, userId } = userData;
  console.log(`Successful login for user ${username} with userId ${userId}`);
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
export { loginUser }; 