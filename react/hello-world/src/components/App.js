// Dependecies
import React, { Component } from 'react';

// Components
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

// Data
import items from "../Data/menu";

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <Header title="REACT.JS" items={items}/>
        <Content/>
        <Footer copyright="&copy; Open."/>
      </div>
    );
  }
}

export default App;
