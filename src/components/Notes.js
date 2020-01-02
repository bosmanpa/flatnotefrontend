import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Note from './Note'
import { connect } from 'react-redux'


class Notes extends Component {
  render() {
    const notesList = this.props.current_user.notes.map(note => {
      return <Note  note={note} />
    })
    
    return(
           <Container>
            <Row>
              <Col id='left'>{notesList}</Col>
              <Col id='right'>2 of 2</Col>
            </Row>
          </Container>
    );
  }
};
const mapStateToProps = (state) => {
  return {current_user: state.current_user}
}

export default connect(mapStateToProps)(Notes);