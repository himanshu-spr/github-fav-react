import React, { useCallback, useState } from "react";
import "./SortDropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../../api/githubData";
import { RootState } from "../../../../redux/rootReducer";
import {
  fetchRepositoryFailure,
  fetchRepositoryRequest,
  fetchRepositorySuccess,
  setSortValue,
} from "../../../../redux";
import { stat } from "fs";

const SortDropdown = () => {
  const dispatch = useDispatch();
  const searchData = useSelector((state: RootState) => {
    return state.search;
  });
  const sortData = useSelector((state: RootState) => {
    return state.sort;
  });

  const changeHandler = useCallback(
    async (e: React.ChangeEvent<HTMLSelectElement>) => {
      let data = [];
      dispatch(setSortValue(e.target.value));
      switch (e.target.value) {
        case "most stars":
          try {
            dispatch(fetchRepositoryRequest());
            data = await getData(searchData.searchValue, "stars&order=desc");
            dispatch(fetchRepositorySuccess(data));
          } catch (error) {
            dispatch(fetchRepositoryFailure(error.message));
          }
          break;
        case "fewest stars":
          try {
            dispatch(fetchRepositoryRequest());
            data = await getData(searchData.searchValue, "stars&order=asc");
            dispatch(fetchRepositorySuccess(data));
          } catch (error) {
            dispatch(fetchRepositoryFailure(error.message));
          }
          break;
        case "best match":
          try {
            dispatch(fetchRepositoryRequest());
            data = await getData(searchData.searchValue, "");
            dispatch(fetchRepositorySuccess(data));
          } catch (error) {
            dispatch(fetchRepositoryFailure(error.message));
          }
          break;
        default:
          break;
      }
    },
    [dispatch, searchData.searchValue]
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
          <option value="best match">Best match</option>
          <option value="most stars">Most stars</option>
          <option value="fewest stars">Fewest stars</option>
        </select>
      </div>
    </div>
  );
};

export default SortDropdown;
