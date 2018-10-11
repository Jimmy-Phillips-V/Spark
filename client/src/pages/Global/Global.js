import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Col} from "../../components/Grid";
import { List } from "../../components/List";
import ListItem from "../../components/ListItem";
// import {Container, Row, Col} from "../../components/Grid"
// import { List, ListItem } from "../../components/List";


const disasterImages = {
  'Haiti: Earthquake - Oct 2018' : "https://i.ytimg.com/vi/c3AoWxdWvHY/maxresdefault.jpg"
 }


 
// const disasterImages = {
//   Fire : {
//         image: "https://s7d2.scene7.com/is/image/TWCNews/0618_fire_genericjpg?wid=767&hei=432&$wide-bg$",
//         charities: 'Red Cross' 
//   }
//   hurricane: 'someimage'
// }

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
          <Jumbotron />
          <Container>
            <Row>
              <Col size="md-12">
              <List>
            {this.state.global.map((item, index ) => {
               return (
                <ListItem
                key = {index}
                image={disasterImages[item.fields.name]}
                title={item.fields.name}
                href={item.href}
                url={item.fields.url}
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