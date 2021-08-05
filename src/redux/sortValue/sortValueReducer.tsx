import { SET_SORT_VALUE } from "./sortValueTypes";
import { SearchValueAction } from "../../interfaces";

const initialState = {
  sortValue: "",
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
