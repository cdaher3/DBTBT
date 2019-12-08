import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import {
  MDBInput,
  MDBFormInline,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
  MDBListGroup,
  MDBListGroupItem
} from "mdbreact";
import "./Search.css";
import logo from "./images/dbtbtlogo.png";
import SearchResults from "./SearchResults";
import carpet from "./carpet.json";

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      submit: "",
      redirect: false,
    };
    this.state = this.initialState;
  }

  query = async (q) => {
    console.log("queried!");
    console.log(q);
    await fetch(q)
      .then(response => response.json())
      .then(data => {
        console.log("data", data)
        this.setState({ data })
        this.launch(data)
      });
  }

  onFormSubmit = event => {
    event.preventDefault();
    // this.props.handleSubmit(this.state);
    // this.setState(this.initialState);
    console.log("clicked search");
    this.query(this.state.query);
    if (this.state.submit != "") {
      this.setState({
        redirect: true,
      });
    }
  };

  handleChange = event => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  click = event => {
    let { name, value } = event.target;
    this.setState(this.initialState);
  };

  render() {
    console.log("state", this.state)
    let { submit, query, data } = this.state;
    if (this.state.redirect) {
      return (<Redirect to={`/search/${this.state.submit}`} />)
    }
    else {
      return (
        <Router>
          <div>
            <h1> Don't Buy This, Buy That!</h1>
            <h2> <img src={logo} alt="DBTBT Logo"></img></h2>
            <div className="active-orange-4 active-blue-3 mb-3">
              <form onSubmit={this.onFormSubmit}>
                <input
                  className="form-control"
                  type="text"
                  name="submit"
                  value={submit}
                  placeholder="Search"
                  initialValue=""
                  onChange={this.handleChange}
                />
                <div className="buttons">
                  <MDBRow>
                    <MDBBtn color="blue" type="reset" onClick={this.click}>Clear</MDBBtn>
                    <MDBBtn color="blue" type="submit">
                      Search
                    </MDBBtn>
                  </MDBRow>
                </div>
              </form>
              <div className="results">
              </div>
            </div >
          </div >
        </Router>
      );
    }
  }
}
