import { io } from "socket.io-client";
import { timer } from "./timer.js";

const socket = io("http://localhost:3000");

socket.on("fourPlayersConnected", () => {
    console.log("Four players connected");
    // Callback function that will start timer.
    timer(30, () => {
        console.log("Timer finished!");
    });
})