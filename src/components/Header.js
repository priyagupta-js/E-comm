import React from "react";
import {faCartShopping} from "react-icons/fa";
function Header() {
  return (
    <header className="menu-bar">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="location">
        <b>Delivering in 15 minutes</b>
        <br />
        Ranchi, Jharkhand, India
      </div>
      <div className="search-bar">
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>{" "}
        <input
          type="text"
          className="search"
          placeholder="Search.."
          name="search"
        ></input>
      </div>
      <div className="btn-login"><span className="login-text">Login</span></div>
      <div className="btn-cart"><button className="cart"><FontAwesomeIcon icon={faCartShopping} />My Cart</button></div>
      {/* <Container>
        <Row> */}
      {/* <Col className="logo">
            <h1>Logo</h1>
          </Col> */}
      {/* <Col className="location-div">
            <span className="location">
              
            </span>
          </Col> */}
      {/* <Col xs={4} className="search-bar">
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1" className="search">@</InputGroup.Text>
              <Form.Control
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col> */}
      {/* <Col xs={2}className="btn-main">
          <span className="btn-login">Login</span>
          </Col> */}
      {/* <Col className="btnCart-main">
            <Button className="btn-cart">Cart</Button>
          </Col>
        </Row>
      </Container> */}
    </header>
  );
}

export default Header;
