import React from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import './restaurant.css';





const Restaurant = (props) => {
    
    // generates random number 0 - 10
    let x = Math.floor(Math.random() * props.data.length);

    // gets restaurant location from props and encodes it for url
    let restaurantLocation = props.data[x].restaurant.location.address;
    let encoded = restaurantLocation.split(' ').join('+');
    const baseUrl = "https://www.google.com/maps/place/";
    let price = [];

    // get rating for restaurant
    let userRating = props.data[x].restaurant.user_rating;
    let rating = userRating.rating_text;
    let cName = '';


    // for loop that populates array of dollar signs to signify price range
    for (let i=1; i<=props.data[x].restaurant.price_range; i++){
      let symb = '$';
      price = [...price, symb];
    }

    switch (rating) {
      case 'Good' || 'Very Good' || 'Excellent':
        cName="text-success";
        break;
      case 'Average':
        cName="text-warning";
        break;
      default: 
        cName="text-muted";

    }
  

    return (
        <div className="restaurant-card">
        <Card className="shadow-lg p-3 mb-5 bg-white rounded" id="card" >
          <CardBody id="card-body">
            <CardTitle>{props.data[x].restaurant.name}</CardTitle>
            <CardSubtitle>{props.data[x].restaurant.cuisines}</CardSubtitle>
          </CardBody>
          <CardBody>
            <CardText><a href={baseUrl + encoded} target="_blank">{restaurantLocation}</a></CardText>
            <CardText className={cName}>{rating}</CardText>
            <CardText>{price}</CardText>
          </CardBody>
        </Card>
      </div>
    );
} 

export default Restaurant;