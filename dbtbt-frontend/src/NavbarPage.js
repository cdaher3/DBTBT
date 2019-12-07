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
import SearchResults from "./SearchResults";

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
                <MDBNavLink to="/documentation">Documentation</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to = "/about"> About</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="github" />
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <Switch>
          <Route path="/" exact component={Submit}/>
          <Route path="/documentation" exact component={Documentation} />
          <Route path="/docs" exact component={Documentation} />
          <Route path="/about" exact component={About} />
          <Route path="/search" component={SearchResults}/>
        </Switch>
      </Router>
    );
  }
}