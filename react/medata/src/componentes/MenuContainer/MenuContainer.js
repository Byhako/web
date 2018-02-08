// Dependecies
import React, { Component } from 'react';

//import propTypes from "prop-types";

// Componets
import Tree from './Tree';

// Assets
import './../css/Menucontainer.css';

class MenuContainer extends Component {

  render() {
    return (
      <div className="Menu">
        <p>Directory Tree</p>
        <Tree/>
      </div>
    );
  }
}

export default MenuContainer;
