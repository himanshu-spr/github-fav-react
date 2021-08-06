import { ADD_REPOSITORY, REMOVE_REPOSITORY } from "./favoritesTypes";
import { Repository } from "../../interfaces";

export const addRepository = (repository: Repository) => {
  return {
    type: ADD_REPOSITORY,
    payload: repository,
  };
};

export const removeRepository = (repository: Repository) => {
  return {
    type: REMOVE_REPOSITORY,
    payload: repository,
  };
};
