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

//Create an empty grid
function emptyGrid() {
  let grid = [];
  let rows = 15;
  let columns = 15;

  for (let x = 0; x < rows; x++) {
    grid[x] = [];
    for (let y = 0; y < columns; y++) {
      grid[x][y] = "grey";
    }
  }
  return grid;
}

const grid = emptyGrid();
console.log(grid);

io.on("connection", (socket) => {
  console.log("opened connection");
  // When a user connects they enter the mainroom
  socket.join(mainRoom);
  //console.log("connection", socket)
  //socket.emit("chat", {name: "computer", message:"Hello World", timestamp: "2024"})

  socket.on("chat", (arg) => {
    let currentTime = new Date();
    let options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    let timestamp = currentTime.toLocaleTimeString("sv-SE", options);
    arg.timestamp = timestamp;
    console.log("incoming chat", arg);

    let room = arg.room || "main";

    io.to(room).emit("chat", arg);

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

  socket.on("grid", (gridPosition) => {
    console.log(gridPosition);
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

  //socket.on();
});

server.listen(3000);
