import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Col} from "../../components/Grid"
import { List, ListItem } from "../../components/List";

const disasterImages = {
    Fire : "https://s7d2.scene7.com/is/image/TWCNews/0618_fire_genericjpg?wid=767&hei=432&$wide-bg$"
}
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
           <Nav />
           <Jumbotron />
          <Container>
            <Row>
              <Col size="md-12">
              <List>
              {this.state.local.map((item, index )=> {
                 return (
                  <ListItem
                  key = {index}
                  image={disasterImages[item.incidentType]}
                  Incident={item.incidentType}
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

  
  export default Local;