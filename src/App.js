import React, { Component } from 'react';
import './App.css';
import Restaurant from './Restaurant';
import { Col, Button } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      number: 0,
      
    };
  }
  // api url https://developers.zomato.com/api/v2.1/search?count=3&lat=36.0144&lon=-115.1174&radius=75&sort=real_distance&order=asc

 
  componentDidMount() {
    this.latitude = this.props.locate.latitude.toFixed(4);
    this.longitude = this.props.locate.longitude.toFixed(4);

    this.api = '30b531a86dd28c712d12265fbd94fafa';
    this.header = {
      method: "GET",
      headers: {
        "user-key": this.api,
        "Content-type": "application/json"
      },
      credentails: "same-origin"
    }
    fetch('https://developers.zomato.com/api/v2.1/search?count=20&lat=' + this.latitude + '&lon=' + this.longitude + '&radius=9000&sort=real_distance&order=asc', this.header)
    .then(result => result.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    } );
  }


  onClickListener = (event) => {
    let x = Math.floor(Math.random() * 10);
    
    this.setState(state => ({
      number: x,
    }));
  }

  render() {
    const { isLoaded, items, number } = this.state;
    if (isLoaded){
    return (
      <div className="App">
        <div className="container">
        <Col sm="8" id="tester">
        {/* change data to only pass 1 array to the restaurant, not multiple.
        Then refactor restaurant.js*/}
          <Restaurant data={items.restaurants}  />
          <Button onClick={this.onClickListener}>Get a different restaurant</Button>
          {console.log(number)}
        </Col>
        </div>
      </div>
    );} else {
      return (
        <div>Didn't load</div>
      );
    }
  }
}

export default App;
