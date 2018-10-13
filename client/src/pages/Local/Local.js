import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Col} from "../../components/Grid"
import { List } from "../../components/List";
import ListItem from "../../components/ListItem";
// import firebase from '../../base'

const disasterImages = {
    Fire : {
      img : "https://s7d2.scene7.com/is/image/TWCNews/0618_fire_genericjpg?wid=767&hei=432&$wide-bg$",
      charity : "ICNA Relief USA",
      donationUrl : "https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=043810161"
  }
}

class Local extends Component {
    state = {
      local: []
    };
  
    componentDidMount()  {
      this.loadLocal()
    }
   
    loadLocal = () => {
      API.getLocal()
      .then(res => {
        this.setState ({ local: res.data.DisasterDeclarationsSummaries })
        console.log(this.state)
      })
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
              {this.state.local.map((item, index ) => {
                 return (
                  <ListItem
                  key = {index}
                  image={disasterImages[item.incidentType].img}
                  charityname={"Charity: "}
                  charity={disasterImages[item.incidentType].charity}
                  text={"Incident: "}
                  incident={item.incidentType}
                  County={item.declaredCountyArea}
                  url={disasterImages[item.incidentType].donationUrl}
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