import React, { Component } from "react";
import API from "../../utils/API";
import GlobalDetail from "../../components/GlobalDetail"


class Global extends Component {
    state = {
      global: []
    };
  
    componentDidMount() {
      this.loadGlobal();
    }
  
    loadGlobal = () => {
      API.getGlobal()
        .then(res =>
          this.setState({ global: res.data.data })
        )
        .catch(err => console.log(err));
        console.log (this.state.global)
    };
  
  
    render() {
      return (
        <div>
            <h1>Test</h1> 
            {this.state.global.map(item => {
               return (
                <p>{item.fields.name}</p>
               )
            })}
            </div>
      )};
    }

  
  export default Global;