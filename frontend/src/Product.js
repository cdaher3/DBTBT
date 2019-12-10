import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
            error: false,
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
        // if(this.state.data[0].Price > 0){
        //     this.setState({ display: true });
        // }
        // else{
        //     this.setState({ error: true });
        // }
        this.setState({ display: true });
    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        console.log("state!", this.state);
        if (!this.state.display) {
            return (
                <div>
                    <header className="bg-primary text-center py-5 mb-4" >
                        <div className="container">
                            <h1 className="font-weight-light text-white">Buy That Stock!</h1>
                        </div>
                    </header>
                </div>
            )
        }
        return (
            <Router>
                <div>
                    <header className="light-blue accent-4 text-center py-5 mb-4" >
                        <div className="container">
                            <h1 className="font-weight-light text-white">Buy That Stock!</h1>
                        </div>
                    </header>
                    <MDBRow className="productButtons">
                        <MDBBtn color="blue" onClick={this.goBack}>Back</MDBBtn>
                        <MDBBtn color="blue" href="/">New Search</MDBBtn>
                    </MDBRow>
                    <MDBAnimation type="fadeIn" className="mappedResults">
                        {this.state.data.map((item, index) => (
                            <div className="results" key={index}>
                                <MDBCol>
                                    <MDBCard className="stockCard">
                                        <MDBCardBody>
                                            <h3>{item.Ticker_symbol} - {item.Official_name}</h3>
                                            <h4 className="price">
                                                Price: ${item.Price}
                                            </h4>
                                            <MDBCardText className="stockPara">
                                                Instead, buy {item.Official_name}'s stock for only ${item.Price} per share!
                                        </MDBCardText>
                                            <MDBBtn color="blue" target="_blank" href={`https://www.marketwatch.com/investing/stock/${item.Ticker_symbol}`}>More Info</MDBBtn>
                                            <MDBBtn color="blue" target="_blank" href={`https://eresearch.fidelity.com/eresearch/evaluate/snapshot.jhtml?symbols=${item.Ticker_symbol}`}>Buy Now</MDBBtn>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </div>
                        ))}
                    </MDBAnimation>
                </div>

            </Router>
        );
    }
}