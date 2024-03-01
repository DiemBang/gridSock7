const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin:"*",
        methods: ["GET", "POST"]
    }
});

app.get("/test", (req, res) => {
    res.send("<h1>Socket</h1>")
})

io.on("connection", (socket) => {
    //console.log("connection", socket)
    //socket.emit("chat", {name: "computer", message:"Hello World", timestamp: "2024"})

    socket.on("chat", (arg) => {
        // arg should be an object with the keys name and message
        
        let currentTime = new Date();

        let timestamp = currentTime.toTimeString();
        // add timestamp key and value to arg object
        arg.timestamp = timestamp;
        console.log("incoming chat", arg);
        io.emit("chat", arg);
    })
})

server.listen(3000);