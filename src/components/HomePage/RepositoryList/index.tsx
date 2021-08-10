import React, { useMemo } from "react";
import { RepositoryListProps, FavoriteData } from "../../../interfaces";
import "./RepositoryList.css";
import RepositoryListItem from "./RepositoryListItem";
import SortDropdown from "./SortDropdown";
import { RootState } from "../../../redux/rootReducer";
import { useSelector } from "react-redux";
import { useCallback } from "react";

const getFavoritesData = (state: RootState) => state.favorites;

const getFavId = (favorites: FavoriteData[]) => {
  const favIdSet = new Set();

  favorites && favorites.forEach((favorite) => favIdSet.add(favorite.id));
  return favIdSet;
};

const RepositoryList = ({ repository }: RepositoryListProps) => {
  const favoritesData = useSelector(getFavoritesData);

  const favIdSet = useMemo(
    () => getFavId(favoritesData.favorites),
    [favoritesData.favorites]
  );

  const renderOptions = useCallback(
    () =>
      repository.map((repository) => {
        return (
          <RepositoryListItem
            key={repository.id}
            repository={repository}
            isFavorite={favIdSet.has(repository.id)}
          />
        );
      }),
    [repository, favIdSet]
  );

  if (!repository.length) {
    return <div className="no-result">No search results!</div>;
  }

  return (
    <div className="repository-result-container">
      <SortDropdown />
      <table className="repository-table">{renderOptions()}</table>
    </div>
  );
};

export default RepositoryList;
