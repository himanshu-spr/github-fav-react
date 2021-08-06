import {
  FETCH_REPOSITORY_REQUEST,
  FETCH_REPOSITORY_SUCCESS,
  FETCH_REPOSITORY_FAILURE,
} from "./repositoryTypes";

import { Repository } from "../../interfaces";

export const fetchRepositoryRequest = () => {
  return {
    type: FETCH_REPOSITORY_REQUEST,
    payload: "",
  };
};

export const fetchRepositorySuccess = (Repository: Repository[]) => {
  return {
    type: FETCH_REPOSITORY_SUCCESS,
    payload: Repository,
  };
};

export const fetchRepositoryFailure = (error: string) => {
  return {
    type: FETCH_REPOSITORY_FAILURE,
    payload: error,
  };
};
