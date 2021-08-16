import React, { useState, useCallback, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux";
import debounce from "lodash/debounce";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    debounce((event) => dispatch(setSearchValue(event.target.value)), 500),
    [dispatch]
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Search"
        onChange={handleChange}
      />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
