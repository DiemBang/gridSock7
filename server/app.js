let globalGrid = require("./globalGrid.js");
let imgObject = require("./imageArrays.js");

const app = require("express")();
const server = require("http").createServer(app);

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
cors = require("cors");

const indexRouter = require("./routes/index.js");
const usersRouter = require("./routes/users.js");
const imagesRouter = require("./routes/images.js");

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb+srv://diembang09:gridSock7@diemclustercluck.m7xqzzg.mongodb.net/?retryWrites=true&w=majority&appName=DiemClusterCluck", {
  useUnifiedTopology: true,
})
  .then((client) => {
    console.log("Vi är uppkopplade mot databasen");

    const db = client.db("Gridsock7");
    app.locals.db = db;
  })
  .catch((err) => console.error("Ingen kontakt med databasen", err));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/images", imagesRouter);

module.exports = app;

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
// variable to generate random image
let randomImg;
let imgs = imgObject.imgs;

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

globalGrid.grid = initialGrid();
console.log(globalGrid.grid);

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log(socket.id);

  // When a user connects they enter the mainroom
  socket.join(mainRoom);

  //eventlistener for event login
  socket.on("login", (userData) => {
    const { username, socketId } = userData;
    let userId;
    let userColor;

    // check if username exists in onlineIsers list
    const foundUser = onlineUsers.find((user) => user.username === username);

    //if foundUser exists in the onlineUsers list the assigned userId is the index in the list
    if (foundUser) {
      userId = onlineUsers.indexOf(foundUser);
      userColor = userColors[userId];
      //userId = userList.indexOf(username);
      if (onlineUsers.length === 4) {
        // Generate a random number when 4 players have connected
        randomImg = getRandomImage(imgs);
        globalGrid.grid = initialGrid();
        io.emit("fourPlayersConnected", randomImg);
        io.emit("randomImg", randomImg);
      }
    } else {
      // assign userID based on knowing:
      // * before adding a new user, the last user in the list has userid length-1
      // * if adding a new user, it will have one higher id number which is length
      userId = onlineUsers.length;
      userColor = userColors[userId];
      // add new user to onlineUsers list
      let newUser = {
        userName: username,
        socketId: socketId,
        userColor: userColor,
      };
      onlineUsers.push(newUser);

      // if four users are on onlineUsers list start new game
      if (onlineUsers.length === 4) {
        // Generate a random number when 4 players have connected
        randomImg = getRandomImage(imgs);
        globalGrid.grid = initialGrid();
        io.emit("fourPlayersConnected", randomImg);
        io.emit("randomImg", randomImg);
      }
    }

    //a login confirmation is sent to the client side with username and userId
    socket.emit("loginConfirmation", { username, userId, userColor, socketId });

    io.emit("updateOnlineUsers", onlineUsers);
  });
  // eventlistener for disconnect
  socket.on("disconnect", () => {
    console.log(`${socket.id} disconnected`);

    // Find the disconnected user by socketId
    const disconnectedUser = onlineUsers.find((user) => user.socketId === socket.id);

    if (disconnectedUser) {
      // Remove the disconnected user from the onlineUsers array
      onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);

      // Update the online users list and inform all clients
      io.emit("updateOnlineUsers", onlineUsers);

      console.log(`${disconnectedUser.username} disconnected`);
    }
  });

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

    let currentColorOnPosition = globalGrid.grid[gridPositionAndColor.y][gridPositionAndColor.x];

    if (gridPositionAndColor.color === currentColorOnPosition) {
      globalGrid.grid[gridPositionAndColor.y][gridPositionAndColor.x] = "grey";
    } else {
      globalGrid.grid[gridPositionAndColor.y][gridPositionAndColor.x] = gridPositionAndColor.color;
    }
    console.log(globalGrid.grid);
    io.emit("grid", globalGrid.grid);
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

  // Start new game when clicking on new game
  socket.on("startNewGame", () => {
    console.log("received startNewGame");
    globalGrid.grid = initialGrid();
    randomImg = getRandomImage(imgs);
    io.emit("randomImg", randomImg);
    io.emit("startNewGame", randomImg);
  });
});

function getRandomImage(imgs) {
  // creates random number from length of array of images and returns random image
  const randomIndex = Math.floor(Math.random() * imgs.length);
  return imgs[randomIndex];
}

server.listen(3000);
