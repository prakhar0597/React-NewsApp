import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Detail from "./detail"
import Comment from "./commentbox"
import axios from 'axios';
import Spinner from "./spinner";

let info;
let newzComponent_g;



let url;
class articleExample extends Component {
    test(url) {
        //alert(url);
        axios
            .get('https://csci571-nodejs-backend.wl.r.appspot.com/create?id=' + url)
            .then((data) => {
                console.log(data);
                if (data.data.response.content)
                    this.setState({ users: data.data.response.content, isLoading: false })
                if (data.data.response.docs)
                    this.setState({ users: data.data.response.docs[0], isLoading: false })
                //console.log(this.state.users);
            })
    }
    constructor() {
        super()

        this.state = {
            users: [],
            isLoading: true
        }

        this.test = this.test.bind(this);
    }


    componentDidMount() {
        url = window.location.search.substring(4);
        this.test(url);
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

            if (this.state.users !== undefined) {
                info = this.state.users;
                // console.log(info);
            }
            if (info && info.blocks) {
                var g_img = "https://assets.guim.co.uk/images/eada8aa27c12fe2d5afa3a89d3fbae0d/fallback-logo.png";
                if (info.blocks.main !== undefined && info.blocks.main !== null && info.blocks.main.elements.length >= 0 && info.blocks.main.elements[0] !== undefined && info.blocks.main.elements[0] !== null && info.blocks.main.elements[0].assets.length >= 0 && info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1] !== undefined && info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1] !== null && info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1].file !== undefined && info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1].file !== null)
                    g_img = info.blocks.main.elements[0].assets[info.blocks.main.elements[0].assets.length - 1].file;
                // alert(g_img);
                return (
                    <div>
                        <br />
                        {/* {alert(info.sectionId)} */}

                        {/* {console.log(info.blocks)} */}
                        <Detail key={info.id} url={info.webUrl} id={info.id} title={info.webTitle} source="Guardian" description={info.blocks.body[0].bodyTextSummary} image_url={g_img} date={info.webPublicationDate} section={info.sectionId} />
                        {/* <Detail key={info.id} title={info.webTitle} description={data.blocks.body[0].bodyTextSummary} image_url={data.blocks.main.elements} date={data.webPublicationDate}/> */}
                        <br />
                        <Comment u={info.id} />
                    </div>
                )
            }
            else if (info && info.headline) {
                var n_img = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Nytimes_hq.jpg";
                if (info.multimedia !== undefined && info.multimedia !== null) {
                    for (var i = 0; i < info.multimedia.length; i++) {
                        if (info.multimedia[i].url !== undefined && info.multimedia[i].url !== null && info.multimedia[i].url !== "" && info.multimedia[i].width !== undefined && info.multimedia[i].width !== null && info.multimedia[i].width > 1999) {
                            n_img = "https://www.nytimes.com/" + info.multimedia[i].url;
                            break;

                        }
                    }
                }
                // alert(n_img);
                return (
                    <div>
                        <br />
                        {/* {alert(info.section_name)} */}
                        <Detail key={info.web_url} url={info.web_url} id={info.web_url} title={info.headline.main} source="NYTimes" description={info.abstract} image_url={n_img} date={info.pub_date} section={info.news_desk} />
                        <br />
                        <Comment u={info.web_url} />
                    </div>
                )
            }
            else {
                return (
                    <div>

                    </div>
                )
            }
        }
    }
}

export default articleExample;