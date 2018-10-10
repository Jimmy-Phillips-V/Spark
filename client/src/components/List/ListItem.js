import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src= {props.image} />
        </Col>
        <Col size="xs-8 sm-9">
        <h3>{props.title}</h3>
        {(props.text != undefined) ?
           <h3>{props.text+props.Incident}</h3>
        :
          <h3>{props.Incident}</h3>
        }
        
        <h4>{props.County}</h4>
        {(props.statename != undefined) ?
        <h4>{props.statename+props.State}</h4>
        :
          <h4>{props.State}</h4>
        }
       <h4>{props.charity}</h4>
          {/* <p> */}
          {/* <a rel="noferrer noopener" target="_blank" href={props.url}> */}
          {/* Get Details */}
          {/* </a> */}
          {/* </p> */}
          {/* <p> */}
        {/* <a rel="noferrer noopener" target="_blank" href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=4617">
          Charity: UNICEF 3 out of 4 stars
          </a>   */}
       
          {/* </p> */}
          <a class="btn btn-primary" rel="noreferrer noopener" target="_blank" href="https://www.charitynavigator.org/index.cfm?bay=my.donations.makedonation&ein=131760110" role="button">
            Donate!
          </a>
          
        </Col>
      </Row>
    </Container>
  </li>
 
);
