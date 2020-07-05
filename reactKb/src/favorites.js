import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Quarter from "./quarter"
import {
    Card, CardDeck, Container, Row, Col
} from 'react-bootstrap';

var data;
var newzComponent;

class favoritesExample extends Component {

    del = (val_id) => {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        for (var i = 0; i < bookmarks.length; i++) {
            if (bookmarks[i].id === val_id) {
                bookmarks.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        this.componentDidMount();

    }

    componentDidMount() {
        this.props.temp(false);
        this.props.temp2(true);
    }

    render() {

        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        if (localStorage.getItem('bookmarks') !== null) {
            data = bookmarks;
            // console.log(data);
            newzComponent = data.map(newz => <Quarter deleteCard={this.del} key={newz.id} url={newz.url} id={newz.id} source={newz.source} title={newz.title} date={newz.date} section={newz.section} image_url={newz.image_url} />)
        }

        if (localStorage.getItem('bookmarks') === null || bookmarks.length === 0) {
            return (
                <div style={{marginTop:"0.5%"}}>
                    <p style={{textAlign:"center", fontSize:"20px", fontWeight:"500"}}>
                    You have no saved articles
                    </p>
                </div>
            )
        }
        else {
            return (

                <Container fluid>
                    <h4 style={{marginTop: "8px", marginLeft: "5px"}}>Favorites</h4>
                    <Row md={3} xl={4}>
                        {newzComponent}
                    </Row>
                </Container>
            )
        }
    }
}

export default favoritesExample;