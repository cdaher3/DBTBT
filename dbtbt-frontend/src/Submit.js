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
      name: ""
    };

    this.state = this.initialState;
  }

  onFormSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <NavbarPage />
        <h1> Don't Buy That, Buy This! (Submit Version)</h1>
        <h4> (Insert Logo Here)</h4>

        <div className="active-orange-4 active-blue-3 mb-3">
          <form onSubmit={this.onFormSubmit}>
            <input
              className="form-control"
              type="text"
              placeholder="Search"
              aria-label="Search"
              // value={submit}
              onChange={this.handleChange}
            />
            <div className="buttons">
              <MDBRow>
                <MDBBtn color="blue">Reset</MDBBtn>
                <MDBBtn color="blue" type="submit">
                  Search
                </MDBBtn>
              </MDBRow>
            </div>
          </form>

          <form onSubmit={this.onFormSubmit}>
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Search"
              onChange={this.handleChange}
            />
            <MDBBtn color="blue" type="submit">
              Submit
            </MDBBtn>
          </form>

          <div className="results">
            {/* {
            this.state.items.map(function (item) {
              return <div key={item}>{item}</div>
            })
          } */}
          </div>
        </div>
      </div>
    );
    console.log(this.state);
  }
}
