import { combineReducers } from "redux";
import repositoryReducer from "./repository/repositoryReducer";
import favoritesReducer from "./favorites/favoritesReducer";

const rootReducer = combineReducers({
  repository: repositoryReducer,
  favorites: favoritesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
