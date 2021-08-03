import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import "./Navbar.css";
import { IoHeart } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="link-container">
        <NavLink activeClassName="active" to="/" exact>
          Github
        </NavLink>
      </div>
      <div className="search-container">
        <SearchBar />
      </div>
      <div className="link-container">
        <NavLink activeClassName="active" to="/favorites" exact>
          <IoHeart className="fav-icon" />
          Favorites
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
