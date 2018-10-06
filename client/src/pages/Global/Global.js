import React, { Component } from "react";
import API from "../../utils/API";


class Global extends Component {
    state = {
      global: null
    };
  
    componentDidMount() {
      this.loadGlobal();
    }
  
    loadGlobal = () => {
      API.getGlobal()
        .then(res =>
          this.setState({ global: res.data })
        )
        .catch(err => console.log(err));
        console.log (this.state.global)
    };
  
  
    render() {
      return (
        
        <h1>Test</h1>
              
      );
    }
  }
  
  export default Global;