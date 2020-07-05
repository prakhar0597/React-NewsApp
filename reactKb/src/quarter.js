import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import {
    Card, CardDeck, Container, Row, Col, Badge
} from 'react-bootstrap';
import Share from "./share"
import { badgeSourceColor } from "./color"
import { badgeSectionColor } from "./color"
import { MdDelete } from 'react-icons/md'

import {toast } from 'react-toastify';

class QuarterExample extends Component {

    constructor() {
        super();
        this.handleDelete = this.handleDelete.bind(this);
    }

    state = {
        redirect: false
    }

    getBadge() {
        if (this.props.section.length >= 8) {

            return (
                <Badge style={{ whiteSpace:"normal", color: badgeSectionColor.Section[this.props.section.toLowerCase()] || badgeSectionColor.Section['health'], backgroundColor: badgeSourceColor.Source[this.props.section.toLowerCase()] || badgeSourceColor.Source['health'] }}>{this.props.section.toUpperCase()}</Badge>
            )
        }
        else {
            return (
                <Badge style={{ color: badgeSectionColor.Section[this.props.section.toLowerCase()] || badgeSectionColor.Section['health'], backgroundColor: badgeSourceColor.Source[this.props.section.toLowerCase()] || badgeSourceColor.Source['health'] }}>{this.props.section.toUpperCase()}</Badge>
            )
        }
    }

    handleDelete = (card_id) => {
        this.props.deleteCard(card_id);
        toast("Removing " + this.props.title, {
            position: toast.POSITION.TOP_CENTER,
            hideProgressBar: true,
            autoClose: 2000
        });
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

                        <Card.Body>
                            <Card.Title style={{fontStyle: "italic"}}>{this.props.title}<span onClick={this.handleEvent}><span style={{paddingLeft:"2%"}}><Share title={this.props.title} source={this.props.source} id={this.props.url} /><MdDelete onClick={() => this.handleDelete(this.props.id)} /></span></span></Card.Title>
                            <Row><Col style={{marginBottom:"3%"}}><Card style={{ padding: "2%", padding: "0px" }}><Card.Img variant="top" src={this.props.image_url} style={{padding:"1%"}}/></Card></Col></Row>
                            <Card.Text style={{display:"flex"}}>
                                <div style={{width:"100%"}}>
                                <span style={{fontStyle: "italic"}}>{this.props.date.substring(0, 10)}</span>
                                </div>
                                <span style={{display:"flex"}}>
                                    <span style={{marginRight:"3%"}}>
                                    {this.getBadge()}
                                    </span>
                                    {/* <Badge style={{ color: badgeSectionColor.Section[this.props.section.toLowerCase()] || badgeSectionColor.Section['health'], backgroundColor: badgeSourceColor.Source[this.props.section.toLowerCase()] || badgeSourceColor.Source['health'] }}>{this.props.section.toUpperCase()}</Badge> */}
                                    <span>
                                    <Badge style={{ color: badgeSectionColor.Section[this.props.source.toLowerCase()] || badgeSectionColor.Section['health'], backgroundColor: badgeSourceColor.Source[this.props.source.toLowerCase()] || badgeSourceColor.Source['health'] }}>{this.props.source.toUpperCase()}</Badge>
                                    </span>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </Col>
                
            </div>
        );
    }
};

export default QuarterExample;





// import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import Share from './share';
// import { MdDelete } from 'react-icons/md';
// import {
//     Card, CardDeck, Container, Row, Col
// } from 'react-bootstrap';
// // , CardImg, CardText, CardBody, CardLink,
// //     CardTitle, CardSubtitle
// class QuarterExample extends Component {

//     constructor(){
//         super();
//         this.handleDelete = this.handleDelete.bind(this);
//     }

//     state = {
//         redirect: false
//     }

//     handleDelete = (card_id) => {
//         this.props.deleteCard(card_id);
//     }

//     handleClick = () => {
//         //alert("yes");
//         this.setState({
//             redirect: true
//         })
//     }

//     renderRedirect = (val) => {
//         if (this.state.redirect) {
//             //alert(id);
//             return <Redirect push to={{ pathname: "/article", search: "?id=" + val.id }} />
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <br/>
//                 {this.renderRedirect(this.props)}
//             <Col>


//                 <Card>
//                 {/* onClick={() => this.handleClick()}> */}
//                     <Container fluid>
//                         <Row>
//                             <Col><Card><Row><Col><Card.Body style={{ padding: "4px" }}><Card.Img variant="top" src={this.props.image_url} style={{ width: "100%", height: "100%" }} /></Card.Body></Col></Row></Card></Col>
//                             <Col>
//                                 <Card.Body>
//                                     <Card.Title>{this.props.title}<Share /><MdDelete onClick={() => this.handleDelete(this.props.id)}/></Card.Title>
//                                     <Card.Text>
//                                         {this.props.description}
//                                     </Card.Text>
//                                     <Card.Text>
//                                         {this.props.date}
//                                         <span style={{ float: "right", backgroundColor: "purple", color: "white" }}>
//                                             {this.props.section}
//                                         </span>
//                                     </Card.Text>
//                                     <Card.Text>
//                                         &nbsp;
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Col>
//                         </Row>

//                     </Container>

//                 </Card>


//             </Col>
//             </div>
//         );
//     }
// };

// export default QuarterExample;