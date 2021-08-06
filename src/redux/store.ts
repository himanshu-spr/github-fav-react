import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { load, save } from "../storage";

const store = createStore(
  rootReducer,
  { favorites: load("favorites", {}) },
  applyMiddleware(logger, thunk)
);

store.subscribe(() => save(store.getState().favorites, "favorites"));

export default store;
