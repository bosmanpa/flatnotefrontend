import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NotesContainer from './NotesContainer.js'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
          <Container>
            <Row>
              <Col><NotesContainer /></Col>
              <Col>2 of 2</Col>
            </Row>
          </Container>
      </div>
    </Router>
  );
}

export default App;
