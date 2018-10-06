import React, { Component } from "react";
import API from "../../utils/API";
import GlobalDetail from "../../components/GlobalDetail"


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
        <div>
            <h1>Test</h1> 
        <GlobalDetail
            // {this.state.global.map(item, i =>(
            //    <li>item={i}>
            //     <span>item: {i}</span>
            //     </li> 
            // ))

            // {Object.keys(subjects).map((item, i) => (
            //     <li className="travelcompany-input" key={i}>
            //         <span className="input-label">key: {i} Name: {subjects[item]}</span>
            //     </li>
            ))}
        />
        </div>
      );
    }
  }
  
  export default Global;