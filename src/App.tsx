import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';
function App() {
  console.log('App rendering')
  return (
    <div className="App">
      <PageTitle title={'This is App component'} />
      <PageTitle title={'Sigma'} />
      Article 1
      <Rating value={3} />
      <Accordion title={'Menu'} collapsed={true} />
      <Accordion title={'Menu 2'} collapsed={false}/>
      Article 2
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  console.log('AppTitle rendering')
  return <h1>{props.title}</h1>
}


export default App;
