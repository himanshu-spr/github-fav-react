import { ADD_REPOSITORY, REMOVE_REPOSITORY } from "./favoritesTypes";
import { FavoritesAction, FavoritesState, Repository } from "../../interfaces";

const initialState: FavoritesState = {
  favorites: [],
};

const reducer = (state = initialState, action: FavoritesAction) => {
  switch (action.type) {
    case ADD_REPOSITORY:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };

    case REMOVE_REPOSITORY:
      return {
        ...state,
        favorites: state.favorites.filter((favorite: Repository) => {
          return favorite.id !== action.payload.id;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
