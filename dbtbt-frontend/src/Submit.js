import React, { Component } from "react";
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
import DocsLink from "./components/docsLink";
import SectionContainer from "./components/sectionContainer";
import "./Search.css";
import NavbarPage from "./NavbarPage";
import logo from "./images/dbtbtlogo.png";
import SearchResults from "./SearchResults";
import carpet from "./carpet.json";

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      submit: "",
      query: "",
      data: [{}],
    };
    this.state = this.initialState;
  }

  launch = (l) => {
    console.log("launched!")
    // <SearchResults comp={this.state.data}/>
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
        // <SearchResults comp={data}/>
      });
  }

  onFormSubmit = event => {
    event.preventDefault();
    // this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    console.log("clicked search");
    // console.log("state");
    // console.log(this.state);
    this.query(this.state.query);
  };

  handleChange = event => {
    let { name, value } = event.target;
    // console.log(event);
    // console.log(event.target);
    // console.log(name);
    // console.log(value);
    let newQuery = "http://dbtbt.com:3001/search/" + value;
    this.setState({
      [name]: value,
      "query": newQuery,
    });
  };

  render() {
    let { submit, query, data } = this.state;
    console.log("submit state", this.state);
    console.log("submit data", this.state.data);
    return (
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
              onChange={this.handleChange}
            />
            <div className="buttons">
              <MDBRow>
                <MDBBtn color="blue">Clear</MDBBtn>
                <MDBBtn color="blue" type="submit">
                  Search
                </MDBBtn>
              </MDBRow>
            </div>
          </form>
          <div className="results">
            {query} 
          </div>
        </div >
      </div >
    );
  }
}
