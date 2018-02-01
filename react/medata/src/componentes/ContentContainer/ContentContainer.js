// Dependecies
import React, { Component } from 'react';

// Componets
import Tabs from './Tabs';

// Assets
import './../css/ContenContainer.css';

class ContenContainer extends Component {

  render() {
    return (
      <div className="Container">
        <Tabs/> 
      </div>
    );
  }
}

export default ContenContainer;
