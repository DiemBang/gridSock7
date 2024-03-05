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

const mainRoom = "main";

io.on("connection", (socket) => {
  // When a user connects they enter the mainroom
  socket.join(mainRoom);
  //console.log("connection", socket)
  //socket.emit("chat", {name: "computer", message:"Hello World", timestamp: "2024"})

  socket.on("chat", (arg) => {
    let currentTime = new Date();

    let timestamp = currentTime.toTimeString();
    arg.timestamp = timestamp;
    console.log("incoming chat", arg);

    let room = arg.room || "main";

    io.to(room).emit("chat", arg);
  });
  //An eventlistener for "joinRoom" where the user exits the mainroom and joins the choosen room
  socket.on("joinRoom", (room) => {
    socket.leave(mainRoom);
    socket.join(room);
    //A message is displayed that says which room the user has entered
    socket.emit("chat", {
      name: "System",
      message: `You have entered the ${room} room.`,
      timestamp: new Date().toTimeString(),
      room: room,
    });
  });
});

server.listen(3000);
