import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

function Header() {
  return (
    <header className="menu-bar">
      <Container>
        <Row>
          <Col className="logo">
            <h1>Logo</h1>
          </Col>
          <Col className="location-div">
            <span className="location">
              <b>Delivering in 15 minutes </b>
              <br />
              Ranchi, Jharkhand, India
            </span>
          </Col>
          <Col xs={4} className="search-bar">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="search">@</InputGroup.Text>
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col xs={2}className="btn-main">
          <span className="btn-login">Login</span>
          </Col>
          <Col className="btnCart-main">
            <Button className="btn-cart">Cart</Button>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
