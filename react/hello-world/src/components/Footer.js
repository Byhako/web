// Dependecies
import React, { Component } from 'react';
import propTypes from "prop-types";

// Assets
import './css/Footer.css';

class Footer extends Component {
  //Recibimos las propiedades
  static propTypes = {
    copyright: propTypes.string
  };
  render() {
    const {copyright = "&copy; React."} = this.props;
    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{__html:copyright}} /> 
      </div>
    );
  }
}

export default Footer;
