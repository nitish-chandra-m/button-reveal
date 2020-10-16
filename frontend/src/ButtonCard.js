import React, { useState } from "react";
import "./ButtonCard.css";
import Button from "@material-ui/core/Button";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import io from "socket.io-client";

const socket = io("https://shielded-tor-10043.herokuapp.com/");

function ButtonCard() {
  let name1 = "Karthik";
  let name2 = "Abhijith";
  let name3 = "Atul";

  const [btncolor1, setBtnColor1] = useState("secondary");
  const [btncolor2, setBtnColor2] = useState("secondary");
  const [btncolor3, setBtnColor3] = useState("secondary");

  //Connection check message
  socket.on("connected-event", (message) => {
    console.log(message);
  });

  //Single click handler
  const handleClick = (name) => {
    socket.emit("button-click", name);
  };

  //On receiving server message of button being clicked
  socket.on("button-clicked", (message) => {
    if (message === `Change color of ${name1} button guys`) {
      setBtnColor1("primary");
    } else if (message === `Change color of ${name2} button guys`) {
      setBtnColor2("primary");
    } else if (message === `Change color of ${name3} button guys`) {
      setBtnColor3("primary");
    }
  });

  //Double click handler
  const handleDoubleClick = (name) => {
    socket.emit("button-doubleclick", name);
  };

  //On receiving server message of button being double clicked
  socket.on("button-doubleclicked", (message) => {
    if (message === `Change back color of ${name1} button guys`) {
      setBtnColor1("secondary");
    } else if (message === `Change back color of ${name2} button guys`) {
      setBtnColor2("secondary");
    } else if (message === `Change back color of ${name3} button guys`) {
      setBtnColor3("secondary");
    }
  });

  return (
    <div className="container">
      <Button
        variant="contained"
        color={btncolor1}
        size="large"
        onClick={() => {
          handleClick(name1);
        }}
        onDoubleClick={() => {
          handleDoubleClick(name1);
        }}
      >
        {name1} <br />
        <EmojiObjectsIcon />
      </Button>
      <Button
        variant="contained"
        color={btncolor2}
        size="large"
        onClick={() => {
          handleClick(name2);
        }}
        onDoubleClick={() => {
          handleDoubleClick(name2);
        }}
      >
        {name2} <br />
        <EmojiObjectsIcon />
      </Button>
      <Button
        variant="contained"
        color={btncolor3}
        size="large"
        onClick={() => {
          handleClick(name3);
        }}
        onDoubleClick={() => {
          handleDoubleClick(name3);
        }}
      >
        {name3} <br />
        <EmojiObjectsIcon />
      </Button>
    </div>
  );
}

export default ButtonCard;
