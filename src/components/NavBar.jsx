import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Kalvium-Logo-SVG.svg";
import icon from "../assets/search.png";
import { useState } from "react";
import Book from "./Book";

const NavBar = ({ setSearchedValue }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleClick = () => {
    setSearchedValue(searchValue);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setSearchedValue(searchValue);
    }
  };

  const handleLogoClick = () => {
    setSearchValue("");
    setSearchedValue("");
  };

  return (
    <nav>
      <div className="home">
        <Link to="/" onClick={handleLogoClick}>
          <img className="logo" src={logo} alt="kalvium" />
        </Link>
      </div>
      <div className="Input">
        <input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
        />
        <button className="searchBtn" onClick={handleClick}>
          <img className="search" src={icon} alt="search" />
        </button>
      </div>
      <Link to="/Form">
        <button className="register">Register</button>
      </Link>
    </nav>
  );
};

export default NavBar;
