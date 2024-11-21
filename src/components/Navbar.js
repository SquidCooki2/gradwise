import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <Navbar bg="success" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src="./GradWise.png"
            alt="Logo"
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          GradWise
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/quiz">Quiz</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
