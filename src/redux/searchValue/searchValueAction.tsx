import { SET_SEARCH_VALUE } from "./searchValueTypes";

export const setSearchValue = (searchValue: string) => {
  return {
    type: SET_SEARCH_VALUE,
    payload: searchValue,
  };
};
