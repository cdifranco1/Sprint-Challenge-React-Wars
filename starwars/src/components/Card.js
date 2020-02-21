import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const CharCard = (props) => {
  return (
    <div>
      <Card className="mb-4 rounded">
        <CardBody className="text-left">
          <CardTitle className="h5"><strong>Name: </strong>{props.person.name}</CardTitle>
          <CardSubtitle className="mb-2"><strong>Gender: </strong>{props.person.gender}</CardSubtitle>
          <CardSubtitle className="mb-2"><strong>Height: </strong>{props.person.height}</CardSubtitle>
          <CardSubtitle className="mb-2"><strong>Mass: </strong>{props.person.mass}</CardSubtitle>
          <CardSubtitle className="mb-2"><strong>Skin Color: </strong>{props.person.skin_color}</CardSubtitle>
          <CardSubtitle className="mb-2"><strong>Eye Color: </strong>{props.person.eye_color}</CardSubtitle>
          <CardSubtitle className="mb-2"><strong>Birth Year: </strong>{props.person.birth_year}</CardSubtitle>
          <CardSubtitle className="mb-2"><strong>Hair Color: </strong>{props.person.hair_color}</CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default CharCard;