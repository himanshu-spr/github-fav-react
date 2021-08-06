import React from "react";
import { FavoritesState } from "../../../interfaces";
import FavoriteListItem from "./FavoriteListItem";
import "./FavoriteList.css";

const FavoriteList = ({ favorites }: FavoritesState) => {
  return (
    <table className="favorites-table">
      {favorites.map((favorite) => {
        return <FavoriteListItem favorite={favorite} key={favorite.id} />;
      })}
    </table>
  );
};

export default FavoriteList;
