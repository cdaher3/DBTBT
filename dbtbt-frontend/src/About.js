import React, { Component } from "react";
import "./App.css";
import Search from "./Search";
import NavbarPage from "./NavbarPage";
// import Form from './form';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class About extends Component {
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
        {/* <NavbarPage /> */}
        <h1> About</h1>
        <h4></h4>
      </div>
    );
  }
}
