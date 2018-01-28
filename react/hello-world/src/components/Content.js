import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <h1>Mi contendio</h1>
        <p>  ReactJS es una librería Javascript desarrollada por Facebook 
        y diseñada para ayudarnos a crear SPA’s (Single Page Application), 
        su objetivo concretamente es tratar de facilitar la tarea de 
        desarrollar interfaces de usuario. Podríamos decir que React es 
        la V en un contexto en el que se use el patrón MVC o MVVM. </p>

      </div>
    );
  }
}

export default Content;
