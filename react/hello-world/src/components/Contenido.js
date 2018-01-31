// Dependencies
import React, { Component } from 'react';
import propTypes from 'prop-types';

import './css/Content.css';

class Contenido extends Component {
  static propTypes = {
    body: propTypes.object.isRequired
  };

  render() {
    const { body } = this.props;
    return (
      <div className="Contenido">
        {body}
      </div>
    );
  }
}

export default Contenido;
