import React from "react";
import "./App.css";
import "tachyons";
import AvatarList from "./AvatarList";
// npm install tachyons
// http://tachyons.io/docs/table-of-styles/

const App = props => {
  return (
    <div>
      <h1> Welcome to Avatar </h1>
      <AvatarList id="1" name="santosh" work="web developer" />
      <AvatarList id="2" name="Neha" work="Artist" />
      <AvatarList id="3" name="Pravat" work="web developer" />
      <AvatarList id=" 4" name="Alice" work="singer" />
    </div>
  );
};
export default App;
