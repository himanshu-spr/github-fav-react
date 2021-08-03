import React from "react";
import { RepositoryListProps } from "../../../interfaces";
import "./RepositoryList.css";
import RepositoryListItem from "./RepositoryListItem";

const RepositoryList = (props: RepositoryListProps) => {
  return props.repository.length === 0 ? (
    <div className="no-result">No search results!</div>
  ) : (
    <div className="repository-result-container">
      <table className="repository-table">
        {props.repository.map((repository) => {
          return <RepositoryListItem repository={repository} />;
        })}
      </table>
    </div>
  );
};

export default RepositoryList;
