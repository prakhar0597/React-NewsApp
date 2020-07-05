import React, { Component } from "react";
import Switch from "react-switch";

class SwitchExample extends Component {
  constructor() {
    super();


    
    if (localStorage.getItem('switch') === "false") {
      // console.log("working");
      this.state = { checked: false };
      // console.log(this.state.checked);
    }
    else
    {
      this.state = { checked: true };
    }


    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(checked) {
    // console.log(checked);
    this.props.onChangeSource(!this.state.checked);
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <label htmlFor="material-switch">
        <Switch
          checked={this.state.checked}
          onChange={this.handleChange}
          onColor="#0e95f5"
          onHandleColor="#ffffff"
          offColor="#dad8d9"
          offHandleColor="#ffffff"
          // handleDiameter={30}
          uncheckedIcon={true}
          checkedIcon={true}
          // boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          // activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          // height={20}
          // width={48}
          className="react-switch"
          
        />
      </label>

    );
  }
}
export default SwitchExample