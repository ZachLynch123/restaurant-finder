import React, { Component } from 'react';
import './App.css';
import Restaurant from './Restaurant';
import { Col } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }
  // api url https://developers.zomato.com/api/v2.1/search?count=3&lat=36.0144&lon=-115.1174&radius=75&sort=real_distance&order=asc

 
  componentDidMount() {
    this.api = '30b531a86dd28c712d12265fbd94fafa';
    this.header = {
      method: "GET",
      headers: {
        "user-key": this.api,
        "Content-type": "application/json"
      },
      credentails: "same-origin"
    }
    fetch('https://developers.zomato.com/api/v2.1/search?count=10&lat=36.0144&lon=-115.1174&radius=75&sort=real_distance&order=asc', this.header)
    .then(result => result.json())
    .then(json => {
      this.setState({
        isLoaded: true,
        items: json,
      })
    } );

  }

  render() {
    const { isLoaded, items } = this.state;
    if (isLoaded){
    return (
      <div className="App">
        <div className="container">
        <Col sm="12" id="tester">
          <Restaurant data={items.restaurants} />
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
