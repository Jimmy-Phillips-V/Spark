import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Col} from "../../components/Grid"
import { List, ListItem } from "../../components/List";

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
         <Nav />
         <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
            <List>
            {this.state.national.map(item => {
               return (
                <ListItem
                text={"Incident: "}
                Incident={item.incidentType}
                statename={"State: "}
                State={item.state}
                County={item.declaredCountyArea}
                />  
               )
            })}
            </List>
            </Col>
            </Row>
            </Container>
            </div>
      )}
        
      }

  export default National;