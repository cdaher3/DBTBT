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
                // {
                //     "asin": "",
                //     "discounted": null,
                //     "sponsored": null,
                //     "reviews": 0,
                //     "rating": 0,
                //     "score": "",
                //     "savings": 0,
                //     "price": "",
                //     "title": ""
                // },
            ],
            display: false,
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;
        let newQuery = "http://dbtbt.com:3001/search/" + id;
        console.log(newQuery);
        await fetch(newQuery)
            .then(response => response.json())
            .then((data) => {
                console.log("data", data)
                this.setState(() => ({ data }))
            });
        this.setState({ display: true });
    }

    render() {
        console.log("state!", this.state);
        if (!this.state.display) {
            return (
                <div>
                    {/* <Submit/> */}
                    <h1> Don't Buy This, Buy That!</h1>
                    <h2>Search Results</h2>
                </div>
            )
        }
        return (
            <Router>
                <div>
                    <h1> Don't Buy This, Buy That!</h1>
                    <h2>Search Results</h2>
                    {this.state.id}
                    {this.state.data.map((item, index, link) => (
                        //   <div>
                        //     <span>ASIN: {item.asin}, </span>
                        //     <span>Discounted: {item.discounted}, </span>
                        //     <span>Sponsored: {item.sponsored}, </span>
                        //     <span>Reviews: {item.reviews}, </span>
                        //     <span>Rating: {item.rating}, </span>
                        //     <span>Score: {item.score}, </span>
                        //     <span>Savings: {item.savings}, </span>
                        //     <span>Price: {item.price}, </span>
                        //     <span>Title: {item.title}</span>
                        //   </div>
                        <div className="results" key={index}>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardBody>
                                        <h3>{item.title}</h3>
                                        <MDBCardText>
                                            Price: {item.price}
                                        </MDBCardText>
                                        <MDBCardText>
                                            <span>Rating: {item.rating} </span>
                                        </MDBCardText>
                                        <MDBCardText>
                                            <span>Reviews: {item.reviews} </span>
                                        </MDBCardText>
                                        <MDBBtn color="blue" href={`http://www.amazon.com/dp/${item.asin}`}>Buy</MDBBtn>
                                        <MDBBtn color="blue" href={`${item.asin}`}>Don't Buy</MDBBtn>
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