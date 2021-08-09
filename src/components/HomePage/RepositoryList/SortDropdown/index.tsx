import React, { useCallback } from "react";
import "./SortDropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../clients/rest";
import { RootState } from "../../../../redux/rootReducer";
import {
  fetchRepositoryFailure,
  fetchRepositoryRequest,
  fetchRepositorySuccess,
  setSortValue,
} from "../../../../redux";

import { SORT_TYPES } from "../../../../constants/sort";

const getOptions = () => {
  const options = Object.values(SORT_TYPES);
  return options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
};

const getSearchData = (state: RootState) => state.search;
const getSortData = (state: RootState) => state.sort;

const SortDropdown = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(getSearchData);
  const sortData = useSelector(getSortData);

  const handleDataDispatch = useCallback(
    async (sortValue) => {
      try {
        dispatch(fetchRepositoryRequest());
        const data = await getData(searchData.searchValue, sortValue);
        dispatch(fetchRepositorySuccess(data));
      } catch (error) {
        dispatch(fetchRepositoryFailure(error.message));
      }
    },
    [dispatch, searchData.searchValue]
  );

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortValue(e.target.value));
      handleDataDispatch(e.target.value);
    },
    [dispatch, handleDataDispatch]
  );

  return (
    <div className="sort-container">
      <div>
        <span className="sort-title">Sort by</span>
        <select
          name="sort"
          id="sort"
          onChange={changeHandler}
          value={sortData.sortValue}
        >
          {getOptions()}
        </select>
      </div>
    </div>
  );
};

export default SortDropdown;
