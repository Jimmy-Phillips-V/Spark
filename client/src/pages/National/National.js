import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Col} from "../../components/Grid"
import { List, ListItem } from "../../components/List";


const disasterImages = {
  Tornado :{
   img : "https://s.abcnews.com/images/GMA/180720_gma_moore1_hpMain_16x9_992.jpg",
   charity : "American Red Cross"
  } ,
  Flood : {
    img : "https://ww2.kqed.org/wp-content/uploads/sites/35/2017/09/Web-DBK_San_Joaquin_Flood_9445-6_01_07_1997-1180x664.jpg",
   charity : "Cool Charity"
},

  Hurricane : {
    img : "https://www.mypalmbeachpost.com/rf/image_medium/Pub/p8/MyPalmBeachPost/2017/11/23/Images/newsEngin.20441460_20170910-Irma-lvw-18.jpg",
    charity : "Trump"
  },
  Other :{
    img : "https://cdn-images-1.medium.com/max/2000/1*C51FyB82wHdzRTgEIsYKPw.jpeg",
    charity : "Some charity"
  } 
}
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
            {this.state.national.map((item, index ) => {
               return (
                <ListItem
                key = {index}
                image={disasterImages[item.incidentType].img}
                charityname={"Charity: "}
                charity={disasterImages[item.incidentType].charity}
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