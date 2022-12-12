import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log('App rendering')
  return (
    <div className="App">
      <AppTitle/>
      <Rating />
      <Accordion />
      <Rating/>
    </div>
  );
}

function AppTitle(){
  console.log('AppTitle rendering')
  return <>This is APP component</>
}

function Rating() {
  console.log('Rating rendering')
  return (
    <div>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
      <Star/>
    </div>
  )
}

function Star() {
  console.log('Star rendering')
  return (
    <div>
      star
    </div>
  )
}

function Accordion() {
  console.log('Accordion rendering')
  return (
    <div>
      <AccordionTitle/>
      <AccordinBody/>
    </div>
  )
}

function AccordionTitle() {
  console.log('AccordionTitle rendering')
  return (
    <h3>Menu</h3>
  )
}
function AccordinBody() {
  console.log('AccordionBody rendering')
  return (
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
  )
}




export default App;
