import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
  MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import App from './App';
import Submit from './Submit';
import About from './About';
import Documentation from './Documentation';
import Goal from "./Goal";
import SearchResults from "./SearchResults";
import Product from "./Product";
import Error4 from "./Error";
import logo from "./images/dbtbtlogo.png";


export default class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <Router>
        <MDBNavbar color="orange darken-4" dark expand="md">
          <MDBNavbarBrand>
            <strong className="white-text" href="#!">DBTBT</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem >
                <MDBNavLink to={`/`}>Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/goal">Goal</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/documentation">How It Works</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/about"> About</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <a href="https://github.com/cdaher3/DBTBT"> GitHub</a>
              </MDBNavItem>
              <MDBNavItem>
                {/* <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink> */}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <Switch>
          <Route path="/" exact component={Submit}/>
          <Route path = "/goal" exact component = {Goal}/>
          <Route path="/documentation" exact component={Documentation} />
          <Route path="/docs" exact component={Documentation} />
          <Route path="/about" exact component={About} />
          <Route path="/search/:id" exact component={SearchResults} />
          <Route path="/product/:id" component={Product} />
          <Route path="/error" exact component={Error4} />
        </Switch>
      </Router>

    );
  }
}
