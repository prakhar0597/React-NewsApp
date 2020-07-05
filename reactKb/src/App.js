import React, { Component } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Example from "./nav_bar"
import Home from "./home"
import World from "./world"
import Politics from "./politics"
import Business from "./business"
import Technology from "./technology"
import Sports from "./sports"
import Article from "./article"
import Favorites from "./favorites"
import Search from "./search"
import "./style.css"
import {ToastContainer, Zoom } from 'react-toastify';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




class App extends Component {

    constructor()
    {
        super()
        if (localStorage.getItem('switch') === "false") {
            // console.log("working");
            this.state = { checked: false, nav: true }
            // console.log(this.state.checked);
          }
          else
          {
            this.state = { checked: true, nav: true, temp2: false};
          }
        // this.state = { checked: true, nav: true }
    }

    

    handleSwitch = (langValue) => {
        //console.log(langValue); 
        this.setState({checked: langValue});
        localStorage.setItem('switch', langValue);
        console.log(localStorage.getItem('switch'));

    }

    manipulator = (sh) => {
        // console.log(sh);
        this.setState({nav: sh});
    }
    manipulator2 = (sh) => {
        // console.log(sh);
        this.setState({temp2: sh});
    }

    // componentDidMount() {
    //     if(localStorage.getItem('switch')===false)
    //         this.setState({checked: false});
    // }

    render() {

        return (

            <Router>
                <div>
                    <ToastContainer className="toast-container" transition={Zoom}/>
                    <Example temp={{switch: this.state.nav, bookmark_color: this.state.temp2}} onChange={this.handleSwitch}/>

                    <Switch>
                        <Route path="/World">
                            <World temp={this.manipulator} check={this.state.checked} temp2={this.manipulator2}/>
                        </Route>
                        <Route path="/Politics">
                            <Politics temp={this.manipulator} check={this.state.checked} temp2={this.manipulator2}/>
                        </Route>
                        <Route path="/Business">
                            <Business temp={this.manipulator} check={this.state.checked} temp2={this.manipulator2}/>
                        </Route>
                        <Route path="/Technology">
                            <Technology temp={this.manipulator} check={this.state.checked} temp2={this.manipulator2}/>
                        </Route>
                        <Route path="/Sports">
                            <Sports temp={this.manipulator} check={this.state.checked} temp2={this.manipulator2}/>
                        </Route>
                        <Route path="/article">
                            <Article temp={this.manipulator} temp2={this.manipulator2}/>
                        </Route>
                        <Route path="/favorites">
                            <Favorites temp={this.manipulator} temp2={this.manipulator2}/>
                        </Route>
                        <Route path="/search">
                            <Search temp={this.manipulator} temp2={this.manipulator2}/>
                        </Route>
                        <Route path="/">
                            <Home check={this.state.checked} temp={this.manipulator} temp2={this.manipulator2}/>
                            {/* info={this.state.users}  */}
                        </Route>
                    </Switch>
                </div>
            </Router>
            // <div>
            //    
            //     {/* router */}
            //     <Home info={this.state.users}/>
            // </div>
        )
    }
}

export default App