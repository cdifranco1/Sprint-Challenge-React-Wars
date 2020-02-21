import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import CharCard from './Card.js';


const CardContainer = (props) => {
  return (
    <Container>
      <Row className="align-items-baseline">
        {props.people.map((person) =>
        <Col md="6" lg="4">
          <CharCard person={person}/>
        </Col>
        )}
      </Row>
    </Container>
  )
}

export default CardContainer;
