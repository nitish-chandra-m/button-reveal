import express from "express";
import socketio from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = socketio(server);
const PORT = process.env.PORT || 9000;

//Run when a client connects
io.on("connection", (socket) => {
  console.log("A client has connected");

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });

  //Handling single click
  socket.on("button-click", (name) => {
    //Broadcast message
    io.emit("button-clicked", name);
  });

  //Handling double click
  socket.on("button-doubleclick", (name) => {
    //Broadcast message
    io.emit("button-doubleclicked", name);
  });
});

server.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));
