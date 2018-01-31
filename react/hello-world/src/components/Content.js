import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {
  constructor(){
    super(); //para tener el metodo this
    this.state = {
      count: 0,
      num1: 0,
      num2: 0,
      result: 0
    };

    this.handleCountClick = this.handleCountClick.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleInputChanged = this.handleInputChanged.bind(this);
  }

  componentDidMount(){
    this.setState({count: 1});
  }

  handleCountClick(evento){
    if (evento.target.id==="add"){
      this.setState({
        count: this.state.count + 1
      });
    }else if(evento.target.id==="subtraer" && this.state.count > 0){
      this.setState({
        count: this.state.count - 1
      });
    }else {
      this.setState({count: 0});
    }
  }

  handleResultClick(evento){
    this.setState({
      result: this.state.num1 + this.state.num2
    });
  }

  handleInputChanged(evento){
    if(evento.target.id === "numero1"){
      this.setState({
        num1: Number(evento.target.value)
      });
    }else {
      this.setState({
        num2: Number(evento.target.value)
      });
    }
  }

  render() {
    return (
      <div className="Content">
        <h1>Counter: {this.state.count}</h1>
        <p>  ReactJS es una librería Javascript desarrollada por Facebook 
        y diseñada para ayudarnos a crear SPA’s (Single Page Application), 
        su objetivo concretamente es tratar de facilitar la tarea de 
        desarrollar interfaces de usuario. Podríamos decir que React es 
        la V en un contexto en el que se use el patrón MVC o MVVM. </p>

        <p>
          <button id="add" onClick={this.handleCountClick}>+</button>
          <button id="subtraer" onClick={this.handleCountClick}>-</button>
          <button id="reset" onClick={this.handleCountClick}>Reset</button>
        </p>
        <br/>

        <h2>Calculadora</h2>
        <input id="numero1" type="number" value={this.state.num1} onChange={this.handleInputChanged} />
        +
        <input id="numero2" type="number" value={this.state.num2} onChange={this.handleInputChanged} />

        <button id="resultado" onClick={this.handleResultClick}>=</button>

        {this.state.result}
      </div>
    );
  }
}

export default Content;
