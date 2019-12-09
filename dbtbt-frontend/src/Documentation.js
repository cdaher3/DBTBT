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
            <h1 className="font-weight-light text-white">How it Works</h1>
          </div>
        </header>
        <MDBCol>
          <MDBCard className="Use">
            <MDBCardBody>
              <h3 className="use"> Use the search bar to find the product you are interested in</h3>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="Once">
            <MDBCardBody>
              <h3 className="once">Once you find the product, we give you an option of clicking "Don't Buy That" or "Buy This"</h3>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="Don't">
            <MDBCardBody>
              <h3 className="dont">If you click on "Don't buy that", it directs you to that amazon product </h3>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="Do">
            <MDBCardBody>
              <h3 className="do">If you click on "Buy This", we suggest a stock within that same price range to buy</h3>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="Pick">
            <MDBCardBody>
              <h3 className="pick">Pick the better investment</h3>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}