import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
let userColor; 

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

});

}


//eventlistener that listen for a login confirmation and 
//displays a successmessage in the console log
socket.on("loginConfirmation", (userData) => {
  const { username, userId, userColor } = userData;
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
export { loginUser }; 