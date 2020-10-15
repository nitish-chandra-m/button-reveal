import express from "express";
import socketio from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 3000;

// //Set static folder
// app.use(express.static("../reveal/build"));

//Run when a client connects
io.on("connection", (socket) => {
  console.log("A client has connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  //Connection check message
  socket.emit("connected-event", "Welcome to the real-time connection");

  //Handling single click
  socket.on("button-click", (name) => {
    //Broadcast message
    io.emit("button-clicked", `Change color of ${name} button guys`);
  });

  //Handling double click
  socket.on("button-doubleclick", (name) => {
    //Broadcast message
    io.emit("button-doubleclicked", `Change back color of ${name} button guys`);
  });
});

server.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));
