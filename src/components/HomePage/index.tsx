import React from "react";
import "./HomePage.css";
import useRepositories from "../../hooks/useRepositories";
import { isError } from "../../helpers";
import RepositoryList from "./RepositoryList";

const HomePage = () => {
  const { status, data, error } = useRepositories();

  if (status === "loading") {
    return <p className="loading">Loading...</p>;
  }

  if (status === "error") {
    if (isError(error)) {
      return <p className="error">{error.message}</p>;
    } else {
      return <p className="error">Error. Try Again</p>;
    }
  }

  return data.length ? <RepositoryList repository={data} /> : null;
};

export default HomePage;
