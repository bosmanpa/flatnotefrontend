import React, { Component } from 'react';
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Login extends Component{
    state={
        current_user: ''
    }

    handleChange = event => this.setState({current_user: event.target.value})

    handleSubmit = event => {
        event.preventDefault()
        this.fetchUser()
    }

    fetchUser = () =>{
        fetch(`http://localhost:3001/users/${this.state.current_user}`)
        .then(resp => resp.json())
        .then(user => {
            this.props.userLogin(user)
            this.props.history.push("/dashboard")
        })
        .catch(error => console.log(error))
   
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}> 
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="username" value={this.state.username} onChange={this.handleChange}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control placeholder="Enter Username" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }

}
const mapStateToProps = state => {
    return {current_user: state.current_user}
}
const mapDispatchToProps = dispatch => {
    return{
        userLogin: user => dispatch({type: "USER_LOGIN", payload: user})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)