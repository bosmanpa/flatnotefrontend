import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'


class Note extends Component {
 render () {
    return(
        <Card style={{ width: '18rem'}}>
        <Card.Body>
            <Card.Title>{this.props.note.title}</Card.Title>
            <Card.Text>{this.props.note.body}</Card.Text>
        </Card.Body>
        </Card>
        )
    }
}

export default Note