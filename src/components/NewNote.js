import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class NewNote extends Component{
    state={
        title: '',
        body: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        console.log("SUBMIT")
    }

    onTitleChange = event => this.setState({title: event.target.value})
    onBodyChange = event => this.setState({body: event.target.value})



    render(){
    return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formTitle" value={this.state.title} onChange={this.onTitleChange}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control placeholder="Note Title" />
                </Form.Group>

                <Form.Group controlId="formBody" value={this.state.body} onChange={this.onBodyChange}>
                    <Form.Label>Note</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="Note Body"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
    )
}

}

export default NewNote