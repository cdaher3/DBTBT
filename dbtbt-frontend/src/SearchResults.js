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
import logo from "./dbtbtlogo.png";

export default class SearchResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            stock: null,
        };
    }

    componentWillMount = () => {
        this.setState({
            data: this.props.comp,
            stock: this.props.stock
        });
    };

    render() {
        console.log(this.state);
        return (
            <div>
                {/* <h1> Don't Buy This, Buy That!</h1> */}
                <h2>Search Results</h2>
                {/* {carpet.map((item, index)) => {
                    return <h1>{item[index].asin}</h1>
                }
                } */}
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
                                        {/* <div><a href={link}> ASIN: {item.asin},</a></div> */}
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
                ))}

            </div>
        );
    }
}