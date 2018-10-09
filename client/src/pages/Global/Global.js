import React, { Component } from "react";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import Jumbotron from "../../components/Jumbotron";
import {Container, Row, Col} from "../../components/Grid"
import { List, ListItem } from "../../components/List";


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
            {this.state.global.map(item => {
               return (
                <ListItem
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