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
  return options.map((option) => {
    return <option value={option}>{option}</option>;
  });
};

const getSearchData = (state: RootState) => {
  return state.search;
};

const getSortData = (state: RootState) => {
  return state.sort;
};

const SortDropdown = () => {
  const dispatch = useDispatch();
  const searchData = useSelector(getSearchData);
  const sortData = useSelector(getSortData);

  const handleMostStars = useCallback(async () => {
    try {
      dispatch(fetchRepositoryRequest());
      const data = await getData(searchData.searchValue, "stars&order=desc");
      dispatch(fetchRepositorySuccess(data));
    } catch (error) {
      dispatch(fetchRepositoryFailure(error.message));
    }
  }, [dispatch, searchData.searchValue]);
  const handleFewestStars = useCallback(async () => {
    try {
      dispatch(fetchRepositoryRequest());
      const data = await getData(searchData.searchValue, "stars&order=asc");
      dispatch(fetchRepositorySuccess(data));
    } catch (error) {
      dispatch(fetchRepositoryFailure(error.message));
    }
  }, [dispatch, searchData.searchValue]);

  const handleBestMatch = useCallback(async () => {
    try {
      dispatch(fetchRepositoryRequest());
      const data = await getData(searchData.searchValue, "");
      dispatch(fetchRepositorySuccess(data));
    } catch (error) {
      dispatch(fetchRepositoryFailure(error.message));
    }
  }, [dispatch, searchData.searchValue]);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortValue(e.target.value));
      switch (e.target.value) {
        case SORT_TYPES.MOST_STARS:
          handleMostStars();
          break;
        case SORT_TYPES.FEWEST_STARS:
          handleFewestStars();
          break;
        case SORT_TYPES.BEST_MATCH:
          handleBestMatch();
          break;
        default:
          break;
      }
    },
    [dispatch, handleMostStars, handleFewestStars, handleBestMatch]
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
