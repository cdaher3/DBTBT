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
  }

  render() {
    return (
      <div>
        <header className="light-blue accent-4 text-center py-5 mb-4" >
          <div className="container">
            <h1 className="font-weight-light text-white">Documentation</h1>
          </div>
        </header>
        <MDBCol>
          <MDBCard className="docsCard">
            <MDBCardBody>
              <h3 className="docs">(Insert Documentation)</h3>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}