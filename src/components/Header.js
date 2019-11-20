import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="app-header">
      <h1 className="app-title">
        <Link to={"/"}>
          cook<span className="app__subtitle">book</span>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
