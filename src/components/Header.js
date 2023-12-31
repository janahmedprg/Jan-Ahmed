// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>Jan Ahmed </h1>
      <nav>
        <ul>
          <li>
            <Link to="Jan-Ahmed/" smooth="true" duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="Jan-Ahmed/project" smooth="true" duration={500}>
              Research Projects
            </Link>
          </li>
          <li>
            <Link to="Jan-Ahmed/experience" smooth="true" duration={500}>
              Experience
            </Link>
          </li>
          <li>
            <Link to="/" smooth="true" duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
