import React, { Component } from "react";
import API from "../../utils/API";
import GlobalDetail from "../../components/GlobalDetail"


class National extends Component {
    state = {
      national: []
    };
  
    componentDidMount() {
      this.loadNational();
    }
  
    loadNational = () => {
      API.getNational()
        .then(res =>
          this.setState({ national: res.data.DisasterDeclarationsSummaries })
        )
        .catch(err => console.log(err));
        // console.log (this.state.national)
    };
  
  
    render() {
      return (
            <div>
            <h1>Test</h1> 
            {this.state.national.map(item => {
               return (
                 <div>
                    <p>Incident: {item.incidentType}</p>
                    <p>State: {item.state}</p>
                    <p>County: {item.declaredCountyArea}</p>
                 </div>
               )
            })}
            </div>
      )}
        
      }
  
  export default National;