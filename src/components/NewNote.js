import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'

class NewNote extends Component{
    state={
        title: '',
        body: ''
    }

    handleSubmit = event => {
        event.preventDefault()
        this.postFetch()
    }

    onTitleChange = event => this.setState({title: event.target.value})
    onBodyChange = event => this.setState({body: event.target.value})

    postFetch = () => {
        const fetchBody = {
            title: this.state.title,
            body: this.state.body,
            user_id: this.props.current_user.id
        }
    
        const postObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(fetchBody)
        }
    
        fetch('http://localhost:3001/notes', postObj)
        .then(resp => resp.json())
        .then(note => {
            this.props.newNote(note)
            this.props.history.push('/dashboard')
        })
        .catch(error => console.log(error))
    }

    


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

const mapStateToProps = (state) => {
    return {current_user: state.current_user}
}

const mapDispatchToProps = dispatch => {
    return{
        newNote: note => dispatch({type: "NEW_NOTE", payload: note})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNote)