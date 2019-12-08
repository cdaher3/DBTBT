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
import Carpet from "./carpet.json";
import logo from "./images/dbtbtlogo.png";

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: [
                {
                    "asin": "B078FZ1734",
                    "discounted": false,
                    "sponsored": false,
                    "reviews": 719,
                    "rating": 3.9,
                    "score": "2804.10",
                    "savings": 0,
                    "price": "26.99",
                    "title": "YJ.GWL High Pile Velvet Bedroom Living Room Rug (47\" x 63\"), Extra Soft & Easy Clean Large Shaggy Area Rugs, Plush Carpet for Kids Nursery Room Decor, Green"
                },
            ],
            display: false,
        };
    }

    async componentWillMount() {
        const { id } = this.props.match.params;
        let newQuery = "http://dbtbt.com:3001/search/" + id;
        console.log(newQuery);
        await fetch(newQuery)
            .then(response => response.json())
            .then((data) => {
                console.log("data", data)
                this.setState(() => ({ data }))
              });
    }

    render() {
        console.log("state!", this.state);
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
                        link = "http://www.amazon.com/dp/" + item.asin,
                        <div className="results" key={index}>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="" waves />
                                    <MDBCardBody>
                                        <h4><a href={link}>{item.title}</a></h4>
                                        <MDBCardText>
                                            <Link to={``}><span>Rating: {item.rating}, </span></Link>
                                            <span>Rating: {item.rating}, </span>
                                            <span>Price: {item.price}, </span>
                                            <span>Reviews: {item.reviews}, </span>
                                        </MDBCardText>
                                        <MDBBtn href="#">More</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
                    ))}
{/* 
                    {this.state.stock.map((item, index, link) => (
                        <div className="results" key={index}>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardImage className="img-fluid" src="" waves />
                                    <MDBCardBody>
                                        <h4><a href={link}>{item.Price}</a></h4>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </div>
                    ))} */}

                </div>
            </Router>
        );
    }
}