import React from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';


class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      perams: { query: term },
      headers: {
        Authorization: 'Client-ID PbtO86FJUG2eD6gfx00mBSxbbexjhbSXfmbTh3rpM1s'
      }
    });
  }


  render() {
    return(
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
    
      </div>
      
    );
  }
}

export default App;
