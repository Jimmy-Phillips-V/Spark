import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
// import Button from '@material-ui/core/Button';
import SimpleModalWrapped  from "../InfoModal/InfoModal"
import axios from "axios";
import "./ListItem.css"

 class ListItem extends React.Component {
 state = {
  charities: [],
  searched: false,
  show: false
}
 handleFormSubmit = event => {
  event.preventDefault();
  console.log("works")
  if (this.FormBtn === true) {
    axios
    .get("https://api.data.charitynavigator.org/v2/Organizations?app_id=6b3b6e94&app_key=9d523e68a9f651834c7e025333070333&search=Red%20Cross&searchType=NAME_ONLY&rated=true&minRating=3")
    .then(res => this.setState({charities: res, searched: true}))
    .catch(err => console.log(err));
  }
  this.setState({
    // ...this.state,
    open: true
  })
  };

 // RecipeListItem renders a bootstrap list item containing data from the recipe api call
render(){
   return(
     <div>
  <li className="list-group-item rounded-bottom">
    <Container>
      <Row>
        <Col className="mt-5" size="xs-4 sm-2">
          <Thumbnail src={this.props.image} />
        </Col>
        <Col size="xs-8 sm-9">
        <h3>{this.props.title}</h3>
        {(this.props.text !== undefined) ?
           <h3>{this.props.text+this.props.incident}</h3>
        :
          <h3>{this.props.incident}</h3>
        }
        
        <h4>{this.props.County}</h4>
        {(this.props.statename !== undefined) ?
        <h4>{this.props.statename+this.props.State}</h4>
        :
          <h4>{this.props.State}</h4>
        }
        <h4>{this.props.charityname+this.props.charity}</h4>

        <SimpleModalWrapped charities={this.state.charities} open={this.state.open} incident={this.props.incident}></SimpleModalWrapped>
  
          <a id="donate" className="btn btn-primary" rel="noreferrer noopener" target="_blank" href={this.props.url} role="button">
            Donate!
          </a>
          
        </Col>
      </Row>
    </Container>
  </li>
  <br />
  </div>

 
  )};
}

 export default ListItem; 
