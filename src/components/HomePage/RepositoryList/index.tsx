import React from "react";
import { RepositoryListProps } from "../../../interfaces";
import "./RepositoryList.css";
import RepositoryListItem from "./RepositoryListItem";
import SortDropdown from "./SortDropdown";

const RepositoryList = (props: RepositoryListProps) => {
  return props.repository.length === 0 ? (
    <div className="no-result">No search results!</div>
  ) : (
    <div className="repository-result-container">
      <SortDropdown />
      <table className="repository-table">
        {props.repository.map((repository) => {
          return (
            <RepositoryListItem repository={repository} key={repository.id} />
          );
        })}
      </table>
    </div>
  );
};

export default RepositoryList;
