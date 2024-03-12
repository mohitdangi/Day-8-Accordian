import React from 'react';
import Accordion from './Accordion';

const App = () => {
  return (
    <div className="app">
      <Accordion
        title="Accordion 1"
        content="Content for Accordion 1 goes here..."
      />
      <Accordion
        title="Accordion 2"
        content="Content for Accordion 2 goes here..."
      />  <Accordion
      title="Accordion 3"
      content="Content for Accordion 3 goes here..."
    />  <Accordion
    title="Accordion 4"
    content="Content for Accordion 4 goes here..."
  />
     
    </div>
  );
};

export default App;
