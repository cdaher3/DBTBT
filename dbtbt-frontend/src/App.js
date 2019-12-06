import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Submit from "./Submit";
import NavbarPage from "./NavbarPage";
import SearchResults from "./SearchResults";
import About from './About';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import carpet from "./carpet.json";

class App extends Component {

  // state = {
  //   characters: []
  // };

  // handleSubmit = character => {
  //   this.setState({ characters: [...this.state.characters, character] });
  // };

  render() {
    console.log("app state", this.state);
    // console.log(this.state.characters);
    // console.log(carpet);
    return (
      <div>
        <NavbarPage />
        {/* <Submit handleSubmit={this.handleSubmit} /> */}

        {/* <Main /> */}
        {/* <Search content={searchInput} /> */}
        {/* <Submit handleSubmit={this.handleSubmit} /> */}
        {/* <Submit /> */}
        {/* <HomePage /> */}

        {/* <SearchResults comp={carpet}/> */}
      </div>
    );
  }
}

export default App;
