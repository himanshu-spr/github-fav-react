import React from "react";
import { RepositoryListProps } from "../../../interfaces";
import "./RepositoryList.css";
import RepositoryListItem from "./RepositoryListItem";
import SortDropdown from "./SortDropdown";
import { RootState } from "../../../redux/rootReducer";
import { useSelector } from "react-redux";

const getFavoritesData = (state: RootState) => state.favorites;

const RepositoryList = ({ repository }: RepositoryListProps) => {
  const favoritesData = useSelector(getFavoritesData);
  const favRepositories = favoritesData.favorites;

  if (!repository.length) {
    return <div className="no-result">No search results!</div>;
  }

  const favIDs = favRepositories.map((fav) => fav.id);

  return (
    <div className="repository-result-container">
      <SortDropdown />
      <table className="repository-table">
        {repository.map((repository) => (
          <RepositoryListItem
            key={repository.id}
            repository={repository}
            fav={favIDs.includes(repository.id)}
          />
        ))}
      </table>
    </div>
  );
};

export default RepositoryList;
