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
  MDBListGroupItem,
  MDBCard, 
  MDBCardBody, 
  MDBCardImage, 
  MDBCardTitle, 
  MDBCardText 
} from "mdbreact";
import DocsLink from "./components/docsLink";
import SectionContainer from "./components/sectionContainer";
import "./Search.css";
import NavbarPage from "./NavbarPage";
import Carpet from "./carpet.json";

export default class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount = () => {
    this.setState({
      data: this.props.content
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <NavbarPage />
        <h1> Don't Buy That, Buy This!</h1>
        <h2>(Search Results Page)</h2>
        <h4> (Insert Logo Here)</h4>
        <MDBCol>
          <MDBCard style={{ width: "22rem" }}>
            <MDBCardImage
              className="img-fluid"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              waves
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card&apos;s content.
              </MDBCardText>
              <MDBBtn href="#">MDBBtn</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        {/* {carpet.map((item, index)) => {
                    return <h1>{item[index].asin}</h1>
                }
                } */}
        {this.state.data.map((item, index) => (
          <div>
            <span>ASIN: {item.asin}, </span>
            <span>Discounted: {item.discounted}, </span>
            <span>Sponsored: {item.sponsored}, </span>
            <span>Reviews: {item.reviews}, </span>
            <span>Rating: {item.rating}, </span>
            <span>Score: {item.score}, </span>
            <span>Savings: {item.savings}, </span>
            <span>Price: {item.price}, </span>
            <span>Title: {item.title}</span>
          </div>
        ))}
      </div>
    );
  }
}
