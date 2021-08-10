import { SET_SORT_VALUE } from "./sortValueTypes";

export const setSortValue = (sortValue: string) => {
  return {
    type: SET_SORT_VALUE,
    payload: sortValue,
  };
};
