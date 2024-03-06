const messageList = document.createElement("li");
const chatListContainer = document.createElement("div");
const chatList = document.createElement("ul");
const sendMessage = document.createElement("input");
const sendBtn = document.createElement("button");
const messageLabel = document.createElement('label');


chatListContainer.id = "chatListContainer";
chatList.id = "chatList";
messageList.id = "messageList";
sendMessage.id = "sendMessage";
sendBtn.id = "sendBtn";


chatListContainer.classList.add("chat-list-container");
chatList.classList.add("chatlist");
messageList.classList.add("messagelist");
sendMessage.classList.add("send-message");
sendBtn.classList.add("send-btn");


sendMessage.type = "text";
sendBtn.innerText = "Send";
messageLabel.textContent = 'Message: ';


export { chatListContainer, chatList, messageList, sendMessage, sendBtn, messageLabel };