import React, { Component } from "react";
import "./About.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Yannis from "./images/AST00346.jpg"
import Christian from "./images/AST00340.jpg"
import Matthew from "./images/AST00338.jpg"
import Bhogesh from "./images/AST00345.jpg"

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
      <header className="bg-primary text-center py-5 mb-4">
      <div className="container">
        <h1 className="font-weight-light text-white">The Team</h1>
      </div>
    </header>
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-md-8 mb-4">
          <div className="card border-0 shadow">
          <img src={Christian} alt="Chris" width = "255" height = "300"></img>
            <div className="card-body text-center">
              <h5 className="card-title mb-10">Christian Daher</h5>
              <div className="card-text text-black-50"> Developer</div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
          <img src={Yannis} alt="Yannis"  width = "255" height = "300"></img>
            <div className="card-body text-center">
              <h5 className="card-title mb-10">Yannis Lam</h5>
              <div className="card-text text-black-50"> Developer</div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
          <img src={Bhogesh} alt="Bhogesh"  width = "255" height = "300"></img>
            <div className="card-body text-center">
              <h5 className="card-title mb-10">Bhogesh Maddirala</h5>
              <div className="card-text text-black-50"> Developer</div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-0 shadow">
          <img src={Matthew} alt="Matthew"  width = "255" height = "300"></img>
            <div className="card-body text-center">
              <h5 className="card-title mb-10">Matthew Lehoullier</h5>
              <div className="card-text text-black-50">Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}
