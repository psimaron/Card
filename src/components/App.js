import React from 'react';
import './App.css';
import Heading from './Heading';
import List from './List';
import Video from './Video';

class App extends React.Component {

  render () {
    return ( 
      <div className="container">
        <div className="header">  
          <Heading title={"Managed agency selection"} stitle={"Strengthen your onboarding process"}/>
        </div>
        <div className="content">
          <div className="video">
            <Video />
          </div>
          <div className="list">
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;