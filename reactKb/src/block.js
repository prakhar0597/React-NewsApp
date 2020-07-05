import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Share from './share';
import {
    Card, CardDeck, Container, Row, Col, Badge
} from 'react-bootstrap';
import TextTruncate from 'react-text-truncate';
import {badgeSourceColor} from "./color"
import {badgeSectionColor} from "./color"


class BlockExample extends Component {

    constructor() {
        super();
        this.state = {
            redirect: false
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }


    handleClick = (event) => {
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
                <br />

                <Card style={{ width: "96%", cursor: "pointer", margin: "auto", boxShadow:"-3px 3px 3px lightgrey, 3px 3px 3px lightgrey" }} onClick={(event) => this.handleClick(event)}>
                    <Container fluid>
                        <Row>
                            <Col style={{ margin: "2%", padding: "0px" }}><Card><Row><Col><Card.Body style={{ padding: "4px" }}><Card.Img variant="top" src={this.props.image_url} style={{ width: "100%", height: "100%" }} /></Card.Body></Col></Row></Card></Col>
                            <Col xs={12} lg={9} style={{ padding: "0px" }}>
                                <Card.Body>
                                    <Card.Title style={{fontStyle: "italic"}}>{this.props.title}<span onClick={this.handleEvent}><Share title={this.props.title} id={this.props.url} /></span></Card.Title>
                                    <Card.Text style={{textAlign: 'justify'}}>
                                        <TextTruncate
                                            line={3}
                                            element="span"
                                            truncateText="…"
                                            text={this.props.description}
                                        />
                                        
                                    </Card.Text>
                                    <Card.Text>
                                        <span style={{fontStyle: "italic"}}>{this.props.date.substring(0,10)}</span>
                                        <span style={{ float: "right"}}>
                                            <Badge style={{color: badgeSectionColor.Section[this.props.section.toLowerCase()] || badgeSectionColor.Section['health'], backgroundColor: badgeSourceColor.Source[this.props.section.toLowerCase()] ||  badgeSourceColor.Source['health'] }}>{this.props.section.toUpperCase()}</Badge>
                                        </span>
                                    </Card.Text>
                                    <Card.Text>
                                        &nbsp;
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>

                    </Container>

                </Card>

                <br />

            </div>
        );
    }
};

export default BlockExample;