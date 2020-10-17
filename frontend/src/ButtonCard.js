import React, { useState } from "react";
import "./ButtonCard.css";
import Button from "@material-ui/core/Button";
import io from "socket.io-client";
import { useSpring, animated } from "react-spring";

const socket = io("https://shielded-tor-10043.herokuapp.com/");

function ButtonCard() {
  const [name1, setName1] = useState("Karthik");
  const [name2, setName2] = useState("Abhijith");
  const [name3, setName3] = useState("Atul");

  const [btncolor1, setBtnColor1] = useState("secondary");
  const [btncolor2, setBtnColor2] = useState("secondary");
  const [btncolor3, setBtnColor3] = useState("secondary");

  const styles = {
    button: {
      background: "#f50057",
      color: "white",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
    buttonGreen: {
      background:
        "linear-gradient(164deg, rgba(2,0,36,1) 0%, rgba(13,121,9,1) 0%, rgba(8,182,5,1) 37%, rgba(49,196,3,1) 72%, rgba(1,255,0,1) 100%)",
      boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .30)",
    },
  };

  const [props1, set1] = useSpring(() => ({
    opacity: 0,
  }));

  const [props2, set2] = useSpring(() => ({
    opacity: 0,
    config: { duration: 5000 },
  }));

  const [props3, set3] = useSpring(() => ({
    opacity: 0,
    config: { duration: 5000 },
  }));

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
    if (message === name1) {
      setBtnColor1("green");
      setName1(`Karthik says yes!`);
      set1({
        opacity: 1,
        config: { duration: 5000 },
      });
    } else if (message === name2) {
      setBtnColor2("green");
      setName2(`Abhijith says yes!`);
      set2({
        opacity: 1,
        config: { duration: 5000 },
      });
    } else if (message === name3) {
      setBtnColor3("green");
      setName3(`Atul says yes!`);
      set3({
        opacity: 1,
        config: { duration: 5000 },
      });
    }
  });

  //Double click handler
  const handleDoubleClick = (name) => {
    socket.emit("button-doubleclick", name);
  };

  //On receiving server message of button being double clicked
  socket.on("button-doubleclicked", (message) => {
    if (message === name1) {
      setBtnColor1("secondary");
      setName1("Karthik");
      set1({
        opacity: 0,
        config: { duration: 1000 },
      });
    } else if (message === name2) {
      setBtnColor2("secondary");
      setName2("Abhijith");
      set2({
        opacity: 0,
        config: { duration: 1000 },
      });
    } else if (message === name3) {
      setBtnColor3("secondary");
      setName3("Atul");
      set3({
        opacity: 0,
        config: { duration: 1000 },
      });
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
            handleClick(name1);
          }}
          onDoubleClick={() => {
            handleDoubleClick(name1);
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
            handleClick(name2);
          }}
          onDoubleClick={() => {
            handleDoubleClick(name2);
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
            handleClick(name3);
          }}
          onDoubleClick={() => {
            handleDoubleClick(name3);
          }}
        >
          {name3} <br />
        </Button>
      </div>
    </div>
  );
}

export default ButtonCard;
