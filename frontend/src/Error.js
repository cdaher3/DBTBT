import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
import "./Search.css";
import Submit from "./Submit";

export default class Error extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Router>
                <div>
                    <h1>404 Error. Page Does Not Exist</h1>
                </div>
            </Router>
        );
    }
}