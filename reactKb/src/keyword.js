import React, { Component } from 'react';
import axios from 'axios';
import AsyncSelect from 'react-select/async';
import { colourOptions } from './data';
import { withRouter } from 'react-router-dom'




class WithCallbacks extends Component {

  constructor() {
    super();
    this.state = {
      input_val: '',
      load_options: []
    }
    this.filterColors = this.filterColors.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
  }


  filterColors = (inputValue) => {
    // console.log(inputValue);
    return inputValue.map(temp => ({ label: temp.displayText, value: temp.displayText, url: temp.url }));

  };

  loadOptions = (inputValue, callback) => {
    //console.log(inputValue);
    axios
      .get('https://prakharagarwal.cognitiveservices.azure.com/bing/v7.0/suggestions?q=' + inputValue,
        {
          headers: {
            "Ocp-Apim-Subscription-Key": "bbf2eb91be5c4b6f9580f35b37d58d08"
          }
        })
      .then((data) => {

        // console.log(data.data.suggestionGroups[0].searchSuggestions);
        setTimeout(() => {
          callback(this.filterColors(data.data.suggestionGroups[0].searchSuggestions));
        }, 1000);

      })

    // 
  };


  handleInputChange = (newValue) => {
    //const inputValue = newValue.replace(/\W/g, '');
    this.setState({ newValue });
    //console.log(newValue)
    this.props.history.push('/search?q=' + newValue.label)
    //return inputValue;
  };
  render() {
    if(this.props.history.location.pathname.includes("search"))
    {
    return (
      <div>
        <AsyncSelect
          cacheOptions
          loadOptions={this.loadOptions}
          onChange={this.handleInputChange}
          noOptionsMessage={() => "No Match"}
          value={this.state.inputValue}
          placeholder="Enter Keyword .."
          className="keyword_bar"
        />
      </div>
    );
  }
  else
  {
    return (
      <div>
        <AsyncSelect
          cacheOptions
          loadOptions={this.loadOptions}
          onChange={this.handleInputChange}
          noOptionsMessage={() => "No Match"}
          value=''
          placeholder="Enter Keyword .."
          className="keyword_bar"
        />
      </div>
    );
  }
  }
}

export default withRouter(WithCallbacks)
