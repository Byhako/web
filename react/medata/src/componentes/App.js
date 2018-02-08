// Dependecies
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

// Components
import Header from './Header';
import MenuContainer from './MenuContainer/MenuContainer';
import ContentContainer from './ContentContainer/ContentContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
        <Row>        
          <Col><Header/></Col>
        </Row>
        <Row>
            <Col sm="5"><MenuContainer/></Col>
            <Col sm="7"><ContentContainer/></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
