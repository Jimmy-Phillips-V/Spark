import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import { FormBtn } from "../InfoBtn";
import { InfoModal } from "../InfoModal"
import axios from "axios";

class ListItem extends React.Component {

state = {
  charities: [],
  searched: false,
  show: false
}

handleFormSubmit = event => {
  event.preventDefault();
  if (this.FormBtn == true) {
    axios
    .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=6b3b6e94&app_key=9d523e68a9f651834c7e025333070333&search=Red%20Cross&searchType=NAME_ONLY&rated=true&minRating=3")
    .then(res => this.setState({charities: res, searched: true}))
    .catch(err => console.log(err));
  }
  this.setState({
    ...this.state,
    show: !this.state.show
  })
  };

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
render(){

  return(
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src="https://placehold.it/300x300" />
        </Col>
        <Col size="xs-8 sm-9">
        <h3>{this.props.title}</h3>
        {(this.props.text != undefined) ?
           <h3>{this.props.text+this.props.Incident}</h3>
        :
          <h3>{this.props.Incident}</h3>
        }
        
        <h4>{this.props.County}</h4>
        {(this.props.statename != undefined) ?
        <h4>{this.props.statename+this.props.State}</h4>
        :
          <h4>{this.props.State}</h4>
        }
        <FormBtn
        onClick={this.handleFormSubmit}>
         Get Charity Details
        </FormBtn>
        <InfoModal charities={this.state.charities} show={this.state.show}></InfoModal>
          <p>
        <a rel="noferrer noopener" target="_blank" href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=4617">
          Charity: UNICEF 3 out of 4 stars
          </a>  
          </p>
          <a class="btn btn-primary" rel="noreferrer noopener" target="_blank" href="https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=131760110" role="button">
            Donate!
          </a>
          
        </Col>
      </Row>
    </Container>
  </li>
 
  )};
}

export default ListItem;