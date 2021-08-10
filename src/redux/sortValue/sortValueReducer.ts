import { SET_SORT_VALUE } from "./sortValueTypes";
import { SearchValueAction, SortState } from "../../interfaces";
import { SORT_LABELS } from "../../components/HomePage/RepositoryList/SortDropdown";

const initialState: SortState = {
  sortValue: SORT_LABELS.BEST_MATCH,
};

const reducer = (state = initialState, action: SearchValueAction) => {
  switch (action.type) {
    case SET_SORT_VALUE:
      return {
        ...state,
        sortValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
