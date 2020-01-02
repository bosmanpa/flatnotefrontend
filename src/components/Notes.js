import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Note from './Note'
import { connect } from 'react-redux'
import NoteShow from './NoteShow'


class Notes extends Component {
  

  showSwitch = () =>{
    if (this.props.ifNoteShow !== null) {
       return <NoteShow />
    } else {
      return null
    }
  }

  render() {
    const notesList = this.props.current_user.notes.map(note => {
      return <Note  note={note} noteShow={this.props.noteShow}/>
    })

    return(
           <Container>
            <Row>
              <Col id='left'>{notesList}</Col>
              <Col id='right'>{this.showSwitch()}</Col>
            </Row>
          </Container>
    );
  }
};
const mapStateToProps = (state) => {
  return {current_user: state.current_user, ifNoteShow: state.noteShow}
}
const mapDispatchToProps = dispatch => {
  return{
      noteShow: noteId => dispatch({type: "NOTE_SHOW", payload: noteId})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);