import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import { FaRegBookmark } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'

class Question extends Component {
   
        state = {
            redirect: false
        }

   
    handleClick = () => {
        //alert("yes");
        this.setState({
            redirect: true
        })
    }

    renderRedirect = (val) => {
        if (this.state.redirect) {
            // alert(id);
            this.setState({
                redirect: false
            })
            return <Redirect push to={{ pathname: "/favorites" }} />
        }
    }

    // handleClick = () => {

    //     var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    //     if(bookmarks.length===0)
    //     {

    //     }

    //     for (var i = 0; i < bookmarks.length; i++) {




    //     }

    // }

    render() {
        return (
            <div style={{marginTop:'-1.5%'}}>
                {this.renderRedirect(this.props)}
                <span style={{fontSize:"18px", color: "#d7ecf7" }}><FaRegBookmark onClick={() => this.handleClick()} data-tip="Bookmark" data-for='abc'/>
                <ReactTooltip place="bottom" type="dark" id='abc'/></span>
            </div>
        )
    }
}
export default Question