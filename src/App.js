import React from 'react';
import Accordion from './components/Accordion';

const items= [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework'
  },

  {
    title: 'What is React-Native?',
    content: 'React is a mobile app javascript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is a famous javascript library in the market now a days'
  },

];


function App () {

    return(
      <div>
        <h1>Hello World!</h1>
        <Accordion items={items}/>
      </div>
      
      
    );
}

export default App;
