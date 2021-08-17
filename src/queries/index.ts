import { gql } from "graphql-request";
import { REPOSITORY_DATA } from "./fragments";

export const GET_REPOSITORIES = gql`
  query GetRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 30) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            ${REPOSITORY_DATA}
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      ${REPOSITORY_DATA}
    }
  }
`;
