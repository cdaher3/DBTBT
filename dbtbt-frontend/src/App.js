import React, { Component } from "react";
import "./Search.css";
import Search from "./Search";
import Submit from "./Submit";
import NavbarPage from "./NavbarPage";
import NavigationNavPage from "./NavigationNavPage";
import SearchResults from "./SearchResults";
import About from './About';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component {

  // state = {
  //   characters: []
  // };

  // handleSubmit = character => {
  //   this.setState({ characters: [...this.state.characters, character] });
  // };

  render() {
    console.log("app state", this.state);

    return (
      <div>
        <NavbarPage />
        {/* <NavigationNavPage/> */}
        {/* <Submit handleSubmit={this.handleSubmit} /> */}
        {/* <Search content={searchInput} /> */}
        {/* <Submit handleSubmit={this.handleSubmit} /> */}
        {/* <Submit /> */}
        {/* <HomePage /> */}

        {/* <SearchResults comp={carpet} stock={stock}/> */}
      </div>
    );
  }
}

export default App;
