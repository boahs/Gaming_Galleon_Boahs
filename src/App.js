import "./App.css";
import React, { useState } from "react";

import Home from "./components/home";
import Jim from "./components/jim";
import logo from "./assets/jack.jpg"; //load image pass as prop to component
import Boxxy from "./components/boxxy";
import ButtonMain from "./components/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>ARRRRRRG!!!!! REMOVE - BLOAT - STEP ONE -</p>
        <Home />
        <Jim data={logo} />
        <Boxxy />
        <ButtonMain />
      </header>
    </div>
  );
}

export default App;
