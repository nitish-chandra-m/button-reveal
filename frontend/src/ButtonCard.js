import React, { useState, useEffect } from "react";
import "./ButtonCard.css";
import Button from "@material-ui/core/Button";
import io from "socket.io-client";
import { useSpring, animated } from "react-spring";
import { firestore } from "./config/firebase";
import { styles } from "./styles";

//Setting up a WebSocket connection with the server at the server URL
const socket = io("https://inaugurate-backend.herokuapp.com/");

function ButtonCard() {
  //React hooks for state
  const [name1, setName1] = useState("Karthik");
  const [name2, setName2] = useState("Abhijith");
  const [name3, setName3] = useState("Atul");
  const [name4, setName4] = useState("Anubhav");

  const [btncolor1, setBtnColor1] = useState("secondary");
  const [btncolor2, setBtnColor2] = useState("secondary");
  const [btncolor3, setBtnColor3] = useState("secondary");
  const [btncolor4, setBtnColor4] = useState("secondary");

  const [props1, set1] = useSpring(() => ({
    opacity: 0,
  }));

  const [props2, set2] = useSpring(() => ({
    opacity: 0,
  }));

  const [props3, set3] = useSpring(() => ({
    opacity: 0,
  }));

  const [props4, set4] = useSpring(() => ({
    opacity: 0,
  }));

  //Handler functions for single and double click
  const handlebtn1 = (click) => {
    if (click === "single") {
      setBtnColor1("green");
      setName1(`Karthik says yes!`);
      set1({
        opacity: 1,
        config: { duration: 5000 },
      });
    } else {
      setBtnColor1("primary");
      setName1("Karthik");
      set1({
        opacity: 0,
        config: { duration: 1000 },
      });
    }
  };

  const handlebtn2 = (click) => {
    if (click === "single") {
      setBtnColor2("green");
      setName2(`Abhijith says yes!`);
      set2({
        opacity: 1,
        config: { duration: 5000 },
      });
    } else {
      setBtnColor2("primary");
      setName2("Abhijith");
      set2({
        opacity: 0,
        config: { duration: 1000 },
      });
    }
  };

  const handlebtn3 = (click) => {
    if (click === "single") {
      setBtnColor3("green");
      setName3(`Atul says yes!`);
      set3({
        opacity: 1,
        config: { duration: 5000 },
      });
    } else {
      setBtnColor3("primary");
      setName3("Atul");
      set3({
        opacity: 0,
        config: { duration: 1000 },
      });
    }
  };

  const handlebtn4 = (click) => {
    if (click === "single") {
      setBtnColor4("green");
      setName4(`Anubhav says yes!`);
      set4({
        opacity: 1,
        config: { duration: 5000 },
      });
    } else {
      setBtnColor4("primary");
      setName4("Anubhav");
      set4({
        opacity: 0,
        config: { duration: 1000 },
      });
    }
  };

  //React hook which will execute the callback function on Mount only
  useEffect(() => {
    firestore
      .collection("buttons")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.get("index") === 1 && doc.get("onclick")) {
            handlebtn1("single");
          } else if (doc.get("index") === 2 && doc.get("onclick")) {
            handlebtn2("single");
          } else if (doc.get("index") === 3 && doc.get("onclick")) {
            handlebtn3("single");
          } else if (doc.get("index") === 4 && doc.get("onclick")) {
            handlebtn4("single");
          }
        });
      });
  });

  //Single click message to server and update database with onclick=true
  const handleClick = (name, index) => {
    socket.emit("button-click", name);
    if (index === 1) {
      firestore
        .collection("buttons")
        .doc("1symz0Izsxf9rBtuCpUK")
        .update({ onclick: true });
    } else if (index === 2) {
      firestore
        .collection("buttons")
        .doc("9EqgM6Q5BIOEGC0vPFKs")
        .update({ onclick: true });
    } else if (index === 3) {
      firestore
        .collection("buttons")
        .doc("Vmvil9D6JZbHYGvnM5IQ")
        .update({ onclick: true });
    } else if (index === 4) {
      firestore
        .collection("buttons")
        .doc("W52e6OuJTwN65hINlwAK")
        .update({ onclick: true });
    }
  };

  //On receiving server message of button being clicked
  socket.on("button-clicked", (message) => {
    switch (message) {
      case name1:
        handlebtn1("single");
        break;
      case name2:
        handlebtn2("single");
        break;
      case name3:
        handlebtn3("single");
        break;
      case name4:
        handlebtn4("single");
        break;
      default:
        break;
    }
  });

  //Double click message to server and update database with onclick=false
  const handleDoubleClick = (name, index) => {
    socket.emit("button-doubleclick", name);
    if (index === 1) {
      firestore
        .collection("buttons")
        .doc("1symz0Izsxf9rBtuCpUK")
        .update({ onclick: false });
    } else if (index === 2) {
      firestore
        .collection("buttons")
        .doc("9EqgM6Q5BIOEGC0vPFKs")
        .update({ onclick: false });
    } else if (index === 3) {
      firestore
        .collection("buttons")
        .doc("Vmvil9D6JZbHYGvnM5IQ")
        .update({ onclick: false });
    } else if (index === 4) {
      firestore
        .collection("buttons")
        .doc("W52e6OuJTwN65hINlwAK")
        .update({ onclick: false });
    }
  };

  //On receiving server message of button being double clicked
  socket.on("button-doubleclicked", (message) => {
    switch (message) {
      case name1:
        handlebtn1("double");
        break;
      case name2:
        handlebtn2("double");
        break;
      case name3:
        handlebtn3("double");
        break;
      case name4:
        handlebtn4("double");
        break;
      default:
        break;
    }
  });

  return (
    <div className="container">
      <div className="buttonwithgif">
        <animated.img
          src="https://webstockreview.net/images/flame-clipart-oil-18.gif"
          alt="diya"
          style={props1}
        />

        <Button
          variant="contained"
          style={{
            ...styles.button,
            ...(btncolor1 === "green" ? styles.buttonGreen : {}),
          }}
          size="large"
          onClick={() => {
            handleClick(name1, 1);
          }}
          onDoubleClick={() => {
            handleDoubleClick(name1, 1);
          }}
        >
          {name1} <br />
        </Button>
      </div>

      <div className="buttonwithgif">
        <animated.img
          src="https://webstockreview.net/images/flame-clipart-oil-18.gif"
          alt="diya"
          style={props2}
        />

        <Button
          variant="contained"
          style={{
            ...styles.button,
            ...(btncolor2 === "green" ? styles.buttonGreen : {}),
          }}
          size="large"
          onClick={() => {
            handleClick(name2, 2);
          }}
          onDoubleClick={() => {
            handleDoubleClick(name2, 2);
          }}
        >
          {name2} <br />
        </Button>
      </div>

      <div className="buttonwithgif">
        <animated.img
          src="https://webstockreview.net/images/flame-clipart-oil-18.gif"
          alt="diya"
          style={props3}
        />

        <Button
          variant="contained"
          style={{
            ...styles.button,
            ...(btncolor3 === "green" ? styles.buttonGreen : {}),
          }}
          size="large"
          onClick={() => {
            handleClick(name3, 3);
          }}
          onDoubleClick={() => {
            handleDoubleClick(name3, 3);
          }}
        >
          {name3} <br />
        </Button>
      </div>

      <div className="buttonwithgif">
        <animated.img
          src="https://webstockreview.net/images/flame-clipart-oil-18.gif"
          alt="diya"
          style={props4}
        />

        <Button
          variant="contained"
          style={{
            ...styles.button,
            ...(btncolor4 === "green" ? styles.buttonGreen : {}),
          }}
          size="large"
          onClick={() => {
            handleClick(name4, 4);
          }}
          onDoubleClick={() => {
            handleDoubleClick(name4, 4);
          }}
        >
          {name4} <br />
        </Button>
      </div>
    </div>
  );
}

export default ButtonCard;
