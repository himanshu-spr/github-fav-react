import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { RepositoryState } from "../../interfaces";
import RepositoryList from "./RepositoryList";
import "./HomePage.css";

const getRepositoryData = (state: RootState) => {
  return state.repository;
};

const HomePage = () => {
  const repositoryData: RepositoryState = useSelector(getRepositoryData);

  if (repositoryData.loading) {
    return <p className="loading">Loading...</p>;
  }

  if (repositoryData.error) {
    <p className="error">{repositoryData.error}</p>;
  }

  return <RepositoryList repository={repositoryData.repository} />;
};

export default HomePage;
