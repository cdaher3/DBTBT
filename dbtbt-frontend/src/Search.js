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
import NavbarPage from './NavbarPage';
import logo from "./dbtbtlogo.png";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialItems: [],
      items: []
    }
  }

  filterList = (event) => {
    let items = this.state.initialItems;
    items = items.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: items });
  }

  componentWillMount = () => {
    this.setState({
      initialItems: this.props.content,
      items: this.props.content
    })
  }

  render() {
    return (
      <div>
        <NavbarPage />
        <h1> Don't Buy That, Buy This!</h1>
        <h4><img src = {logo} alt = "DBTBT Logo"></img></h4>

      <div className="active-orange-4 active-blue-3 mb-3">
        <form>
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={this.filterList} />
        </form>
        <div className="buttons">
          <MDBRow>
            <MDBBtn color="blue">Reset</MDBBtn>
            <MDBBtn color="blue">Search</MDBBtn>
          </MDBRow>
        </div>
        <div className="results">
          {
            this.state.items.map(function (item) {
              return <div key={item}>{item}</div>
            })
          }
        </div>
      </div>
      </div>
    );
  }
};
