import { FavoriteData } from "../../interfaces";
import { ADD_REPOSITORY, REMOVE_REPOSITORY } from "./favoritesTypes";

export const addRepository = (favInfo: FavoriteData) => {
  return {
    type: ADD_REPOSITORY,
    payload: favInfo,
  };
};

export const removeRepository = (favInfo: FavoriteData) => {
  return {
    type: REMOVE_REPOSITORY,
    payload: favInfo,
  };
};
