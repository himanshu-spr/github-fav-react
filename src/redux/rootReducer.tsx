import { combineReducers } from "redux";
import repositoryReducer from "./repository/repositoryReducer";
import favoritesReducer from "./favorites/favoritesReducer";
import searchValueReducer from "./searchValue/searchValueReducer";
import sortValueReducer from "./sortValue/sortValueReducer";
const rootReducer = combineReducers({
  repository: repositoryReducer,
  favorites: favoritesReducer,
  search: searchValueReducer,
  sort: sortValueReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
