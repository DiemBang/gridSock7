const messageList = document.createElement("li");
const chatListContainer = document.createElement("div");
const chatList = document.createElement("ul");
const sendMessage = document.createElement("input");
const sendBtn = document.createElement("button");
const messageLabel = document.createElement('label');
const usersOnlineContainer = document.createElement("div");
const onlineUsersHeading = document.createElement("h2");
const newUserList = document.createElement("li");


chatListContainer.id = "chatListContainer";
chatList.id = "chatList";
messageList.id = "messageList";
sendMessage.id = "sendMessage";
sendBtn.id = "sendBtn";
messageLabel.id ="messageLabel";
usersOnlineContainer.id = "usersOnlineContainer";
onlineUsersHeading.id = "onlineUsersHeading";
newUserList.id = "newUserList";


chatListContainer.classList.add("chat-list-container");
chatList.classList.add("chat-list");
messageList.classList.add("message-list");
sendMessage.classList.add("send-message");
sendBtn.classList.add("send-btn");
messageLabel.classList.add("message-label");


sendMessage.type = "text";
sendBtn.innerText = "Send";
messageLabel.textContent = 'Message: ';
onlineUsersHeading.textContent ="Online users";


export { chatListContainer, chatList, messageList, sendMessage, sendBtn, messageLabel, 
    onlineUsersHeading, usersOnlineContainer, newUserList };