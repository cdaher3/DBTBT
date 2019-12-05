import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Submit from "./Submit";
import NavbarPage from "./NavbarPage";
import SearchResults from "./SearchResults";
// import fruit from "./fruit";
// import Form from './form';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import carpet from "./carpet.json";

class App extends Component{

  state = {
    characters: []
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render(){
    // console.log(this.state);
    // console.log(this.state.characters);
    // console.log(carpet);
  return (
    <div>
      <NavbarPage/>
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
