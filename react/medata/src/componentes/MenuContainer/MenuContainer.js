// Dependecies
import React, { Component } from 'react';
import { Button } from 'reactstrap';
//import propTypes from "prop-types";

// Assets
import './../css/Menucontainer.css';

class MenuContainer extends Component {

  render() {
    return (
      <div className="Menu">
        <p>Directory Tree</p>
        <Button color="secondary">secondary</Button>{' '}
      </div>
    );
  }
}

export default MenuContainer;
