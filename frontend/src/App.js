import React from "react";
import "./App.css";
import ButtonCard from "./ButtonCard";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <div className="app__eventtitle">
          <h1>Welcome to Finacle Core Banking Upgrade</h1>
        </div>
        <div className="app__buttoncard">
          <ButtonCard />
        </div>
      </div>
    </div>
  );
}

export default App;
