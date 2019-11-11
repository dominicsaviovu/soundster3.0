import React, { Component } from 'react';
import Nav from "./components/Nav/Nav";
import Player from "./components/Player/Player";
import Upload from "./components/Upload/Upload";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/main" component={Nav} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/main" component={Player} />
        </div> 
      </Router>
    );
  }
}

export default App;
