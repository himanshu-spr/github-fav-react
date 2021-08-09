import React, { useMemo } from "react";
import { RepositoryListProps } from "../../../interfaces";
import "./RepositoryList.css";
import RepositoryListItem from "./RepositoryListItem";
import SortDropdown from "./SortDropdown";
import { RootState } from "../../../redux/rootReducer";
import { useSelector } from "react-redux";

const getFavoritesData = (state: RootState) => state.favorites;

const RepositoryList = ({ repository }: RepositoryListProps) => {
  const favoritesData = useSelector(getFavoritesData);
  const favIDs = useMemo(
    () => favoritesData.favorites.map((fav) => fav.id),
    [favoritesData.favorites]
  );

  const isFavoriteData = useMemo(
    () => repository.map((repository) => favIDs.includes(repository.id)),
    [favIDs, repository]
  );

  if (!repository.length) {
    return <div className="no-result">No search results!</div>;
  }

  return (
    <div className="repository-result-container">
      <SortDropdown />
      <table className="repository-table">
        {repository.map((repository, index) => {
          return (
            <RepositoryListItem
              key={repository.id}
              repository={repository}
              isFavorite={isFavoriteData[index]}
            />
          );
        })}
      </table>
    </div>
  );
};

export default RepositoryList;
