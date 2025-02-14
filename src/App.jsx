import "./App.css";
import React from "react";
import Clock from "./Clock";

const App = () => {
  return (
    <>
      <h1>World Clock</h1>
      <div className="card">
        <Clock timeZone="America/Los_Angeles" />
        <Clock timeZone="Europe/London" />
        <Clock timeZone="Asia/Singapore" />
      </div>
    </>
  );
};

export default App;
