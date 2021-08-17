import { SET_SEARCH_VALUE } from "./searchValueTypes";
import { SearchState, SearchValueAction } from "../../interfaces";

const initialState: SearchState = {
  searchValue: "",
};
let counter = 1;
const reducer = (state = initialState, action: SearchValueAction) => {
  console.log(counter++);
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
