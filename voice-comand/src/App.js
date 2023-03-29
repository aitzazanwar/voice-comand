import React from 'react';
import { Container, Navbar, Nav, Row, Col, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <Navbar bg="light" expand="md">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://netfreight.descartes.com/Login/ClientLogin.aspx">NetFreight</Nav.Link>
            <Nav.Link href="mailto:accounts@example.com">@accounts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col className="text-center">
          <h1>Welcome to Voice recognizer</h1>
          <p>This is my homepage.</p>
          
          <Button variant="primary">Click & Speak</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
