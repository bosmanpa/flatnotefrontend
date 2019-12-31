import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>FlatNote</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/note/new">New Note</Nav.Link>
            <Nav.Link href="/login">Sign Out</Nav.Link>
            </Nav>
        </Navbar>
    );
  };
  
  export default NavBar;
  