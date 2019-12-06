import React, { Component } from "react";
import "./About.css";
import Search from "./Search";
import NavbarPage from "./NavbarPage";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Yannis from "./IMG_0865.jpg"
import Christian from "./IMG_0870.jpg"
import Matthew from "./IMG_0871.jpg"
import Bhogesh from "./IMG_0873.jpg"

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
      <header class="bg-primary text-center py-5 mb-4">
      <div class="container">
        <h1 class="font-weight-light text-white">The Team</h1>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-xl-3 col-md-8 mb-4">
          <div class="card border-0 shadow">
          <img src={Christian} alt="Chris" width = "255" height = "300"></img>
            <div class="card-body text-center">
              <h5 class="card-title mb-10">Christian Daher</h5>
              <div class="card-text text-black-50"> Director of Special Projects</div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-0 shadow">
          <img src={Yannis} alt="Yannis"  width = "255" height = "300"></img>
            <div class="card-body text-center">
              <h5 class="card-title mb-10">Yannis Lam</h5>
              <div class="card-text text-black-50"> Developer</div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-0 shadow">
          <img src={Bhogesh} alt="Bhogesh"  width = "255" height = "300"></img>
            <div class="card-body text-center">
              <h5 class="card-title mb-10">Bhogesh Maddirala</h5>
              <div class="card-text text-black-50"> Developer</div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-md-6 mb-4">
          <div class="card border-0 shadow">
          <img src={Matthew} alt="Matthew"  width = "255" height = "300"></img>
            <div class="card-body text-center">
              <h5 class="card-title mb-10">Matthew Lehouillier</h5>
              <div class="card-text text-black-50">Developer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}
