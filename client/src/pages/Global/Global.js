import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import { JumbotronGlobal }from "../../components/JumbotronGlobal";
import {Container, Row, Col} from "../../components/Grid";
import { List } from "../../components/List";
import ListItem from "../../components/ListItem";
// import {Container, Row, Col} from "../../components/Grid"
// import { List, ListItem } from "../../components/List";


const disasterImages = {
  "Tropical Cyclone" :{
   img : "https://s.newsweek.com/sites/www.newsweek.com/files/styles/full/public/2017/10/28/1028floridacyclone.jpg",
   charity : "American Red Cross",
   donationUrl :"https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=530196605"
  } ,
  "Earthquake" : {
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBCeR80cQN1RFlvJiYVDY7cxcznKfjDdStZCZpn18pEmm5qFWuhw",
    charity : "World Relief",
   donationUrl :"https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=236393344"
  },
  "Flood": {
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6KprbXpdXq-hPxCw5KnRHlfTGVPOtuLc2ZBq-EOUDH5Jjht8WA",
   charity : "American Red Cross",
   donationUrl :"https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=530196605"
},
"Flash Flood": {
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6KprbXpdXq-hPxCw5KnRHlfTGVPOtuLc2ZBq-EOUDH5Jjht8WA",
 charity : "American Red Cross",
 donationUrl :"https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=530196605"
},
  "Epidemic" :{
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVQAZQmk1WbzpX0ibgpBPnL5tQss-pIQBt2hLJPKriXVjZ2tB7Uw",
    charity : "Doctors without borders",
    donationUrl :"https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=133433452"
  }, 
   "Drought" :{
    img : "https://i.guim.co.uk/img/media/80861474c741844d65e0fd55241c84ea28a5b7b0/207_314_1650_990/master/1650.jpg?width=460&quality=85&auto=format&fit=max&s=d47f5b28e226f2c7d2d5d1a2249b6389",
    charity : "World Relief",
     donationUrl :"https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=236393344" 
    } 
}


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
          <Nav />
          <JumbotronGlobal />
          <Container>
            <Row>
              <Col size="md-12">
              <List>
            {this.state.global.map((item, index ) => {
               return (
                <ListItem
                key = {index}
                title={item.fields.country[0].name}
                image={disasterImages[item.fields.type[0].name].img}
                charityName={"Charity: "}
                charity={disasterImages[item.fields.type[0].name].charity}
                url={disasterImages[item.fields.type[0].name].donationUrl}
                incident={item.fields.type[0].name}
                />
               )
            })}
            </List>
            </Col>
            </Row>
            </Container>
            </div>
      )};
    }

  
  export default Global;