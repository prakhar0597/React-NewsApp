import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    Card, CardDeck, Container, Row, Col, Badge
} from 'react-bootstrap';
import Share from "./share"
import { badgeSourceColor } from "./color"
import { badgeSectionColor } from "./color"

class smallExample extends Component {

    state = {
        redirect: false
    }

    getBadge() {
        if (this.props.section.length >= 16) {

            return (
                <Badge style={{ whiteSpace: "normal", color: badgeSectionColor.Section[this.props.section.toLowerCase()] || badgeSectionColor.Section['health'], backgroundColor: badgeSourceColor.Source[this.props.section.toLowerCase()] || badgeSourceColor.Source['health'] }}>{this.props.section.toUpperCase()}</Badge>
            )
        }
        else {
            return (
                <Badge style={{color: badgeSectionColor.Section[this.props.section.toLowerCase()] || badgeSectionColor.Section['health'], backgroundColor: badgeSourceColor.Source[this.props.section.toLowerCase()] || badgeSourceColor.Source['health'] }}>{this.props.section.toUpperCase()}</Badge>
            )
        }
    }

    handleEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    handleClick = () => {
        //alert("yes");
        this.setState({
            redirect: true
        })
    }

    renderRedirect = (val) => {
        if (this.state.redirect) {
            //alert(id);
            return <Redirect push to={{ pathname: "/article", search: "?id=" + val.id }} />
        }
    }


    render() {
        return (
            <div>
                {this.renderRedirect(this.props)}
                <Col>
                    <Card style={{ margin: "2%", cursor: "pointer", boxShadow:"-3px 3px 3px lightgrey, 3px 3px 3px lightgrey" }} onClick={() => this.handleClick()} fluid>
                        {/* {console.log(this.props.image_url)} */}
                        <Card.Body>
                            <Card.Title style={{fontStyle: "italic"}}>{this.props.title}<span onClick={this.handleEvent}><span style={{paddingLeft:"2%"}}><Share title={this.props.title} id={this.props.url} /></span></span></Card.Title>
                            <Row><Col style={{marginBottom:"3%"}}><Card style={{ padding: "2%", padding: "0px" }}><Card.Img variant="top" src={this.props.image_url} style={{ padding: "1%" }} /></Card></Col></Row>
                            <Card.Text style={{ display: "flex" }}>
                                <div style={{ width: "100%", fontStyle: "italic"}}>{this.props.date.substring(0, 10)}</div>
                                <span style={{ float: "right"}}>
                                    {this.getBadge()}
                                    {/* <Badge style={{ whiteSpace:"normal", color: badgeSectionColor.Section[this.props.section.toLowerCase()] || badgeSectionColor.Section['health'], backgroundColor: badgeSourceColor.Source[this.props.section.toLowerCase()] || badgeSourceColor.Source['health'] }}>{this.props.section.toUpperCase()}</Badge> */}
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
            </div>
        );
    }
};

export default smallExample;