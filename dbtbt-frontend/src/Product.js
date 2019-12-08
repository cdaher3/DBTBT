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

export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: [
            ],
            display: false,
        };
        this.goBack = this.goBack.bind(this);
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        let newQuery = "http://dbtbt.com:3001/query/price=" + id;
        console.log(newQuery);
        await fetch(newQuery)
            .then(response => response.json())
            .then((data) => {
                console.log("data", data)
                this.setState(() => ({ data }))
            });
        this.setState({ display: true });
    }

    goBack(){
        this.props.history.goBack();
    }

    render() {
        console.log("state!", this.state);
        if (!this.state.display) {
            return (
                <div>
                    <h1> Buy That Stock!</h1>
                </div>
            )
        }
        return (
            <Router>
                <div>
                    <h1>Buy That Stock!</h1>
                    <MDBRow className="productButtons">
                    <MDBBtn color="blue" onClick={this.goBack}>Back</MDBBtn>
                    <MDBBtn color="blue" href="/">New Search</MDBBtn>
                    </MDBRow>
                    
                    {this.state.data.map((item, index) => (
                        <div className="results" key={index}>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardBody>
                                        <h3>{item.Ticker_symbol}</h3>
                                        <MDBCardText>
                                            Price: {item.Price}
                                        </MDBCardText>
                                        <MDBCardText>
                                            <span>Name: {item.Official_name} </span>
                                        </MDBCardText>
                                        <MDBBtn color="blue" target="_blank" href={`https://www.marketwatch.com/investing/stock/${item.Ticker_symbol}`}>More Info</MDBBtn>
                                        <MDBBtn color="blue" target="_blank" href={`https://eresearch.fidelity.com/eresearch/evaluate/snapshot.jhtml?symbols=${item.Ticker_symbol}`}>Buy Now</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
                    ))}
                </div>
            </Router>
        );
    }
}