import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import {HashRouter as Router} from 'react-router-dom'
import "./App.css";
import routes from './routes'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
