import React, { Component } from 'react';
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class NotesContainer extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/notes')
        .then(resp => resp.json())
        .then(notes => this.setState({notes: notes}))
    }


    render(){
        return( 
           <Container>
            <Row>
              <Col>NOTES</Col>
              <Col>2 of 2</Col>
            </Row>
          </Container>
        )
    }

}

const mapStateToProps = state =>{
    return {notes: state.notes}
  }

export default connect(mapStateToProps)(NotesContainer)