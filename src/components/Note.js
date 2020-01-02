import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class Note extends Component {
    handleClick = (noteId) => {
        this.props.noteShow(noteId)
    }
 
    render () {
    return(
        <Card onClick={() => this.handleClick(this.props.note.id)} style={{ width: '18rem'}}>
        <Card.Body>
            <Card.Title>{this.props.note.title}</Card.Title>
            <Card.Text>{this.props.note.body}</Card.Text>
        </Card.Body>
        </Card>
        )
    }
}

export default Note