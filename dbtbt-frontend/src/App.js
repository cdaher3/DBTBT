import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import Submit from "./Submit";
import Main from "./Main";
import NavbarPage from "./NavbarPage";
// import Form from './form';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

class App extends Component{
  //temporary hardcoded search data
  // let searchInput = [
  //   "Afghanistan",
  //   "Åland Islands",
  //   "Albania",
  //   "Algeria",
  //   "John",
  //   "Mark",
  //   "Matthew",
  //   "Luke"
  // ];

  state = {
    characters: []
  };

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  render(){
    console.log(this.state);
    console.log(this.state.characters);
  return (
    <div>
      {/* <Main /> */}
      {/* <Search content={searchInput} /> */}
      <Submit handleSubmit={this.handleSubmit} />
      {/* <HomePage /> */}
      {/* <NavbarPage/> */}
    </div>
  );
  }
}

export default App;
