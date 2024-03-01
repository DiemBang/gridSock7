const app = require("express")();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/test", (req, res) => {
  res.send("<h1>Socket</h1>");
});

io.on("connection", (socket) => {
  //console.log("connection", socket)
  //socket.emit("chat", {name: "computer", message:"Hello World", timestamp: "2024"})

  socket.on("chat", (arg) => {
    let currentTime = new Date();
    let options = { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" };
    let timestamp = currentTime.toLocaleString("sv-SE", options);
    arg.timestamp = timestamp;
    console.log("incoming chat", arg);
    io.emit("chat", arg);
  });
});

server.listen(3000);
