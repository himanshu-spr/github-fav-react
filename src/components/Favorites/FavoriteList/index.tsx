import React from "react";
import { FavoritesState } from "../../../interfaces";
import FavoriteListItem from "./FavoriteListItem";
import "./FavoriteList.css";

const FavoriteList = ({ favorites }: FavoritesState) => {
  return (
    <table className="favorites-table">
      {favorites.map((favorite) => (
        <FavoriteListItem key={favorite.id} favorite={favorite} />
      ))}
    </table>
  );
};

export default FavoriteList;
