// Dependecies
import React, { Component } from 'react';
import propTypes from 'prop-types';

// Components
import Header from './Header';
import Content from './Content';
import Contenido from './Contenido';
import Footer from './Footer';

// Data
import items from "../Data/menu";

class App extends Component {
  static propTypes = {
    children: propTypes.object.isRequired
  }

  render() {
    const { children } = this.props;
    return (
      <div className="App"> 
        <Header title="REACT.JS" items={items}/>
        <Contenido body={children}/>
        <Content/>
        <Footer copyright="&copy; Open."/>
      </div>
    );
  }
}

export default App;
