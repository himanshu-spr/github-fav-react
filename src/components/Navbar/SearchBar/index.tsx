import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../../redux";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submitHandler = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      dispatch(setSearchValue(search));
    },
    [search, dispatch]
  );

  const changeHandler = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

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
