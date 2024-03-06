import { io } from "socket.io-client";

const socket = io();

socket.on("fourPlayersConnected", () => {
    console.log("Four players connected");
})