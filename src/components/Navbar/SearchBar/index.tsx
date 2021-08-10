import React, { useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import { getData } from "../../../clients/rest";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { SortState } from "../../../interfaces";

import {
  fetchRepositoryFailure,
  fetchRepositoryRequest,
  fetchRepositorySuccess,
  setSearchValue,
} from "../../../redux";

const getSortData = (state: RootState) => state.sort;

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const sortData: SortState = useSelector(getSortData);
  const dispatch = useDispatch();

  const submitHandler = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        dispatch(setSearchValue(search));
        dispatch(fetchRepositoryRequest());
        const data = await getData(search, sortData.sortValue);
        dispatch(fetchRepositorySuccess(data));
      } catch (error) {
        dispatch(fetchRepositoryFailure(error.message));
      }
    },
    [search, dispatch, sortData.sortValue]
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
