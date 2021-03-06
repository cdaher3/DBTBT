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
    MDBCardText,
    MDBCardGroup
} from "mdbreact";
import "./Search.css";
import Submit from "./Submit";

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: [],
            display: false,
            stockQ: "",
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

    findStock = async () => {
        {
            this.state.data.map((item) => (
                // console.log("item " + index, item.asin, item.price)
                fetch(`http://dbtbt.com:3001/query/price=${item.price}`)
                    .then(response => {
                        // console.log("response", response)
                        response.json()
                    }
                    )
                    .then((data) => {
                        console.log("data", data)
                        // this.setState(() => ({ stockQ : data }))
                    })
            ))
        }
    }

    render() {
        this.findStock()
        console.log("state!", this.state);
        if (!this.state.display) {
            return (
                <div>
                    <header className="light-blue accent-4 text-center py-5 mb-4" >
                        <div className="container">
                            <h1 className="font-weight-light text-white">Don't Buy This, Amazon Item</h1>
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
                            <h1 className="font-weight-light text-white">Don't Buy This, Amazon Item</h1>
                        </div>
                    </header>
                    <MDBAnimation type="fadeInUp" className="mappedResults">

                        <MDBRow className="newSearch">
                            <MDBBtn color="blue" href="/">New Search</MDBBtn>
                        </MDBRow>
                        {this.state.id}
                        {this.state.data.map((item, index, link) => (
                            <div className="results" key={index}>
                                <MDBCol>
                                    <MDBCardGroup deck className='mt-3'>
                                        <MDBCard>
                                            {/* <div>
                                                <MDBCardImage className="img-fluid cardImage" src={item.thumbnail} waves hover overlay='white-slight' />
                                            </div> */}
                                            <div>
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

                                                    <MDBRow className="resultButtons">
                                                        <MDBBtn color="blue" href={`http://www.amazon.com/dp/${item.asin}`}>Don't Buy This</MDBBtn>
                                                        <MDBBtn color="blue" href={`/product/${item.price}`}>Buy That</MDBBtn>
                                                    </MDBRow>
                                                </MDBCardBody>
                                            </div>
                                        </MDBCard>
                                    </MDBCardGroup>
                                </MDBCol>
                            </div>
                        ))}
                    </MDBAnimation>
                </div>
            </Router>
        );
    }
}