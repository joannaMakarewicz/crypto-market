import React from "react";
import { Link } from "react-router-dom";
import { SiBitcoinsv } from "react-icons/si";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <header>
      <Link to="/">
        <nav className="navbar">
          <SiBitcoinsv className="navbar__icon" />
          <p className="navbar__heading">
            Coin <span className="navbar__special">Search</span>
          </p>
        </nav>
      </Link>
    </header>
  );
};

export default Navbar;
