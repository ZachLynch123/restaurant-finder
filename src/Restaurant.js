import React from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button } from 'reactstrap';





const Restaurant = (props) => {
    
    // generates random number 0 - 10
    let x = Math.floor(Math.random() * props.data.length);
    console.log();

    return (
        <div className="restaurant-card">
        <Card className="shadow p-3 mb-5 bg-white rounded" >
          <CardBody>
            <CardTitle>{props.data[x].restaurant.name}</CardTitle>
            <CardSubtitle>{props.data[x].restaurant.cuisines}</CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
            <CardLink href="#">Card Link</CardLink>
            <CardLink href="#">Another Link</CardLink>
          </CardBody>
          <Button sm="2">Get a different restaurant</Button>
        </Card>
      </div>
    );
} 

export default Restaurant;