import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { IoMdShare } from 'react-icons/io';
import Shareic from './share-icons';
import Modal from 'react-bootstrap/Modal';
import {Row, Container} from 'react-bootstrap'
import { FacebookShareButton, TwitterShareButton, EmailShareButton, FacebookIcon, TwitterIcon, EmailIcon } from 'react-share'


function ShareExample(props) {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    if(props.source)
    {
    return (
        <>
            <span>
                <IoMdShare onClick={handleShow} />
            </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Container><Row><Modal.Title style={{fontWeight:"700"}}>{props.source.toUpperCase()}</Modal.Title></Row>
                    <Row><Modal.Title style={{fontSize:"20px"}}>{props.title}</Modal.Title></Row></Container>
                </Modal.Header>
                <Modal.Body><Shareic id={props.id} /></Modal.Body>

            </Modal>
        </>
    );
    }
    else{
    return (
        <>
            <span>
                <IoMdShare onClick={handleShow} />
            </span>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontSize:"20px"}}>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body><Shareic id={props.id} /></Modal.Body>

            </Modal>
        </>
    );
    }
}

export default ShareExample

// class shareExample extends Component {
//     state = { show: false };

//     showModal = () => {
//         this.setState({ show: true });
//     };

//     hideModal = () => {
//         this.setState({ show: false });
//     };

//     render() {
//         return (
//             <span>
//                 <IoMdShare onClick={this.showModal} />
//                 <Shareic />
//                 <Modal show={this.state.show} handleClose={this.hideModal} >
//                     <Shareic />
//                 </Modal>
//             </span>
//         );
//     }
// }

// const Modal = ({ handleClose, show, children }) => {
//     const showHideClassName = show ? 'display-block' : 'display-none';

//     return (
//         <div className={showHideClassName}>
//             <section className='modal-main'>
//                 {children}
//                 <button onClick={handleClose}>Close</button>
//             </section>
//         </div>
//     )
// }


// const container = document.createElement('div');
// document.body.appendChild(container);
// ReactDOM.render(<shareExample />, container);