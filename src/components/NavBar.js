import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { withRouter } from 'react-router-dom'

class NavBar extends Component{
    
    homeClick = () =>{
        this.props.history.push("/dashboard")
    }

    newNoteClick = () => {
        this.props.history.push("/note/new")
    }
    
    render(){
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>FlatNote</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link onClick={this.homeClick}>Home</Nav.Link>
            <Nav.Link onClick={this.newNoteClick}>New Note</Nav.Link>
            <Nav.Link href="/login">Sign Out</Nav.Link>
            </Nav>
        </Navbar>
    )}
  };
  
  export default withRouter(NavBar);
  