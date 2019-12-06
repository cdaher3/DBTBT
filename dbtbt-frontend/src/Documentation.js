import React, { Component } from "react";
import "./Documentation.css";
import Search from "./Search";
import NavbarPage from "./NavbarPage";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

export default class Documentation extends Component {
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
            <h2> Mission Statement</h2>
            </div>
        );
        }
}