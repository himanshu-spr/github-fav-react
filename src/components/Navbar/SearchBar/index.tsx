import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { fetchRepository } from "../../../redux";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(fetchRepository(searchValue));
    },
    [dispatch, searchValue]
  );

  const changeHandler = useCallback((e) => {
    setSearchValue(e.target.value);
  }, []);

  return (
    <form className="search-bar" onSubmit={submitHandler}>
      <input
        type="text"
        name="search"
        className="search-input"
        placeholder="Search"
        value={searchValue}
        onChange={changeHandler}
      />
      <FaSearch className="search-icon" />
    </form>
  );
};

export default SearchBar;
