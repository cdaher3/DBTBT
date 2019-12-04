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

export default class Submit extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      submit: "",
      query: "",
    };
    this.state = this.initialState;
  }
  
  query = (q) => {
    console.log("queried!");
    console.log(q);
    console.log(fetch(q));
    
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
    console.log("clicked search");
    console.log("state");
    console.log(this.state);
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
    let { submit, query } = this.state;
    return (
      <div>
        <NavbarPage />
        <h1> Don't Buy That, Buy This!</h1>
        <h2>(Submit Version)</h2>
        <h4> (Insert Logo Here)</h4>
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
            {/* {
            this.state.items.map(function (item) {
              return <div key={item}>{item}</div>
            })
          } */}
            {query}
          </div>
        </div>
      </div>
    );
  }
}
