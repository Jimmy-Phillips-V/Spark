import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ListItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-4 sm-2">
          <Thumbnail src={props.image} />
        </Col>
        <Col size="xs-8 sm-9">
        <h3>{props.title}</h3>
        <h3>{props.Incident}</h3>
        <h3>{props.County}</h3>
        <h3>{props.State}</h3>
          <p>
          <a rel="noferrer noopener" target="_blank" href={props.url}>
          Get Details
          </a>
          </p>
          <p>
        <a rel="noferrer noopener" target="_blank" href="https://www.charitynavigator.org/index.cfm?bay=search.summary&orgid=3277">
          Charity: UNICEF 3 out of 4 stars
          </a>  
          </p>
          <a className="btn btn-primary" rel="noreferrer noopener" target="_blank" href="https://donate.unicefusa.org/page/contribute/indonesia-earthquake?utm_campaign=20181010_Emergencies&utm_medium=cpc&utm_source=google&utm_content=tsrelief11&ms=cpc_dig_2018_Emergencies_20181010_google_tsrelief11_delve_E1901&initialms=cpc_dig_2018_Emergencies_20181010_google_tsrelief11_delve_E1901&gclid=EAIaIQobChMItveFwsf43QIVCMZkCh3H4QliEAAYASAAEgKtb_D_BwE" role="button">
            Donate!
          </a>
          
        </Col>
      </Row>
    </Container>
  </li>
 
);
