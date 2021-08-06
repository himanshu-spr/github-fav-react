import React from "react";
import { RepositoryListProps } from "../../../interfaces";
import "./RepositoryList.css";
import RepositoryListItem from "./RepositoryListItem";
import SortDropdown from "./SortDropdown";

const RepositoryList = ({ repository }: RepositoryListProps) => {
  if (!repository.length) {
    return <div className="no-result">No search results!</div>;
  }

  return (
    <div className="repository-result-container">
      <SortDropdown />
      <table className="repository-table">
        {repository.map((repository) => {
          return (
            <RepositoryListItem key={repository.id} repository={repository} />
          );
        })}
      </table>
    </div>
  );
};

export default RepositoryList;
