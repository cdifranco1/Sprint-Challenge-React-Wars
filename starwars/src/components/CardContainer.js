import React from 'react';
import { Container, Row, Col, Card } from 'reactstrap';
import CharCard from './Card.js';


const CardContainer = ({people, searchTerm}) => {
  const checkSearch = (name) => {
    return name.toLowerCase().includes(searchTerm.toLowerCase())
  }
  
  return (
    <Container>
      <Row>
        {people.filter((person) => checkSearch(person.name)).map((person) =>
        <Col md="6" lg="4">
          <CharCard person={person}/>
        </Col>
        )}
      </Row>
    </Container>
  )
}

export default CardContainer;
