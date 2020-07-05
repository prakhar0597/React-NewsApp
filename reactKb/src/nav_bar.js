import React, { Component } from 'react'
import Nav from 'react-bootstrap/nav';
import NavItem from 'react-bootstrap/nav';

import Select from 'react-select';
import Form from 'react-bootstrap/form';
import { FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/navbar';
import Keyword from './keyword';
import Switch from './switch';
import { NavLink } from 'react-router-dom'
import Bookmark from './bookmark';
import { FaBookmark } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'
//import AsyncSelect from 'react-select/async';
//import ReactBootstrapStyle from 'react-bootstrap/internal.style-links';

const scaryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
];

class Example extends Component {
    state = { checked: true }

    handleLanguage = (langValue) => {
        //console.log(langValue);
        this.props.onChange(langValue);
        this.setState({ checked: langValue });
    }
    render() {
        if (this.props.temp.switch) {
            return (
                <>
                    <Navbar bg="light" expand="lg" className="nav-bar" style={{ color: "white" }}>
                        {/* <Select options={scaryAnimals} /> */}


                        <Navbar.Brand><Keyword /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link as={NavLink} exact to="/" href="/" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Home</Nav.Link>
                                <Nav.Link as={NavLink} to="World" href="World" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>World</Nav.Link>
                                <Nav.Link as={NavLink} to="Politics" href="Politics" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Politics</Nav.Link>
                                <Nav.Link as={NavLink} to="Business" href="Business" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Business</Nav.Link>
                                <Nav.Link as={NavLink} to="Technology" href="Technology" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Technology</Nav.Link>
                                <Nav.Link as={NavLink} to="Sports" href="Sports" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Sports</Nav.Link>
                            </Nav>
                            <Nav>
                                {/* <div > */}
                                <div className="abc" style={{ display: "flex", marginLeft: "-19%", marginTop: "7%" }} >

                                    <Bookmark />


                                    <NavItem className="a" style={{ marginRight: "4%", marginLeft: "3%", color:"#d7ecf7" }}>NYTimes</NavItem>
                                    <Switch onChangeSource={this.handleLanguage} />

                                    <NavItem style={{ marginLeft: "3%", color:"#d7ecf7"}}>Guardian</NavItem>
                                </div>
                                {/* </div> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>


                </>
            )
        }
        else {
            if (this.props.temp.bookmark_color) {
                return (
                    <>
                        <Navbar bg="light" expand="lg" className="nav-bar">
                            {/* <Select options={scaryAnimals} /> */}


                            <Navbar.Brand><Keyword /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link as={NavLink} exact to="/" href="/" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Home</Nav.Link>
                                    <Nav.Link as={NavLink} to="World" href="World" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>World</Nav.Link>
                                    <Nav.Link as={NavLink} to="Politics" href="Politics" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Politics</Nav.Link>
                                    <Nav.Link as={NavLink} to="Business" href="Business" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Business</Nav.Link>
                                    <Nav.Link as={NavLink} to="Technology" href="Technology" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Technology</Nav.Link>
                                    <Nav.Link as={NavLink} to="Sports" href="Sports" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Sports</Nav.Link>
                                </Nav>
                                {/* <Bookmark /> */}
                                <span style={{ fontSize: "18px", color: "#d7ecf7" }}><FaBookmark data-tip="Bookmark" data-for='abcd' />
                                    <ReactTooltip place="bottom" type="dark" id='abcd' /></span>

                            </Navbar.Collapse>
                        </Navbar>
                    </>
                )
            }
            else {
                return (
                    <>
                        <Navbar bg="light" expand="lg" className="nav-bar">
                            {/* <Select options={scaryAnimals} /> */}


                            <Navbar.Brand><Keyword /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{color:"red"}}/>
                            <Navbar.Collapse id="basic-navbar-nav" style={{color:"red"}}>
                                <Nav className="mr-auto">
                                    <Nav.Link as={NavLink} exact to="/" href="/" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Home</Nav.Link>
                                    <Nav.Link as={NavLink} to="World" href="World" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>World</Nav.Link>
                                    <Nav.Link as={NavLink} to="Politics" href="Politics" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Politics</Nav.Link>
                                    <Nav.Link as={NavLink} to="Business" href="Business" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Business</Nav.Link>
                                    <Nav.Link as={NavLink} to="Technology" href="Technology" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Technology</Nav.Link>
                                    <Nav.Link as={NavLink} to="Sports" href="Sports" style={{ color: "#788ab2" }} activeStyle={{ color: "#d7ecf7" }}>Sports</Nav.Link>
                                </Nav>
                                <div className="abc">
                                    <Bookmark />
                                </div>
                            </Navbar.Collapse>
                        </Navbar>


                    </>
                )
            }
        }
    }
}

export default Example;