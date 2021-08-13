import React from "react";
import "./HomePage.css";
import useRepositories from "../../hooks/useRepositories";
import RepositoryList from "./RepositoryList";

const HomePage = () => {
  const { isError, isLoading, data, error } = useRepositories();

  if (isLoading) {
    return <p className="loading">Loading...</p>;
  }

  if (isError && error) {
    return <p className="error">{error.message}</p>;
  }

  return data.length ? (
    <RepositoryList repository={data} />
  ) : (
    <div>No search result</div>
  );
};

export default HomePage;
