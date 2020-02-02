import React, { Component } from 'react';

import Header from './components/Header';
import Live from './components/Live';

class App extends Component {
  render(){
    return (
      <div className="conatiner-fluid">
          <Header />
          <Live />  
      </div>
    );
  }
}

export default App;
