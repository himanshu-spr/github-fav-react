import React from "react";
import { useSelector } from "react-redux";
import { FavoritesState } from "../../interfaces";
import { RootState } from "../../redux/rootReducer";
import "./Favorites.css";
import FavoriteList from "./FavoriteList";

const getFavoritesData = (state: RootState) => state.favorites;

const Favorites = () => {
  const favoritesData: FavoritesState = useSelector(getFavoritesData);
  return (
    <div className="fav-container">
      {favoritesData.favorites.length === 0 ? (
        <div className="no-result-container">No Favorite Repositories!</div>
      ) : (
        <FavoriteList favorites={favoritesData.favorites} />
      )}
    </div>
  );
};

export default Favorites;
