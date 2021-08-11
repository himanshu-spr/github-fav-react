import React from "react";
import "./HomePage.css";
import useRepositories from "../../hooks/useRepositories";
import RepositoryList from "./RepositoryList";

const HomePage = () => {
  const { status, data, error } = useRepositories();

  if (status === "loading") {
    return <p className="loading">Loading...</p>;
  }

  if (status === "error" && error) {
    return <p className="error">{error.message}</p>;
  }

  if (!data) {
    return <p className="loading">No search results!</p>;
  }

  return <RepositoryList repositories={data} />;
};

export default HomePage;
