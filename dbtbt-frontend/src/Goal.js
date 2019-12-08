import React, { Component } from "react";
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
            <h1> <u>Mission Statement</u></h1>
            <h4><i>To help people make better financial decisions, and invest in their future</i></h4>
            </div>
        );
        }
}