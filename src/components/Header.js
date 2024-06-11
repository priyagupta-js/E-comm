import React from "react";
import { ReactDOM } from "react-dom/client";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

function Header() {
  return (
    <header>
      <Container>
        <Row>
          <Col>
            <h1>Logo</h1>
          </Col>
          <Col>
            <Button variant="outline-info">Info</Button>
          </Col>
          <Col>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </Col>
          <Col>
            <Button variant="outline-info">EN</Button>
          </Col>
          <Col>
          <Button variant="outline-info">sign-in</Button>
          </Col>
          <Col>
            <Button>Cart</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
