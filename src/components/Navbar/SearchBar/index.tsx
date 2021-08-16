import React, { useState, useCallback, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux";
import debounce from "lodash/debounce";

const SearchBar = () => {
  const dispatch = useDispatch();

  const delayedHandleChange = useCallback(
    debounce((eventData) => dispatch(setSearchValue(eventData)), 500),
    [dispatch]
  );
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => delayedHandleChange(event.target.value),
    [delayedHandleChange]
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
