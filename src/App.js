import React from 'react';

class App extends React.Component {
  // React.Component is acting as a subclass here 
  render() {
    window.navigator.geolocation.getCurrentPosition(
      
      position => console.log(position),
      err => console.log(err)
      );
    return <div>HI there</div>
  }
}

export default App;
