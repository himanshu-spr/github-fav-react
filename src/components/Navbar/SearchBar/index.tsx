import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { getData } from "../../../api/githubData";
import { useDispatch } from "react-redux";
import {
  fetchRepositoryFailure,
  fetchRepositoryRequest,
  fetchRepositorySuccess,
  setSearchValue,
} from "../../../redux";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const submitHandler = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      let data = [];
      try {
        dispatch(setSearchValue(search));
        dispatch(fetchRepositoryRequest());
        data = await getData(search, "");
        dispatch(fetchRepositorySuccess(data));
      } catch (error) {
        dispatch(fetchRepositoryFailure(error.message));
      }
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
