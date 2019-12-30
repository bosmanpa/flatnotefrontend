import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Notes from '../components/Notes'

class NotesContainer extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/notes')
        .then(resp => resp.json())
        .then(notes => notes.map(note => this.props.addNote(note)))
    }

    render(){
        return( 
           <Container>
            <Row>
              <Col><Notes notes={this.props.notes}/></Col>
              <Col>2 of 2</Col>
            </Row>
          </Container>
        )
    }

}

const mapStateToProps = state =>{
    return {notes: state.notes}
  }

const mapDispatchToProps = dispatch => {
    return{
        addNote: note => dispatch({ type: 'ADD_NOTE', payload: note}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer)