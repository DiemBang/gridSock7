const messageList = document.createElement("li");
const chatListContainer = document.createElement("div");
const chatList = document.createElement("ul");
const sendMessage = document.createElement("input");
const sendBtn = document.createElement("button");
const messageLabel = document.createElement('label');
const onlineUsersHeading = document.createElement("h2");
const newUserItem = document.createElement("li");
const onlineUsersList = document.createElement("div");


chatListContainer.id = "chatListContainer";
chatList.id = "chatList";
messageList.id = "messageList";
sendMessage.id = "sendMessage";
sendBtn.id = "sendBtn";
messageLabel.id ="messageLabel";
onlineUsersHeading.id = "onlineUsersHeading";
newUserItem.id = "newUserItem";
onlineUsersList.id = "onlineUsersList";


chatListContainer.classList.add("chat-list-container");
chatList.classList.add("chat-list");
messageList.classList.add("message-list");
sendMessage.classList.add("send-message");
sendBtn.classList.add("send-btn");
messageLabel.classList.add("message-label");
onlineUsersHeading.classList.add("online-users-heading");
newUserItem.classList.add("new-user-item");
onlineUsersList.classList.add("online-users-list");


sendMessage.type = "text";
sendBtn.innerText = "Send";
messageLabel.textContent = 'Message: ';
onlineUsersHeading.textContent ="Online users";


export { chatListContainer, chatList, messageList, sendMessage, sendBtn, messageLabel, 
    onlineUsersHeading, onlineUsersList, newUserItem };