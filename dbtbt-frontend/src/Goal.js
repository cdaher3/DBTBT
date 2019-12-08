import React, { Component } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {
  MDBAnimation,
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

export default class Documentation extends Component {
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
        <header className="light-blue accent-4 text-center py-5 mb-4" >
          <div className="container">
            <h1 className="font-weight-light text-white">Mission Statement</h1>
          </div>
        </header>
        <MDBCol>
          <MDBCard className="missionCard">
            <MDBCardBody>
              <h3 className="mission"><i>To help people make better financial decisions, and invest in their future</i></h3>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}