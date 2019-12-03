import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import NavbarPage from "./NavbarPage";
// import Form from './form';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: []
    };
  }

  render() {
    return (
      <div>
        <NavbarPage />
        <h1> About Us Page</h1>
        <h4> (Temporary)</h4>
      </div>
    );
  }
}
