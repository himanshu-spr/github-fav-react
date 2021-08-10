import React, { useCallback } from "react";
import "./SortDropdown.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/rootReducer";
import { SORT_TYPES } from "../../../../constants/sort";
import { setSortValue } from "../../../../redux";

export const SORT_LABELS = {
  [SORT_TYPES.BEST_MATCH]: "Best Match",
  [SORT_TYPES.MOST_STARS]: "Most Stars",
  [SORT_TYPES.FEWEST_STARS]: "Fewest Stars",
};

const getOptions = () => {
  const options = Object.values(SORT_TYPES);
  return options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
};

const getSortData = (state: RootState) => state.sort;

const SortDropdown = () => {
  const dispatch = useDispatch();
  const sortData = useSelector(getSortData);

  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortValue(e.target.value));
    },
    [dispatch]
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
