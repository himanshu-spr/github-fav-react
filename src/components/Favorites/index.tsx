import React from "react";
import { useSelector } from "react-redux";
import { FavoritesState } from "../../interfaces";
import { RootState } from "../../redux/rootReducer";
import "./Favorites.css";
import FavoriteList from "./FavoriteList";

const getFavoritesData = (state: RootState) => state.favorites;

const Favorites = () => {
  const favoritesData: FavoritesState = useSelector(getFavoritesData);

  const favRepositories = favoritesData.favorites;

  return (
    <div className="fav-container">
      {favRepositories.length === 0 ? (
        <div className="no-result-container">No Favorite Repositories!</div>
      ) : (
        <FavoriteList favorites={favRepositories} />
      )}
    </div>
  );
};

export default Favorites;
