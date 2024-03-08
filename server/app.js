const app = require("express")();
const server = require("http").createServer(app);
require('./mongodDB.js');

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const userColors = ["black", "white", "blue", "red"];

app.get("/test", (req, res) => {
  res.send("<h1>Socket</h1>");
});

let connectedPlayers = 0;
const mainRoom = "main";
//userlist för logged in users
let userList = [];
//variabel for checking which userId was assigned the latest
let latestUserId = 0;

//Create the initial grid that will be used as the game board
function initialGrid() {
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

const globalGrid = initialGrid();
console.log(globalGrid);

const onlineUsers = []; 

io.on("connection", (socket) => {
  // console.log("opened connection");
  // When a user connects they enter the mainroom
  socket.join(mainRoom);
  //console.log("connection", socket)
  //socket.emit("chat", {name: "computer", message:"Hello World", timestamp: "2024"})

  //eventlistener for event login
  socket.on("login", (userData) => {
    const { username } = userData;
    let userId;
    
  //if a user already exists in the userList the assigned userId is the index in the list
    if(userList.includes(username)) {
      userId = userList.indexOf(username);
    } else { 
      //if the user doesn't exist in the list the assined userId is +1 of the latest assigned userId
      userId = latestUserId++;
      if (latestUserId === 4) {
        io.emit("fourPlayersConnected");
        console.log("four user connected");
      }
      //the new userId gets pushed to the userList
      userList.push(username);
      io.emit("updatedOnlineUsers", onlineUsers)
    }

    let userColor = userColors[userId];
    //a login confirmation is sent to the client side with username and userId
    socket.emit("loginConfirmation", { username, userId, userColor });

    onlineUsers.push(username);
    io.emit("updateOnlineUsers", onlineUsers);
  })

  socket.on("chat", (arg) => {
    let currentTime = new Date();
    let timestamp = currentTime.toTimeString();
    let options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };

    timestamp = currentTime.toLocaleTimeString("sv-SE", options);
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
  //});

  //Receive grid position and color from frontend
  socket.on("grid", (gridPositionAndColor) => {
    console.log(gridPositionAndColor);
    
    let currentColorOnPosition = globalGrid[gridPositionAndColor.x][gridPositionAndColor.y];

    if (gridPositionAndColor.color === currentColorOnPosition) {
        globalGrid[gridPositionAndColor.x][gridPositionAndColor.y] = "grey";
    } else {
        globalGrid[gridPositionAndColor.x][gridPositionAndColor.y] = gridPositionAndColor.color;
    }
    console.log(globalGrid);
    io.emit("grid", globalGrid);
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
