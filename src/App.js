import React from 'react';

class App extends React.Component {
  // React.Component is acting as a subclass here 
  constructor(props) {
    super(props);

    this.state= { lat: null };
    window.navigator.geolocation.getCurrentPosition(
      
      position => {
        // We call setState to update state
        this.setState({ lat: position.coords.latitude});

      },
      err => console.log(err)
      );
  }
  render() {
    
    return <div>Latitude: {this.state.lat}</div>
  }
}

export default App;
