import {
  FETCH_REPOSITORY_REQUEST,
  FETCH_REPOSITORY_SUCCESS,
  FETCH_REPOSITORY_FAILURE,
} from "./repositoryTypes";
import { RepositoryAction, RepositoryState } from "../../interfaces";

const initialState: RepositoryState = {
  loading: false,
  repository: [],
  error: "",
};

const reducer = (state = initialState, action: RepositoryAction) => {
  switch (action.type) {
    case FETCH_REPOSITORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_REPOSITORY_SUCCESS:
      return {
        loading: false,
        repository: action.payload,
        error: "",
      };
    case FETCH_REPOSITORY_FAILURE:
      return {
        loading: false,
        repository: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
