import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID PbtO86FJUG2eD6gfx00mBSxbbexjhbSXfmbTh3rpM1s',
      }

});