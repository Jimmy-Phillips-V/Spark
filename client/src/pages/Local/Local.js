import React, { Component } from "react";
import API from "../../utils/API";
import GlobalDetail from "../../components/GlobalDetail"


class Local extends Component {
    state = {
      local: []
    };
  
    componentDidMount() {
      this.loadLocal();
    }
  
    loadLocal = () => {
      API.getLocal()
        .then(res =>
          this.setState({ local: res.data.DisasterDeclarationsSummaries })
        )
        .catch(err => console.log(err));
        console.log (this.state.local)
    };
  
  
    render() {
        return (
              <div>
              <h1>Test</h1> 
              {this.state.local.map(item => {
                 return (
                   <div>
                      <p>Incident: {item.incidentType}</p>
                      <p>County: {item.declaredCountyArea}</p>
                   </div>
                 )
              })}
              </div>
        )}
          
        }

  
  export default Local;