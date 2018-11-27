import React from 'react';
import Loader from 'react-loader-spinner';
import App from './App';
import { geolocated } from 'react-geolocated';


class Location extends React.Component {
    render() {
        return !this.props.isGeolocationAvailable
          ? <div>Your browser does not support Geolocation</div>
          : !this.props.isGeolocationEnabled
            ? <div>Geolocation is not enabled</div>
            : this.props.coords
              ? <App locate={this.props.coords} />
              : <Loader
                  type="Puff"
                  color="#191970"
                  height="100"
                  width="100"
                />;
      }
}

export default geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(Location);