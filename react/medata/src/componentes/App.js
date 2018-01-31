// Dependecies
import React, { Component } from 'react';

// Components
import Header from './Header';
import MenuContainer from './MenuContainer';
import ContentContainer from './ContentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="MeData"/>
        <MenuContainer/>
        <ContentContainer/>
      </div>
    );
  }
}

export default App;
