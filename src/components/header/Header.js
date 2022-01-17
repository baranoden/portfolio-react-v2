import { MenuOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="portfolio__header">
      <nav>
        <div className="portfolio__logo">
          <h1>Baran. </h1>
        </div>
        <ul className="portfolio__ul-items">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About</Link>
          </li>
          <li>
            <Link to="#">Services</Link>
          </li>
          <li>
            <Link to="#">Projects</Link>
          </li>
          <li>
            <Link to="#">Blog</Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
          <div className="portfolio__hamburger-menu">
            <MenuOutlined className="portfolio__menu" />
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
