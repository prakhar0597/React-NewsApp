import React, { Component } from 'react'
import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactTooltip from 'react-tooltip'

var testObject;

class Bookmark2 extends Component {

    constructor() {
        super();
        this.state = { saved: false }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {

        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

        if (localStorage.getItem('bookmarks') !== null) {
            for (var i = 0; i < bookmarks.length; i++) {
                if (bookmarks[i].id === this.props.id) {
                    // alert("found it!");
                    //Make bookmark RED.
                    this.setState({ saved: true });
                    break;
                }
            }
        }


    }


    handleClick = () => {


        var bookmark = {
            title: this.props.title,
            date: this.props.date,
            source: this.props.source,
            section: this.props.section,
            id: this.props.id,
            image_url: this.props.image_url,
            url: this.props.url
        }
        // alert("1");
        if (localStorage.getItem('bookmarks') === null) {
            var bookmarks = [];
            toast("Saving " + this.props.title, {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
                autoClose: 2000
            });
            this.setState({saved: true});
            // alert("2");
            bookmarks.push(bookmark);
            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
            this.setState({saved:true})
        }
        else {
            var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            // alert("3");
            var name = this.props.id;
            var found = false;

            var j;
            for (var i = 0; i < bookmarks.length; i++) {
                if (bookmarks[i].id === this.props.id) {
                    //remove from array
                    found = true;
                    j = i;
                    break;
                }
            }

            if(!found)
            {

                this.setState({saved: true});
            }


            if (!found) {
                bookmarks.push(bookmark);
                console.log("working!");
                toast("Saving " + this.props.title, {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    autoClose: 2000
                });
                // alert("4");
            }
            else {
                bookmarks.splice(j, 1);
                toast("Removing - " + this.props.title, {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                    autoClose: 2000
                });
                this.setState({saved:false})
                // alert(5);
                // alert(this.props.id + " already exists!");
            }

            localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

        }

    }

    render() {
        return (
            <div style={{paddingLeft:"25%", textAlign:"right", marginTop:"-8%"}}>
                {this.state.saved && <div>
                    <h3><FaBookmark style={{ fontSize:"20px", color: "red", marginBottom:"0.5%" }} onClick={() => this.handleClick()} data-tip="Bookmark" /></h3>
                    <ReactTooltip place="top" type="dark" />
                </div>}
                {!this.state.saved && <div>
                    <h3><FaRegBookmark style={{fontSize:"20px", color: "red", marginBottom:".1%"}} onClick={() => this.handleClick()} data-tip="Bookmark" /></h3>
                    <ReactTooltip place="top" type="dark" />
                </div>}
                {/* <ToastContainer /> */}
            </div>
        )
    }
}
export default Bookmark2