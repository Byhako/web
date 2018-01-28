// Dependecies
import React, { Component } from 'react';
import propTypes from "prop-types";

// assets
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  //Recibimos las propiedades
  static propTypes = {
    title: propTypes.string.isRequired,
    items: propTypes.array.isRequired
  };
  render() {
    const {title, items} = this.props;
    
    //const title = this.props.title;
    //const items = this.props.items;
    
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
          <h2>{title}</h2>

          <ul className="menu">
            {items && items.map((items, key) => <li key={key}>{items.title}</li>)}
          </ul>
        </div>

      </div>
    );
  }
}

export default Header;
