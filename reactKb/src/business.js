import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Block from "./block"
import axios from 'axios';
import Spinner from "./spinner"
// import "./style.css"
// const API_URL = 'http://localhost:3001/home';

let data;
let data_ny;
let newzComponent_g;
let newzComponent_ny;
class businessExample extends Component {
    constructor() {
        super()

        this.state = {
            users: [],
            users_ny: [],
            isLoading: true
        }
    }

    componentDidMount() {
        this.props.temp(true);
        this.props.temp2(false);
        //console.log(this.props);
        const url_g = 'https://csci571-nodejs-backend.wl.r.appspot.com/business/';
        axios.get(url_g).then(response => response.data)
            .then((data) => {
                this.setState({ users: data, isLoading: false  })
                //console.log(this.state.users);
            })
        const url_ny = 'https://csci571-nodejs-backend.wl.r.appspot.com/n_business/';
        axios.get(url_ny).then(response => response.data)
            .then((data) => {
                this.setState({ users_ny: data, isLoading: false  })
                //console.log(this.state.users_ny);
            })
    }

    // componentDidUpdate(){
    //     //console.log(this.props.check);
    //     if(this.props.check===true)
    //         url = 'http://localhost:3001/home/';
    //     else
    //         url = 'http://localhost:3001/n_home/';
    //     axios.get(url).then(response => response.data)
    //         .then((data) => {
    //             this.setState({ users: data })
    //             console.log(this.state.users);
    //         })
    // }

    // componentWillReceiveProps(){
    //     console.log(this.props);
    //     if(this.props.check===true)
    //         url = 'http://localhost:3001/home/';
    //     else
    //         url = 'http://localhost:3001/n_home/';
    //     axios.get(url).then(response => response.data)
    //         .then((data) => {
    //             this.setState({ users: data })
    //             //console.log(this.state.users);
    //         })
    // }

    render() {
        if (this.state.isLoading === true) {
            return (
                <div className="sweet-loading">
                    <Spinner />
                </div>
            )
        }
        else {
            if (this.state.users.response !== undefined && this.state.users.response !== null) {

                data = this.state.users.response.results;

                var new_data = [];

                for (var i = 0; i < data.length; i++) {

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
                                        url:data[i].webUrl

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
                                        image_url: "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png",
                                        url:data[i].webUrl
                                    };
                                    // console.log(data_value);
                                    new_data.push(data_value);
                                }
                            }
                        }
                    }
                }



                // console.log(new_data);
                newzComponent_g = new_data.map(newz => <Block key={newz.id} id={newz.id} source={newz.source} title={newz.title} description={newz.description} image_url={newz.image_url} date={newz.date} section={newz.section} url={newz.url}/>)
            }

            // if (this.state.users_ny.results !== undefined) {
            //     data_ny = this.state.users_ny.results;
            //     //console.log(data_ny);
            //     newzComponent_ny = data_ny.map(newz_ny => <Block key={newz_ny.title} id={newz_ny.url} source="ny" title={newz_ny.title} description={newz_ny.abstract} image_url={newz_ny.multimedia[0].url} date={newz_ny.published_date} section={newz_ny.section} />)
            // }

            if (this.state.users_ny.results !== undefined && this.state.users_ny.results !== null) {

                data_ny = this.state.users_ny.results;
                // console.log(this.state.users_ny);
                var new_data = [];

                for (var i = 0; i < data_ny.length && i < 10; i++) {

                    if (data_ny[i].url !== undefined && data_ny[i].url !== null && data_ny[i].title !== undefined && data_ny[i].title !== null && data_ny[i].multimedia !== undefined && data_ny[i].multimedia !== null && data_ny[i].section !== undefined && data_ny[i].section !== null && data_ny[i].published_date !== undefined && data_ny[i].published_date !== null && data_ny[i].abstract !== undefined && data_ny[i].abstract !== null) {
                        // console.log("data_ny[i].multimedia.length");
                        // console.log(i);
                        if (data_ny[i].multimedia.length > 0) {
                            var val_url;
                            for (var j = 0; j < data_ny[i].multimedia.length; j++) {
                                // console.log(data_ny[i].multimedia.length);
                                if (data_ny[i].multimedia[j].url !== undefined && data_ny[i].multimedia[j].url !== null && data_ny[i].multimedia[j].url !== "" && data_ny[i].multimedia[j].width !== undefined && data_ny[i].multimedia[j].width !== null && data_ny[i].multimedia[j].width > 1999) {
                                    val_url = data_ny[i].multimedia[j].url;
                                    break;

                                }
                                else {

                                    val_url = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";

                                }
                            }
                        }
                        var data_value = {

                            id: data_ny[i].url,
                            source: "ny",
                            title: data_ny[i].title,
                            description: data_ny[i].abstract,
                            date: data_ny[i].published_date,
                            section: data_ny[i].section,
                            image_url: val_url,
                            url:data_ny[i].url

                        };
                        // console.log(data_value);
                        new_data.push(data_value);
                    }
                }



                // console.log(new_data);
                newzComponent_ny = new_data.map(newz => <Block key={newz.id} id={newz.id} source={newz.source} title={newz.title} description={newz.description} image_url={newz.image_url} date={newz.date} section={newz.section} url={newz.url}/>)
                // newzComponent_ny = data_ny.map(newz_ny => <Block key={newz_ny.url} id={newz_ny.url} source="ny" title={newz_ny.title} description={newz_ny.abstract} image_url={newz_ny.multimedia[0].url} date={newz_ny.published_date} section={newz_ny.section} />)
            }


            if (this.props.check) {
                return (
                    <div>
                        {newzComponent_g}
                    </div>
                )
            }
            else {
                return (
                    <div>
                        {newzComponent_ny}
                    </div>
                )
            }
        }
    }
}

export default businessExample;