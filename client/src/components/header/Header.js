import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="header bg-light">
      <nav
        className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between align-middle"
      >
        <Link to="/" className="logo">
          <h1
            className="navbar-brand text-uppercase p-0 m-0"
            onClick={() => window.scrollTo({ top: 0 })}
          >
            CHAT-APP
          </h1>
        </Link>

        <Menu />
      </nav>
    </div>
  );
};

export default Header;
