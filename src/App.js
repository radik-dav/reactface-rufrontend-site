import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { Redirect, Link, Route, Switch } from "react-router-dom";

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
);

export default App;
