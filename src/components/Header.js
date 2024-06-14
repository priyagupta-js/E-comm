import React from "react";

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
        <i class="fa fa-search"></i>
        <input
          type="text"
          className="search"
          placeholder="Search.."
          name="search"
        ></input>
      </div>
      <div className="btn-login">
        <span className="login-text">Login</span>
      </div>
      <div className="btn-cart">
        <button className="cart">
          <i class="fa-solid fa-cart-shopping"></i>&nbsp;
          My Cart
        </button>
      </div>
    </header>
  );
}

export default Header;
