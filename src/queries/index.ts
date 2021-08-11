import { gql } from "graphql-request";

export const GET_REPOSITORIES = gql`
  query GetRepositories($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 30) {
      repositoryCount
      edges {
        node {
          ... on Repository {
            id
            description
            stargazerCount
            url
            owner {
              login
              avatarUrl
            }
            name
            nameWithOwner
          }
        }
      }
    }
  }
`;

export const GET_REPOSITORY = gql`
  query GetRepository($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      id
      description
      stargazerCount
      url
      owner {
        login
        avatarUrl
      }
      name
      nameWithOwner
    }
  }
`;
