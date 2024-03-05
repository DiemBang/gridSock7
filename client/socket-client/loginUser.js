import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
const joinGameBtn = document.getElementById("joinGameBtn");
const userName = document.getElementById("userName");

joinGameBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const username = userName.value;

  if (username) {
	const userId = assignIdToUser(username);
  console.log("username", username, userId);
// Skicka användarnamnet och ID:et till servern för att servern ska kunna ha koll på hur 
// många användare som har loggat in i ett senare i skede
	socket.emit("login", { username, userId });
  }

});

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

export { assignIdToUser };