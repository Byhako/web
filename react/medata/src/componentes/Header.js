// Dependecies
import React, { Component } from 'react';
import propTypes from "prop-types";

// assets
import './css/Header.css';

class Header extends Component {
  //Recibimos las propiedades
  static propTypes = {
    title: propTypes.string.isRequired
  };
  render() {
    const title = this.props;
    
    return (
      <div className="Header">
        <h2>MeData</h2>
      </div>
    );
  }
}

export default Header;
