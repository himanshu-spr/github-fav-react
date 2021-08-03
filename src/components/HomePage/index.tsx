import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { RepositoryState } from "../../interfaces";
import RepositoryList from "./RepositoryList";
import "./HomePage.css";
const HomePage = () => {
  const repositoryData: RepositoryState = useSelector(
    (state: RootState) => state.repository
  );

  return repositoryData.loading ? (
    <p className="loading">Loading...</p>
  ) : repositoryData.error ? (
    <p className="error">{repositoryData.error}</p>
  ) : (
    <RepositoryList repository={repositoryData.repository} />
  );
};

export default HomePage;
