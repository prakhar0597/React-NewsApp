import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Small from "./smallCard"
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import Spinner from "./spinner"
import { CardDeck, CardColumns, Row, Container } from 'react-bootstrap'

let data_ny;
let newzComponent_ny;
let data_g;
let newzComponent_g;

let word;
class searchExample extends Component {
    test(word) {
        //alert(url);
        axios
            .get('https://csci571-nodejs-backend.wl.r.appspot.com/search?id=' + word)
            .then((data) => {
                // console.log(data);
                if (data.data.keyword !== undefined && data.data.keyword.NY)
                    this.setState({ users_ny: data.data.keyword.NY, isLoading: false })
                if (data.data.keyword !== undefined && data.data.keyword.GUARD) {
                    // console.log(data.data.keyword.GUARD);
                    this.setState({ users_guard: data.data.keyword.GUARD, isLoading: false })
                }
            })
    }
    constructor() {
        super()

        this.state = {
            users_ny: [],
            users_guard: [],
            isLoading: true
        }

        this.test = this.test.bind(this);
    }


    componentDidMount() {
        //console.log(this.props)
        this.unlisten = this.props.history.listen((location, action) => {
            word = window.location.search.substring(3);
            this.test(word);
            this.props.temp(false);
            this.props.temp2(false);
            this.setState({isLoading:true})

        });
        word = window.location.search.substring(3);
        this.test(word);
        this.props.temp(false);
        this.props.temp2(false);

    }



    render() {

        if (this.state.isLoading === true) {
            return (
                <div className="sweet-loading">
                    <Spinner />
                </div>
            )
        }
        else {
            // if (this.state.users_ny !== undefined) {
            //     data_ny = this.state.users_ny;
            //     newzComponent_ny = data_ny.map(newz_ny => <Small key={data_ny.web_url} id={data_ny.web_url} description={data_ny.abstract} source="NYTimes" date={data_ny.pub_date} section={data_ny.news_desk} />)
            //     if (data_ny[1])
            //         console.log(data_ny[0].pub_date);
            // }

            if (this.state.users_guard !== undefined && this.state.users_guard !== null) {
                var data = this.state.users_guard;
                // console.log(data);
                var new_data = [];

                for (var i = 0; i < data.length && i < 5; i++) {

                    if (data[i].id !== undefined && data[i].id !== null && data[i].sectionId !== undefined && data[i].sectionId !== null && data[i].webPublicationDate !== undefined && data[i].webPublicationDate !== null && data[i].webTitle !== undefined && data[i].webTitle !== null && data[i].blocks !== undefined && data[i].blocks !== null && data[i].blocks.body[0] !== undefined && data[i].blocks.body[0] !== null && data[i].blocks.body[0].bodyTextSummary !== undefined && data[i].blocks.body[0].bodyTextSummary !== null) {

                        var img = data[i].blocks;
                        if (data[i].blocks.main !== undefined && data[i].blocks.main !== null && data[i].blocks.main.elements !== undefined && data[i].blocks.main.elements !== null && data[i].blocks.main.elements.length >= 0 && data[i].blocks.main.elements[0] !== undefined && data[i].blocks.main.elements[0] !== null) {
                            //console.log("b");
                            if (data[i].blocks.main.elements[0].assets !== undefined && data[i].blocks.main.elements[0].assets !== null && data[i].blocks.main.elements[0].assets.length >= 0) {
                                var img_index = data[i].blocks.main.elements[0].assets.length;
                                var dat = data[i].blocks.main.elements[0].assets[img_index - 1];
                                //console.log("a");
                                if (dat !== undefined && dat !== null && dat.file !== undefined && dat.file !== null && dat.file !== "") {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionId,
                                        image_url: dat.file,
                                        url: data[i].webUrl
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                                else {
                                    var data_value = {

                                        id: data[i].id,
                                        source: "guard",
                                        title: data[i].webTitle,
                                        description: data[i].blocks.body[0].bodyTextSummary,
                                        date: data[i].webPublicationDate,
                                        section: data[i].sectionId,
                                        url: data[i].webUrl,
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png"
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }


                newzComponent_g = new_data.map(newz => <Small key={newz.id} url={newz.url} id={newz.id} source={newz.source} title={newz.title} description={newz.description} image_url={newz.image_url} date={newz.date} section={newz.section} />)
            }


            if (this.state.users_ny !== undefined && this.state.users_ny !== null) {

                data_ny = this.state.users_ny;
                // console.log(data_ny);
                var new_data = [];

                for (var i = 0; i < data_ny.length && i < 5; i++) {

                    if (data_ny[i].web_url !== undefined && data_ny[i].web_url !== null && data_ny[i].headline !== undefined && data_ny[i].headline !== null && data_ny[i].headline.main !== undefined && data_ny[i].headline.main !== null && data_ny[i].news_desk !== undefined && data_ny[i].news_desk !== null && data_ny[i].pub_date !== undefined && data_ny[i].pub_date !== null && data_ny[i].multimedia !== undefined && data_ny[i].multimedia !== null) {
                        if (data_ny[i].multimedia.length > 0) {
                            var val_url;
                            for (var j = 0; j < data_ny[i].multimedia.length; j++) {
                                // console.log(data_ny[i].multimedia.length);
                                if (data_ny[i].multimedia[j].url !== undefined && data_ny[i].multimedia[j].url !== null && data_ny[i].multimedia[j].url !== "" && data_ny[i].multimedia[j].width !== undefined && data_ny[i].multimedia[j].width !== null && data_ny[i].multimedia[j].width > 1999) {
                                    val_url = "https://nytimes.com/" + data_ny[i].multimedia[j].url;
                                    break;

                                }
                                else {

                                    val_url = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";

                                }
                            }
                        }
                        if(val_url ===undefined)
                        {
                            val_url = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
                        }
                        var data_value = {

                            id: data_ny[i].web_url,
                            source: "ny",
                            title: data_ny[i].headline.main,
                            description: data_ny[i].abstract,
                            date: data_ny[i].pub_date,
                            section: data_ny[i].news_desk,
                            image_url: val_url,


                        };
                        // console.log(data_value);
                        new_data.push(data_value);
                    }
                }



                // console.log(new_data);
                newzComponent_ny = new_data.map(newz => <Small key={newz.id} url ={newz.id} id={newz.id} source={newz.source} title={newz.title} description={newz.description} image_url={newz.image_url} date={newz.date} section={newz.section} />)
                // newzComponent_ny = data_ny.map(newz_ny => <Block key={newz_ny.url} id={newz_ny.url} source="ny" title={newz_ny.title} description={newz_ny.abstract} image_url={newz_ny.multimedia[0].url} date={newz_ny.published_date} section={newz_ny.section} />)

            }


            // if (this.state.users_ny.results !== undefined) {
            //     data_ny = this.state.users_ny.results;
            //     //console.log(data_ny);
            //     newzComponent_ny = data_ny.map(newz_ny => <Block key={newz_ny.title} title={newz_ny.title} description={newz_ny.abstract} image_url={newz_ny.multimedia[0].url} date={newz_ny.published_date} section={newz_ny.section} />)
            // }
            return (
                <Container fluid>
                <h4 style={{marginTop: "8px", marginLeft: "5px"}}>Results</h4>
                    <Row md={3} xl={4}>
                        {newzComponent_g}
                        {newzComponent_ny}
                    </Row>
                </Container>
            )
        }
    }
}

export default withRouter(searchExample);