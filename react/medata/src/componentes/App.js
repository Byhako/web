// Dependecies
import React, { Component } from 'react';

// Components
import Header from './Header';
import MenuContainer from './MenuContainer/MenuContainer';
import ContentContainer from './ContentContainer/ContentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MenuContainer/>
        <ContentContainer/>
      </div>
    );
  }
}

export default App;
