import React from "react";
import { FavoritesState } from "../../../interfaces";
import FavoriteListItem from "./FavoriteListItem";
import "./FavoriteList.css";

const FavoriteList = (props: FavoritesState) => {
  return (
    <table className="favorites-table">
      {props.favorites.map((favorite) => {
        return <FavoriteListItem favorite={favorite} />;
      })}
    </table>
  );
};

export default FavoriteList;
