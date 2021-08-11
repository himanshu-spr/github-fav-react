import { Repository } from "../interfaces";
import { GraphQLClient } from "graphql-request";
import { token } from "../auth";
export const getFavAction = (repository: Repository) => {
  return {
    id: repository.id,
    name: repository.name,
    owner: repository.owner.login,
  };
};

const endpoint = "https://api.github.com/graphql";

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: "Bearer " + token,
  },
});
