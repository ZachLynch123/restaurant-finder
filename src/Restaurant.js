import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';




const Restaurant = (props) => {
    
    // generates random number 0 - 10
    let x = Math.floor(Math.random() * props.data.length);
    console.log();

    return (
        <div className="restaurant-card">
        <Card id="test">
          <CardBody>
            <CardTitle>{props.data[x].restaurant.name}</CardTitle>
            <CardSubtitle>{props.data[x].name}</CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
        </Card>
      </div>
    );
}

export default Restaurant;