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
        <header className="bg-primary text-center py-5 mb-4" >
          <div className="container">
            <h1 className="font-weight-light text-white">Mission Statement</h1>
          </div>
        </header>

        <h4><i>To help people make better financial decisions, and invest in their future</i></h4>
      </div>
    );
  }
}