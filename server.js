require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const SocketServer = require("./socketServer");
const { ExpressPeerServer } = require("peer");
const path = require("path");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.get("/", (req, res) => {
  return res.json("Hi there");
});

// Socket
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  SocketServer(socket);
});

// Create peer server
ExpressPeerServer(http, { path: "/" });

// Routes
app.use("/api", require("./routes/authRouter"));
app.use("/api", require("./routes/userRouter"));

app.use("/api", require("./routes/notifyRouter"));
app.use("/api", require("./routes/messageRouter"));

const URI = process.env.MONGODB_URL;
mongoose.set("strictQuery", true);
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log(`Error : ${error}`);
  });

const port = process.env.PORT || 5000;
http.listen(port, () => {
  console.log("Server is running on port", port);
});
