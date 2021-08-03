import axios from "axios";
import {
  FETCH_REPOSITORY_REQUEST,
  FETCH_REPOSITORY_SUCCESS,
  FETCH_REPOSITORY_FAILURE,
} from "./repositoryTypes";

import { Repository, RepositoryAction } from "../../interfaces";
import { Dispatch } from "react";

export const fetchRepository = (searchValue: string) => {
  return (dispatch: Dispatch<RepositoryAction>) => {
    dispatch(fetchRepositoryRequest());
    axios
      .get(`https://api.github.com/search/repositories?q=${searchValue}`)
      .then((response) => {
        const repositories = response.data.items;
        const repositoryFilterData = repositories.map((repository: any) => {
          return {
            id: repository.id,
            name: repository.name,
            full_name: repository.full_name,
            avatar: repository.owner.avatar_url,
            url: repository.html_url,
            stars: repository.stargazers_count,
            description: repository.description,
            updated_at: repository.updated_at,
          };
        });
        dispatch(fetchRepositorySuccess(repositoryFilterData));
      })
      .catch((error) => {
        dispatch(fetchRepositoryFailure(error.message));
      });
  };
};

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
