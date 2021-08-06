import { SET_SEARCH_VALUE } from "./searchValueTypes";
import { SearchValueAction } from "../../interfaces";

const initialState = {
  searchValue: "best match",
};

const reducer = (state = initialState, action: SearchValueAction) => {
  switch (action.type) {
    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
