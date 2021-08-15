import React, { useState, useCallback, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux";
import debounce from "lodash/debounce";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const submitHandler: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();
    },
    []
  );

  const delayedHandleChange = useCallback(
    debounce((eventData) => dispatch(setSearchValue(eventData)), 500),
    [dispatch]
  );

  const changeHandler: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setSearch(e.target.value);
      delayedHandleChange(e.target.value);
    },
    [delayedHandleChange]
  );

  return (
    <form className="search-bar" onSubmit={submitHandler}>
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={changeHandler}
      />
      <FaSearch className="search-icon" />
    </form>
  );
};

export default SearchBar;
