import React, { Component } from 'react';
import './App.css';
import Loader from "react-loader-spinner";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Restaurant from './components/Restaurant';
import { Col, Button, Row } from 'reactstrap';

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
        number: 1
      });
    } );
  }


  onClickListener = (event) => {
    let x = Math.floor(Math.random() * 20);
    
    if(this.state.number === x) {
      x = Math.floor(Math.random() * 20);
    }
    
    this.setState(state => ({
      number: x,
    }));
  }

  render() {
    const { isLoaded, items, number } = this.state;
    if (isLoaded){
      console.log(items);
    return (
      <div className="App">
      <CSSTransition
            in={isLoaded}
            appear={true}
            timeout={900}
            classNames="fade"
            >
        <div className="container-fluid">
        <img className="bg"></img>
        <div className="row text-center justify-content-md-center" >
          <div className="col-xs-12 col-sm-6 col-md-4 col-centered">
            <div className="restaurant-card">
                <Restaurant data={items.restaurants} number={number}  />
            </div>
              <Button onClick={this.onClickListener}>Get a different restaurant</Button>
            </div>

          </div>
        </div>
        </CSSTransition>
      </div>
    );} else {
      return (
        <div className="load-container">
          <div className="row text-center" id="row">
          <div className="col-12">
            <Loader
                      type="Puff"
                      color="#191970"
                      height="100"
                      width="100"
                    />
                    </div>
                    </div>
        </div>
      );
    }
  }
}

export default App;
