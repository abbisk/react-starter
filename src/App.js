import React from 'react';

class App extends React.Component {
  // React.Component is acting as a subclass here 
  constructor(props) {
    super(props);

    this.state= { lat: null, errorMessage: '' };
    window.navigator.geolocation.getCurrentPosition(
      
      position => {
        // We call setState to update state
        this.setState({ lat: position.coords.latitude});

      },
      err => {
        this.setState({ errorMessage: err.message});
      }
      );
  }
  render() {
    
    return (
    <div>
      Latitude: {this.state.lat}
      <br />
      err: {this.state.errorMessage}
      </div>
    );
  }
}

export default App;
